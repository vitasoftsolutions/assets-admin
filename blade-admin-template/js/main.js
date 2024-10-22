function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

// Load sidebar.js and dropdown.js dynamically
Promise.all([
  loadScript("js/sidebar.js"),
  loadScript("js/filter-dropdown.js"),
  loadScript("js/quill-text-editor.js"),
  loadScript("js/single-file-uploader.js"),
  loadScript("js/multi-file-uploader.js"),
  loadScript("js/loader.js"),
])
  .then(() => {
    console.log("All scripts loaded successfully!");
  })
  .catch((err) => {
    console.error("Error loading scripts", err);
  });
