var C = require('../lib/wxpage').C
module.exports = C('header', function (vm) {
	return {
		/**
		 * 子组件独立的数据
		 */
		data: {
			title: 'header~'
		},
		onLaunch: function () {
			vm.$set({
				title: 'Launch...'
			})
		},
		/**
		 * 子组件独立的生命周期方法
		 */
		onLoad: function () {
			console.log('On header load', this.data)
			setTimeout(function () {
				vm.$set({'title': '√ Done'})
			}, 1000)

			/**
			 * 子组件监听父组件消息
			 */
			vm.$on('play', function (playload) {
				console.log(playload) // {cid: 123}
			})

		},
		/**
		 * 子组件事件处理方法
		 */
		onTap: function (e) {
			console.log(e)

			/**
			 * 子组件直接调用父组件方法，回传数据
			 */
			this.onTapHeader({cid: 123})
			/**
			 * 子组件向父组件派发消息
			 */
			vm.$emit('ontapheader', {cid: 123})
		}
	}
})
