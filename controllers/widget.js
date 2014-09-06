/**
 * A simple loading widget that uses titanium's Activity Indicator.
 * 
 * @class Widgets.com.rays.loading
 */

var _initCompleted = false;

/***
*  Add our views to the current window of the project.
***/
$.init = function(currentWindow) {
	Ti.API.debug("Initializing com.rays.loading widget....");
	
	var _currentWindow = currentWindow;
	
	if (_currentWindow) {
		_currentWindow.add($.loadingOverlayView);
		_currentWindow.add($.disableScreenOverlayView);	
		_initCompleted = true;	
	}
	else {
		Ti.API.error("com.rays.loading: Could not initialize loading widget. Please make sure you are passing the current window.");
	}

};

$.startLoading = function(loadingMessage) {
	if (_initCompleted) {
		var _loadingMessage = loadingMessage || L('loadingMessage', 'Loading... Please Wait');

		$.loadingMessageLabel.setText(_loadingMessage);
		
		$.disableScreenOverlayView.show();
	    $.loadingOverlayView.show();
	    $.loadingIndicator.show();	
	}
	else
		Ti.API.error("com.rays.loading: Loading init not found");
};

$.stopLoading = function() {
    $.loadingOverlayView.hide();
    $.loadingIndicator.hide();
    $.disableScreenOverlayView.hide();
};

exports.init = $.init;
exports.start = $.startLoading;
exports.stop = $.stopLoading;