(function ($) {
	$.fn.emailValidator = function () {
		var pattern = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
		// console.log($(this));
		return pattern.test($(this).val());
		// your code here
	}
})(jQuery)
