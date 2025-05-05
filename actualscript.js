// tog for sound set to default - tho still need inital interaction with site for sound to play
let soundAllowed = true;

// image size
const originalWidth = 1920;
const originalHeight = 1080;

// aray for heat data, in JSON
let heatData = [];

// map each Lden‐range to a CSS colour 
const ldenColorMap = {
  "65-69": "#d9450b",   
  "60-64": "#f2ac3a", 
  "55-59": "#fcf679", 
  "50-54": "#92ab7d",   
  "45-49": "#80ab87"    
};

// maps the Lden value to a corresponding audio element ID - needs updatign with new sounds
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

// Creates the heat map pins based off our data in the JSON files
function createHeatMapPins() {
  const mapContainer = document.getElementById("map");
  mapContainer.innerHTML = ""; // clears any old pins - might be able to get rid of this now 
  window.heatDivs = [];// global arrray for tracking and updating them 
  heatData.forEach((point) => {
    const heatDiv = document.createElement("div");
    heatDiv.classList.add("heat");// css styling 
    
    // stores coordinates, and potential to change node size
    heatDiv.dataset.origX = point.x;
    heatDiv.dataset.origY = point.y;
    heatDiv.dataset.size = point.size;
    // sets the size based on 'size' value from json
    heatDiv.style.width = point.size + "px";
    heatDiv.style.height = point.size + "px";
    // the line below is the line that points the colours to the lden and colour codes each node
    heatDiv.style.background = `radial-gradient(circle, ${ldenColorMap[point.lden]} 0%, rgba(0,0,0,0) 70%)`;

    //event listeners :)
    
    //  mouse hover fpr the lden nodes and should bring up mini info box
    heatDiv.addEventListener("mouseover", (e) => {
      const audioId = getSoundIdForLden(point.lden);
      if (soundAllowed && audioId) {
        PlaySound(audioId);
      }
      showInfoBox(point, e.pageX, e.pageY);
    });
    
  
   
    // should stop sound and hide the mini pop up info boxes
    heatDiv.addEventListener("mouseout", () => {
      const audioId = getSoundIdForLden(point.lden);
      if (soundAllowed && audioId) {
        StopSound(audioId);
      }
      hideInfoBox();
    });
    
    
    // was for original tool tip we had to show info - can go pretty sure but maybe check its not being called elsewhere
    heatDiv.addEventListener("mousemove", (e) => {
      const offsetX = 10, offsetY = 10;
      const infoBox = document.getElementById("info-box");
      infoBox.style.left = (e.pageX + offsetX) + "px";
      infoBox.style.top = (e.pageY - infoBox.offsetHeight - offsetY) + "px";
    });  

    
    //adds pin to the DOM and global tracker
    mapContainer.appendChild(heatDiv);
    window.heatDivs.push(heatDiv);
  });
}

// Update heat map pin positions.
// repositions all pins when the screen size changes, so they remain in the correct place relative to the map image.
function updateHeatMapPositions() {
  const mapContainer = document.getElementById("map");
  const containerWidth = mapContainer.clientWidth;
  const containerHeight = mapContainer.clientHeight;
   // calcs how much the image is scaled in the container 
  const scale = Math.max(containerWidth / originalWidth, containerHeight / originalHeight);
  const displayedWidth = originalWidth * scale;
  const displayedHeight = originalHeight * scale;
  // should centre the image if smaller than the container
  const offsetX = (displayedWidth - containerWidth) / 2;
  const offsetY = (displayedHeight - containerHeight) / 2;
  window.heatDivs.forEach((div) => {
 
    // loop to reposition the pins
    const origX = parseFloat(div.dataset.origX);
    const origY = parseFloat(div.dataset.origY);
    const size = parseFloat(div.dataset.size) || 0;
    const newX = (origX * scale) - offsetX;
    const newY = (origY * scale) - offsetY;
    
    // new scaled position - 
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
  }
}

// Info box functions.
function showInfoBox(point, posX, posY) {
  const infoBox = document.getElementById("info-box") || document.createElement("div");
  if (!document.getElementById("info-box")) {
    infoBox.id = "info-box";
    document.body.appendChild(infoBox);
  }
  infoBox.innerHTML = `<strong>${point.country}</strong><br>
                       Capital: ${point.capital || "N/A"}<br>
                       Lden level: ${point.lden || "N/A"}<br>
                       Nr Inhabitants: ${point.inhabitants || "N/A"}`;
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

// Load heat data from the external JSON file, then create pins and update positions.
function loadHeatData() {
  fetch("heatData.json")
    .then(response => response.json())
    .then(data => {
      heatData = data;
      createHeatMapPins();
      updateHeatMapPositions();
    })
    .catch(error => console.error("heat data not loading haha ha:", error));
}

// When the DOM content is loaded, load the heat data.
document.addEventListener("DOMContentLoaded", function () {
  loadHeatData();
  window.addEventListener("resize", updateHeatMapPositions);
});

// ----- Tab Content Handling on the grey box -----
const tabContent = {
  inspo: '<h2>2016, Before Covid</h2> <h3 class="data-heading">Noise Pollution Across Major European Cities</h3><p class="data-text2">What is Lden?</p> <p class="data-text">Lden is a noise metric which stands for “day-evening-night level” – it’s used to show the weighted overall environmental noise exposure over a 24 hour period.</p><p class="data-text"><br><strong>Lden is measured in decibels (dB):</strong></p><img src="https://cdn.glitch.global/8f98181d-cb9a-4987-8ef2-b9167a0ad0f4/Untitled-3.png?v=1744058393536" alt="Lden Explanation Image" style="max-width:82%; height:auto;">',
  about: '<h2 class="data-heading">About</h2> <p class="data-text2">Our Data Source:</p> <p class="data-text">We sourced our data from the European Environmental Agency (The EEA). They monitor different impacts on the environment across Europe using standardised methods. This provided us a source of reliable and comparable data to see the difference in Lden  levels before and during covid. We specifically chose to represent Lden levels produced from road traffic, to highlight the changes in noise produced from traffic activity across European capitals</p> <p class="data-text2">The impact of Noise on Health:</p> <p class="data-text">Noise is an environmental pollutant that has been proven to have an impact on our health. Continued exposure to high levels of sound has been linked to type 2 diabetes, dementia and heart attacks. Often, it goes unnoticed, but we emotionally respond to sound. Loud, intense sounds trigger stress hormones which activate our nervous sympathetic system, increasing inflammation in the body.</p> <p class="data-text2">How Lden is Measured:</p> <p class="data-text"> Day-Evening-Night Level is measured as a continuous sound over a 24hr period. Additional penalties (in dB) are added in the evening and night to show our increased sensitivity to sound. The EEA uses a standardised method for recording the data, which member states use to record and share their data.</p>',
  howto: '<h2 class="data-heading">Help!</h2><p class="data-text2">How to use our Map:</p><ul class="data-text"><li>Hover over the heat map nodes to hear levels of sound and see relevant data.</li><br><li>Press the switch in the top right of the screen to compare before and during Covid.</li><br><li>For the best experience, use Chrome with your screen fully expanded.</li></ul>',
  data: '<h2 class="data-heading">Data Overview</h2><p class="data-text">The data plotted on the map is from the European Environmental Agency showing 2016 Lden levels across capital cities in Europe:</p><img src="https://cdn.glitch.global/8f98181d-cb9a-4987-8ef2-b9167a0ad0f4/Screenshot%202025-04-07%20at%2018.09.29.png?v=1744045844609" alt="Table Image" style="max-width:100%; height:auto;">'
};

// tab selection
document.querySelectorAll('.navbar li').forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    const tab = this.getAttribute('data-tab');
    const content = tabContent[tab];
    document.querySelector('#tab-content').innerHTML = content;
  });
});

// Set the default tab content to the inspo tab
document.getElementById('tab-content').innerHTML = tabContent.inspo;


