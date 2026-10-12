import { execFileSync } from 'node:child_process'
import { mkdtempSync, readFileSync, writeFileSync, copyFileSync, mkdirSync, lstatSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, dirname } from 'node:path'
const source = process.cwd(), project = mkdtempSync(join(tmpdir(), 'isolated-site-source-'))
const env = { ...process.env, NUXT_TELEMETRY_DISABLED: '1', CI: 'true',
 NPM_CONFIG_USERCONFIG: join(project, 'empty.npmrc'), NPM_CONFIG_GLOBALCONFIG: join(project, 'empty-global.npmrc'),
 NPM_CONFIG_REGISTRY: 'https://registry.npmjs.org', NODE_AUTH_TOKEN: '', NPM_TOKEN: '' }
function run(args) {
 try { execFileSync('pnpm', args, { cwd: project, env, stdio: 'pipe', timeout: 240000 }) }
 catch(error) { throw new Error(`Isolated site ${args.join(' ')}: ${String(error.stdout ?? '').slice(-1500)} ${String(error.stderr ?? '').slice(-1500)}`) }
}
try {
 const files = execFileSync('git', ['ls-files', '-z'], { cwd: source, encoding: 'utf8' }).split('\0').filter(Boolean)
 for(const path of files) {
  if (/^(?:registration|state|secrets|credentials)\//.test(path) || path === 'site.config.json' || path === '.npmrc' || path.startsWith('.env')) continue
  if(!lstatSync(join(source,path)).isFile()) throw new Error('Source must be regular tracked files')
  mkdirSync(dirname(join(project,path)), { recursive: true }); copyFileSync(join(source,path),join(project,path))
 }
 writeFileSync(env.NPM_CONFIG_USERCONFIG, ''); writeFileSync(env.NPM_CONFIG_GLOBALCONFIG, '')
 copyFileSync(join(project,'site.config.example.json'),join(project,'site.config.json'))
 run(['install','--frozen-lockfile','--ignore-scripts']); run(['test:dependency-security'])
 run(['validate:content']); run(['test']); run(['typecheck']); run(['build'])
 const manifest = JSON.parse(readFileSync(join(project,'package.json')))
 console.log(JSON.stringify({ name:manifest.name, officialModule:manifest.dependencies['@nuxtjp/localized-site'],
 isolatedExample:true, sourceCI:true, privateRegistrationRead:false, deployment:false }))
} finally { rmSync(project, { recursive: true, force: true }) }
