"use strict";

$(document).ready( () => {
    //set focus to the Arrival date
    $("#arrival_date").focus();   
}); // end ready

//event handler for the submit button validates user entries
$("#reservation_form").submit(evt => {
    $("#arrival_date").val().trim();
    $("#nights").val().trim();
    $("#email").val().trim();
    $("#phone").val().trim();
    $("#name").val().trim();
    
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    const arrivalDate = $("#arrival_date").val();
    const nights = $("#nights").val();
    const email = $("#email").val();
    const phone = $("#phone").val();
    const name = $("#name").val();
    let isValid = true;

    //validate the Arrival date
    if (arrivalDate === "") {
        $("#arrival_date").next().text("This field is required.");
        isValid = false;
    }
    else {
        $("#arrival_date").next().text("");
    }

    //validate the Departure date
    if (nights === "") {
        $("#nights").next().text("This field is required.");
        isValid = false;
    }
    else if (isNaN(nights)) {
        $("#nights").next().text("Must be a number.");
        isValid = false;
    }
    else {
        $("#nights").next().text("");
    }

    //validate the email
    if (email === "") {
        $("#email").next().text("This field is required.");
        isValid = false;
    }
    else if (!emailPattern.test(email)) {
        $("#email").next().text("Must be a valid email address.");
        isValid = false;
    }
    else {
        $("#email").next().text("");
    }

    //validate the phone
    if (phone === "") {
        $("#phone").next().text("This field is required.");
        isValid = false;
    }
    else {
        $("#phone").next().text("");
    }

    //validate the name
    if (name === "") {
        $("#name").next().text("This field is required.");
        isValid = false;
    }
    else {
        $("#name").next().text("");
    }

    //prevent the default action of submitting the form if any entries are invalid 
    if (isValid === false) {
        evt.preventDefault()
    }
}); // end submit