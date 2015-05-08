/*global $, app*/

module.exports = function ($html, cb) {
    cb = cb || function () {};

    $($html).find("a.source").oembed(null, {
        fallback : false,
        includeHandle: false,
        maxWidth: 750,
        maxHeight: 525,
        afterEmbed: function(container, oembedData) {
            this.parent().parent().parent().show();
        },
        onProviderNotFound: function() {
            var link = $($html).find("a.source");
            var resourceURL = link.attr("href");
            if (resourceURL.match(/(https:\/\/)[\S]*\.(jpg|png|gif|gifv|webm)\b/) {
                link.parent().append("<div class='oembedall-container'><a href='" + resourceURL + "' target='_blank'><img src='" + resourceURL + "' / style='max-width:500px; max-height:350px; width: auto; height: auto;'></a></div>");
                this.parent().parent().show();
            }
        }
    });
};
