# 公開site sourceの検証

依存は正式公開の`@nuxtjp/localized-site@0.1.4`、Nuxt 4.5.2、Vue 3.5.43です。local TGZやprivate registryは不要です。

owner CIは`site.config.example.json`だけを別の一時checkoutへ導入して、依存回帰・content・型・buildを検証します。ignoredの実登録dataは読みません。公開content・実host・本番配備・移行元廃止の判断は別です。

[Englishと正本情報](README.md)
