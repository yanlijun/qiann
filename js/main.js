var jQuery = jQuery || window.jQuery;
(function($) {

    "use strict";

    // if no jQuery library, then quit
    if (typeof $ === 'undefined') return;

    $('.select-card a').on('click', function() {
        $(this).addClass('sel').siblings().removeClass('sel');
        return false;
    });

})(jQuery);
