(function() {
    util = {};

    /* Include function for Other Project Files (NOT DEPENDENCEIS) */
    var include = function(filename) {
        var head = document.getElementsByTagName('head')[0];

        var script = document.createElement('script');
        script.src = filename;
        script.type = 'text/javascript';

        head.appendChild(script)
    }

    include("/js/smallcaps.js");

    util.setup_display_toggle = function(prefix) {
        $("#" + prefix + "-show").on("click", function() {
            $("#" + prefix + "-show").toggleClass("hidden");
            $("#" + prefix + "-hide").toggleClass("hidden");
            $("#" + prefix + "-details").toggleClass("hidden");
        });

        $("#" + prefix + "-hide").on("click", function() {
            $("#" + prefix + "-show").toggleClass("hidden");
            $("#" + prefix + "-hide").toggleClass("hidden");
            $("#" + prefix + "-details").toggleClass("hidden");
        });

        $("#" + prefix + "-name").on("click", function() {
            if ($("#" + prefix + "-show").hasClass('active'))
                $("#" + prefix + "-show").trigger("click");
            else
                $("#" + prefix + "-hide").trigger("click");
        });

        $("#" + prefix + "-hide").toggleClass("hidden");
        $("#" + prefix + "-details").toggleClass("hidden");
    };

})();

$(document).ready( function() {

});
