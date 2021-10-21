$(document).ready(function () {
  $(".comment-input").on("submit", function (event) {
    event.preventDefault();

    let name = $("#floatingInput").val();
    let text = $("#floatingTextarea2").val();

    $(".pembungkus-comment").append(`
    <div class="row">
            <div class="col-md-2" style="width: 140px">
              <img
                src="./assets/library/img/profil.jpg"
                alt=""
                class="comment-image img-thumbnail"
              />
            </div>
            <div class="col-md-7">
              <div class="comment-list rounded-3">
                <div class="comment-name">Name : ${name}</div>
                <br />
                <div class="comment-content">
                  Comment : ${text}
                </div>
              </div>
            </div>
          </div>
    `);
  });
});
