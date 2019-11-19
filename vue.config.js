const path = require('path')

module.exports = {
	configureWebpack: {
		resolve: {
			alias: {
				'assets': '@/assets',
				'common': '@/common',
				'component': '@/components',
				'http': '@/http',
				'views': '@/views',
				'utils': '@/utils'
			}
		}
	},
  css: {
		loaderOptions: {
			sass: {
				prependData: `
					@import "assets/style/_varibale.scss";
				`
			}
    }
  }
}
