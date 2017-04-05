(function() {
    var smallcaps_tag = document.registerElement('small-caps', {
        prototype: Object.create(HTMLElement.prototype)
    });

    var small_caps = function(str, big_font) {

        var full_cap_words = ["PC", "LLO"];
        var no_cap_words = ["AND"];

        function capitalize_string(str, big_font) {
            return str.split("").map(function(item) {
                return '<div style="' +
                        'font-size: ' + big_font + ';' +
                        'display: inline;' +
                        '">' +
                        item +
                        '</div>';
            }).join("");
        }

        var small_cap_ary = str.split(" ").map(function(item) {

            if (full_cap_words.indexOf(item.toUpperCase()) != -1)
                return capitalize_string(item, big_font);
            else if (no_cap_words.indexOf(item.toUpperCase()) != -1)
                return item;
            else
                return '<div style="' +
                    'font-size: ' + big_font + ';' +
                    'display: inline;' +
                    '">' +
                    item[0] +
                    '</div>' +
                    item.substring(1);

        });

        return small_cap_ary.join(" ");
    }

    $(document).ready(function() {
        $('small-caps').each(function(index, element){

            var big_font =  $(element).attr('big-font') ||
                            (Math.floor($(element).css('font-size').match(/[0-9.]+/) * 1.25) + "px");
            $(element).html(small_caps($(element).html(),
                                        big_font));
        });
    });

})();
