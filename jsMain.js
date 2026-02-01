const mixes = [
    {
      title: "SOLID – Episode 01",
      date: "Jan 2026",
      mixcloudUrl: "https://www.mixcloud.com/DJ_Dave_K/solid-steady-beats-strong-flow-episode-01/"
    },
    {
      title: "SOLID – Episode 02",
      date: "Feb 2026",
      mixcloudUrl: ""
    }
  ];
    
  const container = document.getElementById("mixes");
  
  mixes.forEach((mix, index) => {
    const section = document.createElement("section");
    section.className = "mix";

    if (index === 0) { 
      section.classList.add("featured") 
    };
  
    section.innerHTML = `
      <h2>${mix.title}</h2>
      <span>${mix.date}</span>
      <iframe 
        src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=0&feed=${encodeURIComponent(mix.mixcloudUrl)}"
        width="100%"
        height="120"
        frameborder="0">
      </iframe>
    `;
  
    container.appendChild(section);
  });
  