var jQuery = jQuery || window.jQuery;
(function($) {

    "use strict";

    // if no jQuery library, then quit
    if (typeof $ === 'undefined') return;


    function dialog() {
        var $dialog = $('#dialog');
        var $explanation = $('#explanation');

        function stopPropagation(e) {
            e.stopPropagation();
        }
        function showExplanation() {
            $dialog.addClass('show');
            $explanation.addClass('crt').siblings().removeClass('crt');
            return false;
        }
        function hideDialog() {
            $dialog.removeClass('show');
        }

        if ($dialog.length) {
            $('.explanation').on('click', showExplanation);
            $dialog.find('.m-pnl').on('click', stopPropagation);
            $('.u-ico-close').on('click', hideDialog);
            $(window).on('click', hideDialog);
        }
    }

    function selectCard() {
        var $select = $('[class*=select-card] a');

        if ($select.length) {
            $select.on('click', function() {
                $(this).addClass('sel').siblings().removeClass('sel');
                return false;
            });
        }

    }

    function check() {
        var $check = $(':radio, :checkbox');

        function reSetCheck() {
            $check.each(function() {
                if (this.checked) {
                    $(this).addClass('checked');
                } else {
                    $(this).removeClass('checked');
                }
            });
        }

        if ($check.length) {
            reSetCheck();
            $check.on('change', reSetCheck);
        }
    }

    $(function() {
        dialog();
        selectCard();

        check();
    });

})(jQuery);
