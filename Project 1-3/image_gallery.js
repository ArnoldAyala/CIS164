"use strict";

$(document).ready(function () {
    $("#image_list a").each((index, img) => {
        // get old and new urls
        var imageURL = $(img).attr("href");

        // preload images		
        var bookImage = new Image();
        bookImage.src = imageURL;

        // set up event handlers			
        $(img).click(evt => {
            $("#image").attr("src", imageURL);

            // cancel the default action of each link
            evt.preventDefault();
        });  
    }); 
});