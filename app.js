/* -- Carousel Navigation -- */

let activeIndex = 0;

const slides = document.getElementsByTagName("article");

const handleLeftClick = () => {
  const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1;

  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
    nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

  currentSlide.dataset.status = "after";

  nextSlide.dataset.status = "becoming-active-from-before";

  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
  });
};

const handleRightClick = () => {
  const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;

  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
    nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

  currentSlide.dataset.status = "before";

  nextSlide.dataset.status = "becoming-active-from-after";

  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
  });
};

/* -- Mobile Nav Toggle -- */

const nav = document.querySelector("nav");

const handleNavToggle = () => {
  nav.dataset.transitionable = "true";

  nav.dataset.toggled = nav.dataset.toggled === "true" ? "false" : "true";
};

window.matchMedia("(max-width: 800px)").onchange = (e) => {
  nav.dataset.transitionable = "false";

  nav.dataset.toggled = "false";
};

// Work Button
document.getElementById("work_btn").addEventListener("click", function (event) {
  event.preventDefault();
  handleNavToggle(); // swipe mobile navbar up

  const work = document.getElementById("work");

  if (work.dataset.status !== "active") {
    // console.log(work.dataset.status);

    const nextIndex = 2;

    const currentSlide = document.querySelector(
        `[data-index="${activeIndex}"]`
      ),
      nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

    currentSlide.dataset.status = "before";

    nextSlide.dataset.status = "becoming-active-from-after";

    setTimeout(() => {
      nextSlide.dataset.status = "active";
      activeIndex = nextIndex;
    });
  }
});

// Contact Button
document
  .getElementById("contact_btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    handleNavToggle(); // swipe mobile navbar up

    const contact = document.getElementById("contact");

    if (contact.dataset.status !== "active") {
      // console.log(contact.dataset.status);

      const nextIndex = 10;

      const currentSlide = document.querySelector(
          `[data-index="${activeIndex}"]`
        ),
        nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

      currentSlide.dataset.status = "before";

      nextSlide.dataset.status = "becoming-active-from-after";

      setTimeout(() => {
        nextSlide.dataset.status = "active";
        activeIndex = nextIndex;
      });
    }
  });
