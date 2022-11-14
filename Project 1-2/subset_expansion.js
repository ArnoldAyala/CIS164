"use strict";
$(document).ready( () => {
    $("#jdom a").click(evt => {
        const a = evt.currentTarget;

        $(a).toggleClass("hide");

        if ($(a).attr("class") !== "hide") {
            $(".hide").hide();
            $(a).text("Show more");
        }
        else {
            $(".hide").show();
            $(a).text("Show less");
        }

    });
});