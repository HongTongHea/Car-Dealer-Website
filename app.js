const carData = [
  {
    id: 1,
    name: "Porsche 911 GT3 ",
    price: "$87,900",
    tyepe: "Modern: Sports Car",
    img: "/images/Car1.png",
    tag: "New",
    promotin: "16%",
  },
  {
    id: 2,
    name: "BMW 840i",
    price: "$537,600",
    tyepe: "Modern: Sports Car",
    img: "/images/Car3.png",
    tag: "USED",
    promotin: "10%",
  },
  {
    id: 3,
    name: "Mclaren 675LT",
    price: "$254,225",
    tyepe: "Modern: Sports Car",
    img: "/images/Car5.png",
    tag: "Featured",
    promotin: "25%",
  },
  {
    id: 4,
    name: "BMW M8 Coupe",
    price: "$138,800",
    tyepe: "Modern: Sports Car",
    img: "/images/Car2.png",
    tag: "Featured",
    promotin: "20%",
  },

  {
    id: 5,
    name: "Mercedes AMG",
    price: "$136,050",
    tyepe: "Modern: Sports Car",
    img: "/images/Car7.png",
    tag: "USED",
    promotin: "15%",
  },
  {
    id: 6,
    name: " Lamborghini Urus",
    price: "$222,004",
    tyepe: "h-performance luxury",
    img: "/images/Car12.png",
    tag: "New",
    promotin: "10%",
  },
  {
    id: 7,
    name: "Tesla Model S ",
    price: "$89,990",
    tyepe: "Modern: Elictric Car",
    img: "/images/Car6.png",
    tag: "Popular",
    promotin: "18%",
  },

  {
    id: 8,
    name: "Lexus RX AWD",
    price: "$49,950",
    tyepe: "Design elements",
    img: "/images/Car10.png",
    tag: "New",
    promotin: "10%",
  },
  {
    id: 9,
    name: "Hyundai i30",
    price: "$24,000",
    tyepe: "Modern: Family Car",
    img: "/images/Car11.png",
    tag: "New",
    promotin: "30%",
  },
  {
    id: 10,
    name: "Tesla cybertruck ",
    price: "$102,235",
    tyepe: "Modern: Elictric Car",
    img: "/images/Car13.png",
    tag: "UESD",
    promotin: "10%",
  },
  {
    id: 11,
    name: "Mustang GT500",
    price: " $80,795",
    tyepe: "Modern: Sports Car",
    img: "/images/Car14.png",
    tag: "New",
    promotin: "10%",
  },
  {
    id: 12,
    name: "Toyota Prius 2023",
    price: "$28,545",
    tyepe: "Model: LE LE AWD",
    img: "/images/Car15.png",
    tag: "USED",
    promotin: "20%",
  },
  {
    id: 13,
    name: "Ford Trucks 2023",
    price: "$57,000",
    tyepe: "F-Series Pickups",
    img: "/images/Car16.png",
    tag: "USED",
    promotin: "18%",
  },
  {
    id: 14,
    name: "Porsche 911 GT3 ",
    price: "$197,200",
    tyepe: "Modern: GT3 2023",
    img: "/images/Car17.png",
    tag: "New",
    promotin: "10%",
  },
  {
    id: 15,
    name: "Chevy Trax 2025",
    price: "$21,495",
    tyepe: "Features &Specs",
    img: "/images/Car8.png",
    tag: "USED",
    promotin: "35%",
  },
  {
    id: 16,
    name: "BMW 840i",
    price: "$537,600",
    tyepe: "Modern: Sports Car",
    img: "/images/Car3.png",
    tag: "USED",
    promotin: "10%",
  },
  {
    id: 17,
    name: "Porsche 911 GT3 ",
    price: "$197,200",
    tyepe: "Modern: GT3 2023",
    img: "/images/Car17.png",
    tag: "New",
    promotin: "10%",
  },
  {
    id: 18,
    name: "Mustang GT500",
    price: " $80,795",
    tyepe: "Modern: Sports Car",
    img: "/images/Car14.png",
    tag: "New",
    promotin: "10%",
  },
  {
    id: 19,
    name: "Hyundai i30",
    price: "$24,000",
    tyepe: "Modern: Family Car",
    img: "/images/Car11.png",
    tag: "New",
    promotin: "30%",
  },
  {
    id: 20,
    name: "Toyota Prius 2023",
    price: "$28,545",
    tyepe: "Model: LE LE AWD",
    img: "/images/Car15.png",
    tag: "USED",
    promotin: "20%",
  },
];

// Array to store the cart items
// Array to store the cart items
let cart = [];

// Function to create a car card
const createCarBox = (car) => `
  <div class="car-box">
    <img src="${car.img}" alt="" class="box-img">
    <div class="car-price">
      <div class="car-title">
        <h2>${car.name}</h2>
        <p>${car.tyepe}</p>
        <h3>Off: ${car.promotin}</h3>
      </div>
      <h3 class="price">${car.price}<span></span></h3>
    </div>
    <button class="btn-buy" data-id="${car.id}">Add to Cart</button>
    <span class="tag">${car.tag}</span>
  </div>
`;

// Render all cars on the page
const carContant = document.querySelector(".car-contant");
carData.forEach((car) => {
  carContant.insertAdjacentHTML("beforeend", createCarBox(car));
});

// Function to update the cart UI
const updateCartUI = () => {
  const cartList = document.getElementById("cart-list");
  const clearCartButton = document.getElementById("clear-cart");

  cartList.innerHTML = "";
  if (cart.length === 0) {
    cartList.innerHTML = "<li>Your cart is empty</li>";
    clearCartButton.style.display = "none";
  } else {
    cart.forEach((car, index) => {
      const listItem = `
        <li>
          <img src="${car.img}" alt="${car.name}" width="100">
          <h3>${car.name}</h3>
          <p>Type: ${car.tyepe}</p>
          <p>Price: ${car.price}</p>
          <p>Promotion: ${car.promotin}</p>
          <button class="remove-btn" data-index="${index}">Remove</button>
        </li>
      `;
      cartList.insertAdjacentHTML("beforeend", listItem);
    });
    clearCartButton.style.display = "block";
  }
};

// Function to update the cart count badge
const updateCartCount = () => {
  const cartCount = document.getElementById("cart-count");
  cartCount.textContent = cart.length;
};

// Event listener for adding items to the cart
carContant.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-buy")) {
    const carId = parseInt(event.target.getAttribute("data-id"));
    const selectedCar = carData.find((car) => car.id === carId);

    if (selectedCar) {
      cart.push(selectedCar); // Add car to the cart array
      alert(`${selectedCar.name} added to the cart!`);
      updateCartUI(); // Update the cart display
      updateCartCount(); // Update the count badge
    }
  }
});

// Event listener to handle cart item removal
document.getElementById("cart-list").addEventListener("click", (event) => {
  if (event.target.classList.contains("remove-btn")) {
    const index = parseInt(event.target.getAttribute("data-index"));
    cart.splice(index, 1); // Remove item from cart array
    updateCartUI(); // Update the cart display
    updateCartCount(); // Update the count badge
  }
});

// Event listener to clear the entire cart
document.getElementById("clear-cart").addEventListener("click", () => {
  cart = []; // Reset cart array
  updateCartUI(); // Update the cart display
  updateCartCount(); // Update the count badge
});

// Event listener to toggle cart visibility
document.getElementById("toggle-cart").addEventListener("click", () => {
  const cartContainer = document.getElementById("cart-container");
  cartContainer.classList.toggle("hidden");
  cartContainer.classList.toggle("visible");

  if (cartContainer.classList.contains("visible")) {
    updateCartUI(); // Update the cart display
    updateCartCount(); // Update the count badge
  }
});
document.querySelector(".cart-header .bx-x").addEventListener("click", () => {
  const cartContainer = document.getElementById("cart-container");
  cartContainer.classList.remove("visible");
  cartContainer.classList.add("hidden");
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 200) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  });

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

//menu function
const navMenu = document.getElementById("nav_menu"),
  togglemenu = document.getElementById("toggle_menu"),
  navClose = document.getElementById("close_menu");
togglemenu.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
});
navClose.addEventListener("click", () => {
  navMenu.classList.remove("show-menu");
});

//active function
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav_link");
  const currentPath = window.location.pathname.split("/").pop();

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });
});
// search function desktop
const searchIcon = document.getElementById("searchIcon");
const popupClose = document.getElementById("popupClose");
const searchPopup = document.getElementById("searchPopup");
const overlay = document.getElementById("overlay");

searchIcon.addEventListener("click", (e) => {
  e.preventDefault();
  searchPopup.classList.add("show");
  overlay.classList.add("show");
});

popupClose.addEventListener("click", () => {
  searchPopup.classList.remove("show");
  overlay.classList.remove("show");
});

overlay.addEventListener("click", () => {
  searchPopup.classList.remove("show");
  overlay.classList.remove("show");
});
// search function mobile
const searchmobile = document.getElementById("searchmobile");
const popupClosemobile = document.getElementById("popupClosemobile");
const searchPopupmobile = document.getElementById("searchPopupmobile");
const overlaymobile = document.getElementById("overlaymobile");

searchmobile.addEventListener("click", (e) => {
  e.preventDefault();
  searchPopupmobile.classList.add("show");
  overlaymobile.classList.add("show");
});

popupClosemobile.addEventListener("click", () => {
  searchPopupmobile.classList.remove("show");
  overlaymobile.classList.remove("show");
});

overlaymobile.addEventListener("click", () => {
  searchPopupmobile.classList.remove("show");
  overlaymobile.classList.remove("show");
});

window.onscroll = function () {
  scrollFunction();
};

window.onscroll = function () {
  scrollFunction();
};
//scroll function
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const headerTop = document.querySelector(".hearder-top");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 50) {
    // Change based on when you want the effect
    header.classList.add("scrolled");
    headerTop.classList.add("hidden");
  } else {
    header.classList.remove("scrolled");
    headerTop.classList.remove("hidden");
  }
});

//animation function
document.querySelector(".logo-brand").addEventListener("mouseover", () => {
  document.querySelector(".logo-brand").style.animationPlayState = "paused";
});

document.querySelector(".logo-brand").addEventListener("mouseout", () => {
  document.querySelector(".logo-brand").style.animationPlayState = "running";
});
