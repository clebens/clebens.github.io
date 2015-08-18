$(document).ready( function() {

    function setup_display_toggle(prefix) {
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

        $("#" + prefix + "-hide").toggleClass("hidden");
        $("#" + prefix + "-details").toggleClass("hidden");
    }

    setup_display_toggle("mohrip");

});
