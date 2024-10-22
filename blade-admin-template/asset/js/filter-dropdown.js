const resetButton = document.getElementById("filter-reset");
const cancelButton = document.getElementById("filter-cancel");
const searchButton = document.getElementById("filter-search");

const filterDropdown = document.getElementById("dropdownFilterHorizontal");
const filterDropdownButton = document.getElementById(
  "dropdownMenuIconHorizontalButton"
);

if (filterDropdown && filterDropdownButton) {
  const dropdownInstance = new Dropdown(filterDropdown, filterDropdownButton);

  cancelButton.addEventListener("click", () => {
    console.log("cancel button clicked!");
    dropdownInstance.hide();
  });
}
