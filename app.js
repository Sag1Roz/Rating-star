import { reviews } from "./reviews.js";

const titleDisplay = document.querySelector("#avgDisplay");
const contactDisplay = document.querySelector("#barsDisplay");
const buttonDisplay = document.querySelector("#buttonDisplay");

const allRate = reviews.map((rate) => rate.rate);

const totalRate = allRate.reduce((total, review) => {
  return (total += review);
});

const avgRate = Math.round((totalRate / reviews.length) * 10) / 10;

titleDisplay.textContent = `Average Rating: ${avgRate} (${reviews.length} votes)`;

renderToHtml(reviews);

for (let i = 1; i <= 5; i++) {
  const buttonElement = document.createElement("button");
  buttonElement.textContent = i;
  buttonDisplay.appendChild(buttonElement);
  buttonElement.addEventListener("click", () => {
    reviews.push({ name: "sagi", rate: parseInt(buttonElement.textContent) });

    calculates(reviews);
  });
}

function calculates(reviews) {
  const allRate = reviews.map((rate) => rate.rate);

  const totalRate = allRate.reduce((total, review) => {
    return (total += review);
  });

  const avgRate = Math.round((totalRate / reviews.length) * 10) / 10;

  titleDisplay.textContent = `Average Rating: ${avgRate} (${reviews.length} votes)`;
  contactDisplay.innerHTML = "";
  renderToHtml(reviews);
}

function renderToHtml(reviews) {
  const allNumber = reviews.map((rate) => rate.rate);

  for (let i = 5; i > 0; i--) {
    const divElement = document.createElement("div");
    divElement.classList.add("single-bar");
    const voteNumber = allNumber.filter((rate) => rate === i);
    const percentage = Math.round((voteNumber.length / reviews.length) * 100);

    divElement.innerHTML = `
  <div class="vote-count">${i} &#x2605; (${voteNumber.length}votes)</div>
          <div class="bar">
            <div class="cover-bar" style="width: ${percentage}%"></div>
          </div>
          <div class="percentage">${percentage}%</div>
  `;
    contactDisplay.appendChild(divElement);
  }
}
