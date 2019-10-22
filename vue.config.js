const path = require('path')

module.exports = {
	configureWebpack: {
		resolve: {
			alias: {
				'assets': '@/assets',
				'common': '@/common',
				'component': '@/components',
				'http': '@/http',
				'views': '@/views'
			}
		}
	},
  css: {
		loaderOptions: {
			sass: {
				prependData: `@import 'src/assets/style/_varibale.scss';`
			}
    }
  }
}
