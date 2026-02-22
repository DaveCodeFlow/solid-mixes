console.log("JS loaded");

const mixes = [
  {
    title: "SOLID – Episode 01",
    date: "2026-01-01",
    mixcloudUrl:
      "https://www.mixcloud.com/DJ_Dave_K/solid-steady-beats-strong-flow-episode-01/",
  },
  {
    title: "SOLID – Episode 02",
    date: "2026-02-10",
    mixcloudUrl:
      "https://www.mixcloud.com/DJ_Dave_K/solid-steady-beats-strong-flow-episode-02/",
  },
  {
    title: "SOLID – Episode 03",
    date: "2026-02-21",
    mixcloudUrl:
      "https://www.mixcloud.com/DJ_Dave_K/solid-steady-beats-strong-flow-episode-03/",
  },
];

const container = document.getElementById("mixes");
const toggleButton = document.getElementById("themeToggle");
console.log(toggleButton);
toggleButton.addEventListener("click", () => {
  // console.log("button clicked");
  document.body.classList.toggle("light");
  if (document.body.classList.contains("light")) {
    toggleButton.textContent = "Dark mode";
  } else {
    toggleButton.textContent = "Light mode";
  }
});

const sortedMixes = [...mixes].sort(
  (a, b) => new Date(b.date) - new Date(a.date),
);
sortedMixes.forEach((mix, index) => {
  const section = document.createElement("section");
  section.className = "mix";

  if (index === 0) {
    section.classList.add("featured");
  }

  section.innerHTML = `
  <h2>${mix.title}</h2>
  <span class="mix-date">${mix.date}</span>
  <div class="player-wrapper">
    <iframe 
      src="https://www.mixcloud.com/widget/iframe/?hide_cover=0&light=0&feed=${encodeURIComponent(mix.mixcloudUrl)}"
      frameborder="0">
    </iframe>
  </div>
`;

  container.appendChild(section);
});
