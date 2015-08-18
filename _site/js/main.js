$(document).ready( function() {

    $('.first_school').trigger('click');
    $('.first_job').trigger('click');


});


(function() {
    util = {};

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

    util.small_caps = function(str) {

        var full_cap_words = ["PC", "LLO"];

        function capitalize_string(str) {
            console.log(str);
            return str.split("").map(function(item) {
                return '<div class="capital">' +
                    item +
                    '</div>';
            }).join("");
        }

        var small_cap_ary = str.split(" ").map(function(item) {

            console.log(full_cap_words.indexOf(item.toUpperCase()))

            if (full_cap_words.indexOf(item.toUpperCase()) != -1)
                return capitalize_string(item);
            else
                return '<div class="capital">' +
                    item[0] +
                    '</div>' +
                    item.substring(1);

        });

        return small_cap_ary.join(" ");
    }
})();
