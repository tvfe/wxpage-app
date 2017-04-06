var P = require('../lib/wxpage')
var Header = require('../comps/header')

P('index', {
	comps: [
		Header,
	],
	data: {
		// 页面数据
	},
	onLaunch: function () {
		console.log('## On index page launch')
	},
	onAppLaunch: function (opts) {
		console.log('## [Page] APP Launch', opts)
	},
	onLoad: function() {
	},
	onShow: function () {
		console.log('## On index page show')
	},
	onAwake: function (t) {
		console.log('## On index page awake', t)
	},
	onPlay: function () {
		this.$route('play?cid=123')
	}
})
