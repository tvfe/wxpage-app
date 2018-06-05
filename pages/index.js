var P = require('../lib/wxpage')
var Header = require('../comps/header')

P('index', {
	/**
	 * 注册子组件控制器
	 */
	comps: [
		Header,
	],
	data: {
		// 页面数据
	},
	onLaunch: function () {
		console.log('## On index page launch')
	},
	/**
	 * 父组件生命周期方法
	 */
	onAppLaunch: function (opts) {
		console.log('## [Page] APP Launch', opts)
	},
	onLoad: function() {
		console.log('onAppLaunch => onLoad')

		/**
		 * 监听来自子组件的消息
		 */
		this.$emitter.on('ontapheader', function (payload) {
			console.log(payload) //{cid: 123}
		})

	},
	onShow: function () {
		console.log('## On index page show')
	},
	onAwake: function (t) {
		console.log('## On index page awake', t)
	},
	/**
	 * 父组件事件回调
	 */
	onPlay: function () {
		// 跳转其它页面
		this.$route('play?cid=123')
		// 向子组件广播消息
		this.$emitter.emit('play', {cid: 123})
	},
	/**
	 * 可提供接口给子组件调用
	 */
	onTapHeader: function (payload) {
		console.log(payload) // {cid: 123}
	}
})
