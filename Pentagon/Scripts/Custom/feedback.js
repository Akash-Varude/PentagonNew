function render(data) {
    if (data.display == true) {
        var html = "<div class='dynamic-feedback-div'><div class='feedback-name-div'> " + data.name + "</div> <div class='feedback-email-div'>" + data.email + "</div> <div class='feedback-email-div'>"+data.organisation+"</div> <div class='feedback-content-div'>" + data.body+"</div></div> ";
        $('#FeedbackDynamicText').append(html);
    }
}

var coment = [
    { "name": "Akash Varude", "email": "asvarude@mitaoe.ac.in", "organisation": "MIT Academy of Engineering", "body": "This is amazing", "display": false }
];
fetch("../../Scripts/Custom/feedback.json")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        coment.push(data);
    })
for (var i = 0; i < coment.length; i++) {
    if (coment[i].display == true) {
        render(coment[i]);
    }
}

function displayComent() {
    var addObj = {
        "name": $('#names').val(),
        "email": $('#email').val(),
        "body": $('#body').val(),
        "organisation": $('#organisation').val(),
        "display": false
    };
    console.log(addObj);
    coment.push(addObj);
    render(addObj);
    debugger;
    var subject = 'From feedback';
    if (isNotEmpty(addObj.name, addObj.email, addObj.organisation, addObj.body)) {
        debugger;
        $.ajax({
            url: "/index.php",
            type: 'POST',
            dataType: 'json',
            data: { name: addObj.name, email: addObj.email, body: addObj.body, subject: subject, organisation: addObj.organisation },
            success: function (response) {
                debugger;
                console.log("Email sent successfully.");
            }, error: function (e) {
                console.log(e);
            }
        });
    }

}
function isNotEmpty(name, email, organisation, body) {
    if (name != "" && email != "" && organisation != "" && body != "" ) {
        return true;
    }
    else {
        console.log('some fields are empty');
        return false
    }
}

