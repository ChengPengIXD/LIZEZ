/*!
 * Uses the jQuery lightweight plugin boilerplate by @ajpiano
 */

;(function ( $, window, document, undefined ) {

    var chatBubble = "chatBubble",

        defaults = {
            typingSpeed: 40, // speed in words per minute
            delay: 1000 // delay between adding messages
        };

    function Plugin( element, options ) {
        this.element = element;
        this.options = $.extend( {}, defaults, options) ;
        this._defaults = defaults;
        this._name = chatBubble;

        this.init();
    }

    function formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

    Plugin.prototype = {

        init: function() {
            var self = this;
            var cl = $(self.element).attr("class");
            if (cl.length == 0) { 
                $(self.element).addClass('cb__list');
            }

            var messages = this.options.messages;
            var count = messages.length;
            var typingSpeed = this.options.typingSpeed || this.defaults.typingSpeed;
            var delay = this.options.delay || this.defaults.delay;

            var i = 0;

            function addMessage() {
                self.addMessage(self.element, messages[i], typingSpeed).then(function() {
                    window.setTimeout(function() {
                        i++;
                        if (i < count) addMessage();
                    },delay);
                });
            }

            addMessage();
        },

        addMessage: function (el, message, typingSpeed) {
            var dt = new Date();
            var time = formatAMPM(dt); 

            var $listItem = $('<li></li>');
            var $bubble = $('<div class="bubble typing">...</div><div class="user-img"></div>');
            //var $time = $('<div class="time">' + time + '</div>');
            var words = message.split(' ').length; 
            var speed = (words / typingSpeed) * 6000;

            if (speed < 1000) speed = 1000;
            if (speed > 10000) speed = 10000;

            $listItem.html($bubble);
            $(el).append($listItem);
          
            return new Promise(function(resolve, reject) {
                window.setTimeout(function () {
                    $bubble.slice(0, 1).html('<div class="msg">' + message + '</div > <div class="time">' + time + '</div>').removeClass('typing');
                    resolve(true);
                },speed);
            
            });
        }
    };

    $.fn[chatBubble] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + chatBubble)) {
                $.data(this, "plugin_" + chatBubble,
                new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document );