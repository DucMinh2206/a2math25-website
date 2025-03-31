const images = document.querySelectorAll('img');

images.forEach(img => {
  img.setAttribute('decoding', 'async');
  // Example: Set high priority for images in the first section
  if (img.closest('section:first-of-type')) {
    img.setAttribute('fetchpriority', 'high');
  } else {
    img.setAttribute('fetchpriority', 'low');
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".university-button");

  buttons.forEach(button => {
      button.addEventListener("click", function () {
          let menu = this.nextElementSibling;
          menu.classList.toggle("show");

          // Close other open menus
          document.querySelectorAll(".aspect-containers").forEach(otherMenu => {
              if (otherMenu !== menu) {
                  otherMenu.classList.remove("show");
              }
          });
      });
  });

  // Close dropdown if clicked outside
  document.addEventListener("click", function (event) {
      if (!event.target.matches(".university-button")) {
          document.querySelectorAll(".aspect-containers").forEach(menu => {
              menu.classList.remove("show");
          });
      }
  });
});

  const slides = [
    {
    category: "NEWS",
    title: "Thời gian thi chung học phổ thông",
    readMoreLink: "#"
    },

    {
      category: "NEWS",
      title: "Thời gian xét tuyển nguyện vọng",
      readMoreLink: "#"
    }
    
];
let currentSlideIndex = 0;

function renderSlide(){
  const slide = slides[currentSlideIndex];
  document.getElementById("slide-category").textContent = slide.category;
  document.getElementById("slide-title").textContent = slide.title;
  document.getElementById("slide-read-more").href = slide.readMoreLink;
}
function nextSlide(){
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  renderSlide();
}
function prevSlide(){
  currentSlideIndex = (currentSlideIndex - 1) % slides.length;
  renderSlide()
}

document.getElementById("previous-button").addEventListener("click", prevSlide);
document.getElementById("next-button").addEventListener("click", nextSlide);

setInterval(nextSlide, 2000);
renderSlide();