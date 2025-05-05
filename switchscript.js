// Global flag for sound (enabled by default)
let soundAllowed = true;

// Original dimensions of the background image.
const originalWidth = 1920;
const originalHeight = 1080;

// Global variable for the new heat data.
let heatData2 = [];

// map each Lden‐range to a CSS colour 
const ldenColorMap = {
  "65-69": "#d9450b",   
  "60-64": "#f2ac3a", 
  "55-59": "#fcf679", 
  "50-54": "#92ab7d",   
  "45-49": "#80ab87"    
};

// Helper function to map lden value to the corresponding audio element ID.
function getSoundIdForLden(lden) {
  switch (lden) {
    case "65-69":
      return "sound65";
    case "60-64":
      return "sound60";
    case "55-59":
      return "sound55";
    case "50-54":
      return "sound50";
    case "45-49":
      return "sound45";
    default:
      return null;
  }
}

// create heat map pins using heatData2.
function createHeatMapPins2() {
  const mapContainer = document.getElementById("map");
  mapContainer.innerHTML = "";
  window.heatDivs = [];
  heatData2.forEach((point) => {
    const heatDiv = document.createElement("div");
    heatDiv.classList.add("heat");
    // Save original coordinates and size.
    heatDiv.dataset.origX = point.x;
    heatDiv.dataset.origY = point.y;
    heatDiv.dataset.size = point.size;
    heatDiv.style.width = point.size + "px";
    heatDiv.style.height = point.size + "px";
    // the line below is the line that points the colours to the lden and colour codes each node
    heatDiv.style.background = `radial-gradient(circle, ${ldenColorMap[point.lden]} 0%, rgba(0,0,0,0) 70%)`;

    // Attach events for info box and audio.
    heatDiv.addEventListener("mouseover", (e) => {
      const audioId = getSoundIdForLden(point.lden);
      if (soundAllowed && audioId) {
        PlaySound(audioId);
      }
      showInfoBox(point, e.pageX, e.pageY);
    });
    
    heatDiv.addEventListener("mousemove", (e) => {
      const offsetX = 10, offsetY = 10;
      const infoBox = document.getElementById("info-box");
      infoBox.style.left = (e.pageX + offsetX) + "px";
      infoBox.style.top = (e.pageY - infoBox.offsetHeight - offsetY) + "px";
    });
    
    heatDiv.addEventListener("mouseout", () => {
      const audioId = getSoundIdForLden(point.lden);
      if (soundAllowed && audioId) {
        StopSound(audioId);
      }
      hideInfoBox();
    });
    
    heatDiv.addEventListener("click", (e) => {
      showInfoBox(point, e.pageX, e.pageY);
    });
    
    mapContainer.appendChild(heatDiv);
    window.heatDivs.push(heatDiv);
  });
}

// Update heat map pin positions for heatData2.
function updateHeatMapPositions2() {
  const mapContainer = document.getElementById("map");
  const containerWidth = mapContainer.clientWidth;
  const containerHeight = mapContainer.clientHeight;
  const scale = Math.max(containerWidth / originalWidth, containerHeight / originalHeight);
  const displayedWidth = originalWidth * scale;
  const displayedHeight = originalHeight * scale;
  const offsetX = (displayedWidth - containerWidth) / 2;
  const offsetY = (displayedHeight - containerHeight) / 2;
  window.heatDivs.forEach((div) => {
    const origX = parseFloat(div.dataset.origX);
    const origY = parseFloat(div.dataset.origY);
    const size = parseFloat(div.dataset.size) || 0;
    const newX = (origX * scale) - offsetX;
    const newY = (origY * scale) - offsetY;
    // Center the node.
    div.style.left = (newX - size / 2) + "px";
    div.style.top = (newY - size / 2) + "px";
  });
}

// Sound functions.
function PlaySound(soundId) {
  if (!soundAllowed) return;
  const audio = document.getElementById(soundId);
  if (audio) {
    audio.play();
  }
}
function StopSound(soundId) {
  if (!soundAllowed) return;
  const audio = document.getElementById(soundId);
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
}

// Info box functions - .inner reassigns the vales to the id - also has function to hide box 
function showInfoBox(point, posX, posY) {
  const infoBox = document.getElementById("info-box") || document.createElement("div");
  if (!document.getElementById("info-box")) {
    infoBox.id = "info-box";
    document.body.appendChild(infoBox);
  }
  infoBox.innerHTML = `<strong>${point.country}</strong><br>
                       Capital: ${point.capital || "N/A"}<br>
                       Lden: ${point.lden || "N/A"}<br>
                       Inhabitants: ${point.inhabitants || "N/A"}`;
  infoBox.style.display = "block";
  const offsetX = 10, offsetY = 10;
  infoBox.style.left = (posX + offsetX) + "px";
  infoBox.style.top = (posY - infoBox.offsetHeight - offsetY) + "px";
}
function hideInfoBox() {
  const infoBox = document.getElementById("info-box");
  if (infoBox) {
    infoBox.style.display = "none";
  }
}

// Load new heat data from the external JSON file (heatdata2.json).
function loadHeatData2() {
  fetch("heatdata2.json")
    .then(response => response.json())
    .then(data => {
      heatData2 = data;
      createHeatMapPins2();
      updateHeatMapPositions2();
    })
    .catch(error => console.error("Error loading heat data 2:", error));
}

// When DOM content is loaded, load the new heat data.
document.addEventListener("DOMContentLoaded", function () {
  loadHeatData2();
  window.addEventListener("resize", updateHeatMapPositions2);
});

// ----- Tab Content Handling remains unchanged -----
const tabContent = {
  inspo: '<h2>2021, During Covid</h2> <h3 class="data-heading">Noise Pollution Across Major European Cities</h3><p class="data-text2">What is Lden?</p> <p class="data-text">Lden is a noise metric which stands for “day-evening-night level” – it’s used to show the weighted overall environmental noise exposure over a 24 hour period.</p><p class="data-text"><br><strong>Lden is measured in decibels (dB):</strong></p><img src="https://cdn.glitch.global/8f98181d-cb9a-4987-8ef2-b9167a0ad0f4/Untitled-3.png?v=1744058393536" alt="Lden Explanation Image" style="max-width:82%; height:auto;">',
  about: '<h2 class="data-heading">About</h2><p class="data-text2">Our Data Source:</p><p class="data-text">We sourced our data from the European Environmental Agency (The EEA). They monitor different impacts on the environment across Europe using standardised methods. This provided us a source of reliable and comparable data to see the difference in Lden levels before and during Covid. We specifically chose to represent Lden levels produced from road traffic, to highlight the changes in noise produced from traffic activity across European capitals.</p><p class="data-text2">The Impact of Noise on Health:</p><p class="data-text">Noise is an environmental pollutant that has been proven to have an impact on our health. Continued exposure to high levels of sound has been linked to type 2 diabetes, dementia and heart attacks. Often, it goes unnoticed, but we emotionally respond to sound. Loud, intense sounds trigger stress hormones which activate our nervous sympathetic system, increasing inflammation in the body.</p><p class="data-text2">How Lden is Measured:</p><p class="data-text">Day-Evening-Night Level is measured as a continuous sound over a 24hr period. Additional penalties (in dB) are added in the evening and night to show our increased sensitivity to sound. The EEA uses a standardised method for recording the data, which member states use to record and share their data.</p>',
  howto: '<h2 class="data-heading">Help!</h2><p class="data-text2">How to use our Map:</p><ul class="data-text"><li>Hover over the heat map nodes to hear levels of sound and see relevant data.</li><br><li>Press the switch in the top right of the screen to compare before and during Covid.</li><br><li>For the best experience, use Chrome with your screen fully expanded.</li></ul>',
  data: '<h2 class="data-heading">Data Overview</h2><p class="data-text">The data plotted on the map is from the European Environmental Agency showing 2016 Lden levels across capital cities in Europe:</p><img src="https://cdn.glitch.global/8f98181d-cb9a-4987-8ef2-b9167a0ad0f4/Screenshot%202025-04-07%20at%2018.09.29.png?v=1744045844609" alt="Table Image" style="max-width:100%; height:auto;">'
};

document.querySelectorAll('.navbar li').forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    const tab = this.getAttribute('data-tab');
    const content = tabContent[tab] || "No content available for this tab.";
    document.querySelector('#tab-content').innerHTML = content;
  });
});

// Set the default tab content.
document.getElementById('tab-content').innerHTML = tabContent.inspo;
