const Post = [
  {
    title: "Metode pengobatan efektif dengan meditasi",
    author: "Posted by Oscar",
    date: "Published Date 2021",
    img: "./assets/library/img/meditasi.jpg",
    penjelasan:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet consectetur id, exercitationem dolorum officiis excepturi aliquam. Maxime fugiat sapiente eaque earum sunt? Pariatur nesciunt explicabo est, tempore repellendus recusandae expedita!",
  },
  {
    title: "Metode pengobatan efektif dengan meditasi",
    author: "Posted by Oscar",
    date: "Published Date 2021",
    img: "./assets/library/img/meditasi.jpg",
    penjelasan:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet consectetur id, exercitationem dolorum officiis excepturi aliquam. Maxime fugiat sapiente eaque earum sunt? Pariatur nesciunt explicabo est, tempore repellendus recusandae expedita!",
  },
  {
    title: "Metode pengobatan efektif dengan meditasi",
    author: "Posted by Oscar",
    date: "Published Date 2021",
    img: "./assets/library/img/meditasi.jpg",
    penjelasan:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet consectetur id, exercitationem dolorum officiis excepturi aliquam. Maxime fugiat sapiente eaque earum sunt? Pariatur nesciunt explicabo est, tempore repellendus recusandae expedita!",
  },
];

$(document).ready(function () {
  for (let i = 0; i < Post.length; i++) {
    console.log(`dinamis${i}`);
    const post = `
  <div class="row${i + 1} rounded-3">
    <h2 class="judul${i + 1}">${Post[i].title}</h2>
    <div class="header-post">
      <h5 class="penulis${i + 1}">
        <i class="bi bi-person-fill"></i> ${Post[i].author}
      </h5>
      <h5 class="date">
        <i class="bi bi-calendar-date"></i> ${Post[i].date}
      </h5>
    </div>

    <div class="dinamis${i + 1}">
      <img
        src=${Post[i].img}
        alt="gambar meditasi"
        class="gambar${i + 1} rounded-3"
      />
      <div class="middle">
        <a class="text" href="./post1.html">Read More</a>
      </div>
    </div>

    <p class="penjelasan">
    ${Post[i].penjelasan}
    </p>
    <a class="btn btn-secondary" href="./post1.html" role="button"
      >Read More <i class="bi bi-arrow-right"></i
    ></a>
  </div>
  `;
    $("#post").append(post);
  }
});
