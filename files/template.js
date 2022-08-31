

jQuery(document).on("load", function() {
    jQuery("#contents").html('<div id="mySecondDiv">Hello</div>');
    jQuery("#contents").append($('<div/>', {
        id: 'someID',
        className: 'foobar'
    }));

    console.log("TEST");
});