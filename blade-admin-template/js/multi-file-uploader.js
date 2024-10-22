const uploadBoxMultiple = document.getElementById("uploadBoxMultiple");
const fileInputMultiple = document.getElementById("fileInputMultiple");
const addImageButton = document.getElementById("addImageButton");
const imagesContainer = document.getElementById("imagesContainer");

const fullPreviewMultiple = document.getElementById("fullPreviewMultiple");
const fullPreviewImageMultiple = document.getElementById(
  "fullPreviewImageMultiple"
);
const closePreviewMultiple = document.getElementById("closePreviewMultiple");

// Trigger the file input when the "Add Image" button is clicked
addImageButton.addEventListener("click", () => {
  fileInputMultiple.click();
});

// Handle multiple file uploads
fileInputMultiple.addEventListener("change", handleMultipleFileUpload);
closePreviewMultiple.addEventListener("click", hideFullPreviewMultiple);

function handleMultipleFileUpload(e) {
  const files = e.target.files;
  if (files.length > 0) {
    Array.from(files).forEach((file) => {
      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          createImagePreview(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    });
  }
  // Reset the file input to allow selecting the same image again
  fileInputMultiple.value = "";
}

// Create image preview with delete and preview functionality
function createImagePreview(imageSrc) {
  const imageWrapper = document.createElement("div");
  imageWrapper.classList.add("relative", "w-32", "h-32", "group", "m-2");

  const img = document.createElement("img");
  img.src = imageSrc;
  img.alt = "Uploaded preview";
  img.classList.add(
    "w-full",
    "h-full",
    "object-contain",
    "rounded-lg",
    "border-2",
    "border-gray-300",
    "p-1"
  );

  const overlay = document.createElement("div");
  overlay.classList.add(
    "absolute",
    "inset-0",
    "bg-black",
    "bg-opacity-50",
    "flex",
    "items-center",
    "justify-center",
    "opacity-0",
    "group-hover:opacity-100",
    "transition-opacity",
    "rounded-lg"
  );

  const previewButton = document.createElement("button");
  previewButton.type = "button";

  previewButton.innerHTML = `<p class="text-xs font-semibold">Preview</p>`;
  previewButton.classList.add(
    "bg-white",
    "text-gray-800",
    "rounded-full",
    "p-2",
    "py-1",
    "mx-1",
    "hover:bg-gray-200",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-gray-400"
  );
  previewButton.addEventListener("click", () => {
    showFullPreviewMultiple(img.src);
  });

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";

  deleteButton.innerHTML = `<p class="text-xs font-semibold">Delete</p>`;
  deleteButton.classList.add(
    "bg-red-500",
    "text-white",
    "rounded-full",
    "p-2",
    "py-1",
    "mx-1",
    "hover:bg-red-600",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-red-400"
  );
  deleteButton.addEventListener("click", () => {
    imageWrapper.remove(); // Remove the image container on delete
  });

  // Click on the image to show full preview
  img.addEventListener("click", () => showFullPreviewMultiple(imageSrc));

  overlay.appendChild(previewButton);
  overlay.appendChild(deleteButton);
  imageWrapper.appendChild(img);
  imageWrapper.appendChild(overlay);
  imagesContainer.appendChild(imageWrapper);
}

// Optional: Full preview functionality for multiple images
function showFullPreviewMultiple(imageSrc) {
  console.log(imageSrc);
  fullPreviewImageMultiple.src = imageSrc;
  fullPreviewMultiple.classList.remove("hidden");
  fullPreviewMultiple.classList.add("fixed");
  fullPreviewMultiple.classList.add("inset-5");
  fullPreviewMultiple.classList.add("z-50");
  fullPreviewImageMultiple.classList.remove("hidden");
}
// Hide full image preview
function hideFullPreviewMultiple() {
  fullPreviewMultiple.classList.add("hidden");
  fullPreviewImageMultiple.classList.add("hidden");
  fullPreviewMultiple.classList.remove("fixed");
  fullPreviewMultiple.classList.remove("inset-5");
  fullPreviewMultiple.classList.remove("z-50");
}
