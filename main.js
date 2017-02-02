$(document).ready(function() {
  // alert("Hello World");
  var numCards = 0;
  var blank = $("form").serialize();

  $(document).on("focusin","input, textarea", function() {
    if($(this).val() === $(this).attr("default")) {
        $(this).val("");
        $(this).css("color", "black");
    }
  });

  $(document).on("focusout","input, textarea", function() {
    if($(this).val() === "") {
        $(this).val($(this).attr("default"));
        $(this).css("color", "#dddddd");
    }
  });

  $(document).on("submit","form", function() {
    if($('form').serialize() != blank) {
      $(".wrapper").prepend(
        "<div class=\"card\" id=\"card" + numCards + "\">" +
          "<h1>" + $("#first_name").val() + " " + $("#last_name").val() + "</h1>" +
          "<a href=\"#\">Click here for description!</a>" +
        "</div>" +
        "<div class=\"desc\" id=\"desc" + numCards + "\">" +
          "<p>" + $("textarea").val() + "</p>" +
        "</div>"
      );
      $("#desc"+numCards).hide();
      numCards++;
      $("form")[0].reset();
      $("input").css("color","#dddddd");
      $("#submit").css("color","black");
      $("textarea").css("color","#dddddd");
    }
    else {
      alert("Please enter user information.");
    }
    return false;
  });

  $(document).on("click", ".card a", function() {
    var thisNum = $(this).parent().attr("id").substr(4);
    $("#card"+thisNum).hide();
    $("#desc"+thisNum).show();
  });

  $(document).on("click", ".desc p", function() {
    var thisNum = $(this).parent().attr("id").substr(4);
    $("#desc"+thisNum).hide();
    $("#card"+thisNum).show();
  });

  $(document).on("mouseenter", ".desc p", function() {
    $(this).css("color", "blue");
    $(this).css("text-decoration", "underline");
  });
  $(document).on("mouseleave", ".desc p", function() {
    $(this).css("color", "black");
    $(this).css("text-decoration", "none");
  })
});
