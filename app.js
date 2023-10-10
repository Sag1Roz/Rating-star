import { reviews } from "./reviews.js";

const titleDisplay = document.querySelector("#avgDisplay");
const contactDisplay = document.querySelector("#barsDisplay");

const allRate = reviews.map((rate) => rate.rate);

const totalRate = allRate.reduce((total, review) => {
  return (total += review);
});

const avgRate = Math.round((totalRate / reviews.length) * 10) / 10;

titleDisplay.textContent = `Average Rating: ${avgRate} (${reviews.length} votes)`;

for (let i = 5; i > 0; i--) {
  const divElement = document.createElement("div");
  divElement.classList.add("single-bar");

  const voteNumber = allRate.filter((rate) => rate === i);
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
