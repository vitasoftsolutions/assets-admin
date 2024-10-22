const resetButton = document.getElementById("filter-reset");
const cancelButton = document.getElementById("filter-cancel");
const searchButton = document.getElementById("filter-search");

const filterDropdown = document.getElementById("dropdownFilterHorizontal");
const filterDropdownButton = document.getElementById(
  "dropdownMenuIconHorizontalButton"
);

const dropdownInstance = new Dropdown(filterDropdown, filterDropdownButton);

// filterDropdownButton.addEventListener("click", () => {
//   // Toggle dropdown using Vitasoftsolutionsmethod
//   dropdownInstance.toggle();
// });

// resetButton.addEventListener("click", () => {
//   console.log(filterDropdown);
//   console.log("Filter button clicked!");
// });

cancelButton.addEventListener("click", () => {
  console.log("cancel button clicked!");
  dropdownInstance.hide();
});

// searchButton.addEventListener("click", () => {
//   console.log("Search button clicked!");
// });
