(function ($) {
	$.fn.emailValidator = function () {
		// your code here
		let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	  return emailRegex.test($(this).val())
    // console.log($(this).val())
	}
})(jQuery)
