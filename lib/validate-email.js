(function ($) {
	$.fn.emailValidator = function () {
	return /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(this.val())

		// your code here
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		let email = this.val()

		return emailReg.test(email)
	}
})(jQuery)
