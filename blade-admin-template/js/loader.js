window.addEventListener("load", function () {
  setTimeout(function () {
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.opacity = "1"; // Show content once page is loaded
  }, 500); // 3000 milliseconds = 3 seconds
});
