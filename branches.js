const searchInput = document.querySelector("#branch-search");
const searchButton = document.querySelector("#search-button");
const filterButtons = document.querySelectorAll(".filter-button");
const branchCards = document.querySelectorAll(".directory-branch-card");
const branchCount = document.querySelector(".branch-count");
const noResults = document.querySelector(".no-results");

let selectedLocation = "all";

function filterBranches() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  let visibleBranches = 0;

  branchCards.forEach((card) => {
    const branchName = card.querySelector("h3").textContent.toLowerCase();
    const regionName = card
      .querySelector(".branch-region")
      .textContent.toLowerCase();

    const cardLocation = card.dataset.location;

    const matchesSearch =
      branchName.includes(searchTerm) || regionName.includes(searchTerm);

    const matchesLocation =
      selectedLocation === "all" || cardLocation === selectedLocation;

    if (matchesSearch && matchesLocation) {
      card.hidden = false;
      visibleBranches++;
    } else {
      card.hidden = true;
    }
  });

  updateResults(visibleBranches);
}

function updateResults(numberOfBranches) {
  const branchWord = numberOfBranches === 1 ? "branch" : "branches";

  branchCount.textContent = `${numberOfBranches} ${branchWord}`;
  noResults.hidden = numberOfBranches !== 0;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((filterButton) => {
      filterButton.classList.remove("active-filter");
    });

    button.classList.add("active-filter");

    selectedLocation = button.textContent
      .trim()
      .toLowerCase()
      .replaceAll(" ", "-");

    filterBranches();
  });
});

searchInput.addEventListener("input", filterBranches);

searchButton.addEventListener("click", filterBranches);
