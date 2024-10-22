const searchInput = document.getElementById("country-search");
const dropdown = document.getElementById("dropdown");
const countryList = document.getElementById("country-list");

// Show dropdown when input is focused
function showDropdown() {
  dropdown.classList.remove("hidden");
  filterCountries();
}

// Hide dropdown when clicking outside
document.addEventListener("click", function (event) {
  if (!searchInput.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.classList.add("hidden");
  }
});

// Filter countries based on input
searchInput.addEventListener("input", filterCountries);

function filterCountries() {
  const filter = searchInput.value.toLowerCase();
  const listItems = countryList.querySelectorAll("li");

  listItems.forEach((item) => {
    const text = item.textContent.toLowerCase().trim();
    console.log(text);
    if (text.includes(filter)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}

// Handle item selection
countryList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    searchInput.value = event.target.textContent.trim(); // Trim when setting value
    dropdown.classList.add("hidden");
  }
});
