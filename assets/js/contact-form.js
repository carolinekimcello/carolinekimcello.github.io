(function(){
  emailjs.init("user_rzP9JYsPveUI7a3bCCxfi");
})();

var myform = $("form#myform");
myform.submit(function(event){
  event.preventDefault();

  // Change to your service ID, or keep using the default service
  var service_id = "default_service";
  var template_id = "template_KdXyty3U";

  var name = document.forms["contactForm"]["from_name"].value;
  var email = document.forms["contactForm"]["reply_to"].value;
  var sbj = document.forms["contactForm"]["subject"].value;
  var msg = document.forms["contactForm"]["message_html"].value;

  if((name+" ").trim() == "") {
    swal("ERROR", "[Name] field is empty.", "error");
    return false;
  }
  else if((email+" ").trim() == "") {
    swal("ERROR", "[Email Address] field is empty.", "error");
    return false;
  }
  else if((sbj+" ").trim() == "") {
    swal("ERROR", "[Subject] field is empty.", "error");
    return false;
  }
  else if((msg+" ").trim() == "") {
    swal("ERROR", "[Message] field is empty.", "error");
    return false;
  }

  myform.find("button").text("Sending...");
  myform.find("button").addClass('disabled');
  emailjs.sendForm(service_id,template_id,"myform")
    .then(function(){
      swal("SUCCESS", "Your email has been sent!", "success").then((value) => {
        myform.find("button").text("Send");
        location.reload();
      });
    }, function(err) {
      swal("ERROR", JSON.stringify(err), "error");
      // alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
      myform.find("button").text("Send");
      location.reload();
    });
  return false;
});