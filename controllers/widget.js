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

$.startLoading = function(message, options) {
    if (!_initCompleted) {
        Ti.API.error('com.rays.loading: Loading init not found');
        return;
    }
    
    message = message || L('loadingMessage', 'Loading... Please Wait');
    options = _.extend({
        showOverlay: true,
        showMessage: true
    }, options);
    
    if (options.showMessage) {
        $.loadingMessageLabel.show();
        $.loadingMessageLabel.setHeight(Ti.UI.SIZE);
        $.loadingMessageLabel.setText(message);
    }
    else {
        $.loadingMessageLabel.hide();
        $.loadingMessageLabel.setHeight(0);
        $.loadingMessageLabel.setText('');
    }

    $.loadingIndicator.show();
    $.loadingOverlayView.show();
        
    $.disableScreenOverlayView.setBackgroundColor(options.showOverlay ? '#cc000000' : 'transparent');
    $.disableScreenOverlayView.show();
};

$.stopLoading = function() {
    $.loadingOverlayView.hide();
    $.loadingIndicator.hide();
    $.disableScreenOverlayView.hide();
};

exports.init = $.init;
exports.start = $.startLoading;
exports.stop = $.stopLoading;
