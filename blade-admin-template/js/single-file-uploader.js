const uploadBox = document.getElementById("uploadBox");
const fileInput = document.getElementById("fileInput");
const placeholder = document.getElementById("placeholder");
const uploadText = document.getElementById("uploadText");
const uploadIcon = document.getElementById("uploadIcon");

const imageContainer = document.getElementById("imageContainer");
const preview = document.getElementById("preview");
const previewButton = document.getElementById("previewButton");
const deleteButton = document.getElementById("deleteButton");

uploadBox.addEventListener("click", (e) => {
  if (
    e.target === uploadBox ||
    e.target === placeholder ||
    e.target === uploadText ||
    e.target === uploadIcon
  ) {
    fileInput.click();
  }
});

uploadBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    fileInput.click();
  }
});

fileInput.addEventListener("change", handleFileUpload);
deleteButton.addEventListener("click", deleteImage);

function handleFileUpload(e) {
  const file = e.target.files[0];
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = (e) => {
      preview.src = e.target.result;
      showImage();
    };
    reader.readAsDataURL(file);
  }
}

function showImage() {
  placeholder.classList.add("hidden");
  imageContainer.classList.remove("hidden");
  uploadBox.setAttribute("aria-label", "Image uploaded");
}

function deleteImage(e) {
  e.stopPropagation();
  fileInput.value = "";
  preview.src = "";
  placeholder.classList.remove("hidden");
  imageContainer.classList.add("hidden");
  uploadBox.setAttribute("aria-label", "Upload image");
}

function previewImage() {
  previewButton.click();
}

const fullPreview = document.getElementById("fullPreview");
const fullPreviewImage = document.getElementById("fullPreviewImage");
const closePreview = document.getElementById("closePreview");

previewButton.addEventListener("click", () => {
  showFullPreview(preview.src); // Pass the src of the preview image
});
closePreview.addEventListener("click", hideFullPreview);

function showFullPreview(imageSrc) {
  console.log(imageSrc);
  fullPreviewImage.src = imageSrc;
  fullPreview.classList.remove("hidden");
  fullPreview.classList.add("fixed");
  fullPreview.classList.add("inset-5");
  fullPreview.classList.add("z-50");
  fullPreviewImage.classList.remove("hidden");
  closePreview.classList.remove("hidden");
}
// Hide full image preview
function hideFullPreview() {
  fullPreview.classList.add("hidden");
  fullPreviewImage.classList.add("hidden");
  fullPreview.classList.remove("fixed");
  fullPreview.classList.remove("inset-5");
  fullPreview.classList.remove("z-50");
  closePreview.classList.add("hidden");
}
