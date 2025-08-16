const share_btn = document.getElementById("share_btn");
const share_popup = document.getElementById("share_popup");
share_btn.addEventListener("click", () => {
  share_popup.classList.toggle("show");
});
