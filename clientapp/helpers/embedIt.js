/*global $, app*/

module.exports = function ($html, cb) {
    cb = cb || function () {};

    $($html).find("a.source").oembed(null, {
        fallback : false,
        includeHandle: false,
        maxWidth: 750,
        maxHeight: 525,
        beforeEmbed: function(oembedData) {
            oembedData.code = oembedData.code[0].innerHTML.replace("http:", "https:");
        },
        afterEmbed: function(container, oembedData) {
            this.parent().parent().parent().show();
        },
        onProviderNotFound: function() {
            var link = $($html).find("a.source");
            var resourceURL = link.attr("href");
            if (resourceURL.match(/(https:\/\/)\S*\.(jpg|png|gif|gifv|webm)\b/i)) {
                link.parent().append("<div class='oembedall-container'><a href='" + resourceURL + "' target='_blank'><img src='" + resourceURL + "' / style='max-width:750px; max-height:525px; width: auto; height: auto;'></a></div>");
                this.parent().parent().show();
            }
        }
    });
};
