document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const indicators = document.querySelectorAll(".scroll-indicator a");

  function updateActiveIndicator() {
    let index = 0;

    sections.forEach((section, i) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2) {
        index = i;
      }
    });

    indicators.forEach((indicator, i) => {
      if (i === index) {
        indicator.classList.add("active");
        // Set dynamic color matching
        const sectionColor = sections[i].dataset.color || "var(--color-Grey)";
        indicator.style.backgroundColor = sectionColor;
        indicator.style.borderColor = sectionColor;
      } else {
        indicator.classList.remove("active");
        indicator.style.backgroundColor = "transparent";
        indicator.style.borderColor = "var(--color-Grey)";
      }
    });
  }

  window.addEventListener("scroll", updateActiveIndicator);
  updateActiveIndicator(); // Initialize on page load
});