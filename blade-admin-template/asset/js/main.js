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
  loadScript("loader.js"),
  loadScript("filter-dropdown.js"),
  loadScript("quill-text-editor.js"),
  loadScript("single-file-uploader.js"),
  loadScript("multi-file-uploader.js"),
])
  .then(() => {
    console.log("All scripts loaded successfully!");
  })
  .catch((err) => {
    console.error("Error loading scripts", err);
  });
