(function ($) {
	$.fn.emailValidator = function () {
	return /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(this.val())

		// your code here
	}
})(jQuery)
