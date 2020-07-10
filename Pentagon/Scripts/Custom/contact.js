function sendEmail() {
    var name = $('#name')[0].value;
    var email = $('#email')[0].value;
    var phone = $('#phone')[0].value;
    var body = $('#body')[0].value;
    var subject = $('#subject')[0].value;
   
    if (isNotEmpty(name, email, phone, body)) {
        $.ajax({
            url: "/index.php",
            type: 'POST',
            dataType: 'json',
            data: { name: name, email: email, body: body, subject: subject, phone: phone },
            success: function (response) {
                debugger;
                console.log("Email sent successfully.");
            }, error: function (e) {

                console.log(e);
            }
        });
    }
}
function isNotEmpty(name, email, phone, body) {
    if (name != "" && email != "" && phone != "" && body != "" && subject != "") {
        return true;
    }
    else {
        console.log('some fields are empty');
        return false
    }
}
