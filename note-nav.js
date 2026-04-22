const nav = document.querySelector(".note-nav");

if (nav) {
  const prev = document.body.dataset.prev || "";
  const next = document.body.dataset.next || "";

  const prevButton = prev
    ? `<a class="nav-chip nav-chip-secondary" href="${prev}">Previous</a>`
    : "";
  const nextButton = next
    ? `<a class="nav-chip nav-chip-secondary" href="${next}">Next</a>`
    : "";

  nav.innerHTML = `
    <a class="nav-chip nav-chip-primary" href="#top">Top</a>
    ${prevButton}
    ${nextButton}
  `;
}
