$(document).ready(function () {
  $("body").on("focus", ".close-btn", function () {
    $(this).click(function () {
      $("#1").parent().removeClass("show");
      $("#1").parent().addClass("hide");
      $("#1").parent().remove();
    });
  });
});
