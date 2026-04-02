const ranchOfferings = [
  {
    name: "Fresh Eggs",
    category: "eggs",
    description: "Farm fresh eggs available regularly in a variety of natural shell colors.",
    image: "images/eggs-carton.jpg",
    alt: "Carton of farm fresh eggs",
    available: true
  },
  {
    name: "Hogs",
    category: "hogs",
    description: "Hogs raised for processing and family food production.",
    image: "images/show-hog.jpeg",
    alt: "Show hog at the fair",
    available: true
  },
  {
    name: "Beef",
    category: "beef",
    description: "Beef available for 4 H projects or processing.",
    image: "images/cows-field.jpg",
    alt: "Beef cattle standing in a field",
    available: true
  },
  {
    name: "Sheep",
    category: "sheep",
    description: "Sheep raised for wool and processing.",
    image: "images/sheep.png",
    alt: "Sheep and lambs at the ranch",
    available: false
  },
  {
    name: "Goat Rentals",
    category: "goats",
    description: "Goats available for natural weed control and pasture cleanup.",
    image: "images/goats-pasture.jpg",
    alt: "Goats grazing in a pasture",
    available: true
  },
  {
    name: "Chicks",
    category: "chicks",
    description: "Baby chicks available seasonally for families starting or growing their flock.",
    image: "images/chicks.jpg",
    alt: "Baby chicks under a heat lamp",
    available: true
  }
];

function createOfferingCard(item) {
  let statusText = "";

  if (item.available) {
    statusText = "Available now";
  } else {
    statusText = "Contact us for availability";
  }

  return `
    <div class="card">
      <img src="${item.image}" alt="${item.alt}">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <p class="status">${statusText}</p>
    </div>
  `;
}

function displayOfferings(items) {
  const offeringsGrid = document.querySelector("#offeringsGrid");

  if (!offeringsGrid) {
    return;
  }

  offeringsGrid.innerHTML = "";

  items.forEach(function(item) {
    offeringsGrid.innerHTML += createOfferingCard(item);
  });
}

function filterOfferings(category) {
  let filteredItems = [];

  if (category === "all") {
    filteredItems = ranchOfferings;
  } else if (category === "livestock") {
    filteredItems = ranchOfferings.filter(function(item) {
      return item.category === "hogs" || item.category === "beef" || item.category === "sheep";
    });
  } else {
    filteredItems = ranchOfferings.filter(function(item) {
      return item.category === category;
    });
  }

  displayOfferings(filteredItems);
}

function buildFilterButtons() {
  const filterButtons = document.querySelector("#filterButtons");

  if (!filterButtons) {
    return;
  }

  const buttonList = [
    { label: "All", value: "all" },
    { label: "Eggs", value: "eggs" },
    { label: "Chicks", value: "chicks" },
    { label: "Livestock", value: "livestock" },
    { label: "Goats", value: "goats" }
  ];

  buttonList.forEach(function(buttonInfo) {
    const button = document.createElement("button");
    button.textContent = buttonInfo.label;
    button.type = "button";

    button.addEventListener("click", function() {
      filterOfferings(buttonInfo.value);
    });

    filterButtons.appendChild(button);
  });
}

function showAvailabilityMessage() {
  const availabilityMessage = document.querySelector("#availabilityMessage");

  if (!availabilityMessage) {
    return;
  }

  const availableItems = ranchOfferings.filter(function(item) {
    return item.available;
  });

  if (availableItems.length >= 5) {
    availabilityMessage.textContent = "We currently have several ranch offerings available. Please contact us to learn more.";
  } else if (availableItems.length >= 3) {
    availabilityMessage.textContent = "We have limited ranch offerings available right now. Please contact us for current details.";
  } else {
    availabilityMessage.textContent = "Availability changes often. Please contact us for the most current ranch update.";
  }
}

function setFooterYear() {
  const footerYear = document.querySelector("#footerYear");

  if (!footerYear) {
    return;
  }

  footerYear.textContent = `© ${new Date().getFullYear()} Whoa Mule Ranch`;
}

buildFilterButtons();
displayOfferings(ranchOfferings);
showAvailabilityMessage();
setFooterYear();