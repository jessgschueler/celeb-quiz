$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault ();
// let result = parseInt($("#q1" + "#q2" + "#q3").val());
    const result1 = parseInt($("#q1").val())
    const result2 = parseInt($("#q2").val())
    const result3 = parseInt($("#q3").val())
    const result = result1 + result2 + result3;

    if (result < 4 && result > 2) {
      $("#tomC").show ();
    } else {
      $("#tomC").hide();
    }

    if (result > 4 && result < 7) {
      $("#gwen").show ();
    } else {
      $("#gwen").hide();
    }

    if (result >= 7) {
      $("#cTop").show ();
    } else {
      $("#cTop").hide();
    }
    
    if (result <= 2) {
      alert("To find your true celebrity dating result please complete ALL of the forms, we are experiencing high volume of requests so make sure you get yours in!")
    } 
  });
}); 