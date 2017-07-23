var C = require('../lib/wxpage').C
module.exports = C('header', function (vm) {
	return {
		data: {
			title: 'header~'
		},
		onLaunch: function () {
			vm.$set({
				title: 'Launch...'
			})
		},
		onLoad: function () {
			console.log('On header load', this.data)
			setTimeout(function () {
				vm.$set({'title': '√ Done'})
			}, 1000)

			vm.$on('play', function (playload) {
				console.log(playload) // {cid: 123}
			})

		},
		onTap: function (e) {
			console.log(e)
		}
	}
})
