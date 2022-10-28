let container = document.querySelector(".container");

async function getMovies(url) {
  const response = await fetch(url);
  let res = await response.json();
  console.log("test", res.articles);
  showNews(res.articles);
}

getMovies(
  "https://newsapi.org/v2/top-headlines?country=tr&apiKey=e0c929720a1c4d918d2fae42c2243173"
);

const showNews = (posts) => {
  console.log("showNews");
  posts.forEach((element) => {
    let add = "<div class='news'>";
    add +=
      "<h3>" +
      element.title +
      "</h3>" +
      "<img src='" +
      element.urlToImage +
      "'>" +
      "<p>" +
      element.description +
      "</p>" +
      "<div class='news2'>" +
      "<a href=" +
      element.url +
      ">" +
      element.content.substring(0, 25) +
      "</a>" +
      "<p>" +
      element.publishedAt.substring(0, 10) +
      "</p>" +
      "</div>" +
      "</div>";
    container.innerHTML += add;
  });
};
