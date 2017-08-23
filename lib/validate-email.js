(function ($) {
	$.fn.emailValidator = function () {

		// your code here
		var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 	return mailformat.test($("input:text").val());
}
})(jQuery)
