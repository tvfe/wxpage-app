
var d = new Date()
require('./lib/wxpage').A({
	config: {
		route: '/pages/$page'
	},
	onLaunch: function(opts) {
		console.log('APP is Running', opts)
	},
	onShow: function () {
		// Do something
	}
})
