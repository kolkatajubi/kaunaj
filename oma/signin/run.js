$(document).ready(function(){
    $("submitform").click(function(e){
        var f = JSON.stringify($("#submitForm").serializeJSON());
        $.ajax({
            url: "/",
            type: "POST",
            dataType: "json",
            contentType: "application.json",
            data: f
        });
    e.preventDefault();
    });
});

// beforeSend: function(x) {
    //   if (x && x.overrideMimeType) {
    //     x.overrideMimeType("application/j-son;charset=UTF-8");
    //   }
    // },
    // success: function(data) {
    //     if (data.msg=="Welcome buddy :)") {
    //         $(".loginElements").hide();
    //         $("#loggedInMessage").text(data.msg);
    //     }
    //     else if (data.msg=="Sorry, wrong password :(") {
    //         $("#loggedInMessage").text(data.msg);
    //     }
    //     else if (data.msg=="Sorry, I don't know this person :(") {
    //         $("#loggedInMessage").text(data.msg);
    //     }
    // }