const path = require('path')

module.exports = {
  css: {
		loaderOptions: {
			sass: {
				prependData: `@import 'src/assets/style/_varibale.scss';`
			}
    }
  }
}
