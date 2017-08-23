(function ($) {
	$.fn.emailValidator = function () {
		let email = /.+@.+\..+/
		return email.test($(this).prop('value'))
	}
})(jQuery)
