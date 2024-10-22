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
  loadScript(
    "https://cdn.jsdelivr.net/gh/vitasoftsolutions/assets-admin@latest/blade-admin-template/asset/js/loader.js"
  ),
  loadScript(
    "https://cdn.jsdelivr.net/gh/vitasoftsolutions/assets-admin@latest/blade-admin-template/asset/js/filter-dropdown.js"
  ),
  loadScript(
    "https://cdn.jsdelivr.net/gh/vitasoftsolutions/assets-admin@latest/blade-admin-template/asset/js/quill-text-editor.js"
  ),
  loadScript(
    "https://cdn.jsdelivr.net/gh/vitasoftsolutions/assets-admin@latest/blade-admin-template/asset/js/single-file-uploader.js"
  ),
  loadScript(
    "https://cdn.jsdelivr.net/gh/vitasoftsolutions/assets-admin@latest/blade-admin-template/asset/js/multi-file-uploader.js"
  ),
])
  .then(() => {
    console.log("All scripts loaded successfully!");
  })
  .catch((err) => {
    console.error("Error loading scripts", err);
  });
