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

const carData = [
  {
    name: "Porsche 911 GT3 ",
    price: "$87,900",
    tyepe: "Modern: Sports Car",
    img: "/images/Car1.png",
    tag: "New",
    promotin: "16%",
  },
  {
    name: "BMW 840i",
    price: "$537,600",
    tyepe: "Modern: Sports Car",
    img: "/images/Car3.png",
    tag: "USED",
    promotin: "10%",
  },
  {
    name: "Mclaren 675LT",
    price: "$254,225",
    tyepe: "Modern: Sports Car",
    img: "/images/Car5.png",
    tag: "Featured",
    promotin: "25%",
  },
  {
    name: "BMW M8 Coupe",
    price: "$138,800",
    tyepe: "Modern: Sports Car",
    img: "/images/Car2.png",
    tag: "Featured",
    promotin: "20%",
  },

  {
    name: "Mercedes AMG",
    price: "$136,050",
    tyepe: "Modern: Sports Car",
    img: "/images/Car7.png",
    tag: "USED",
    promotin: "15%",
  },
  {
    name: " Lamborghini Urus",
    price: "$222,004",
    tyepe: "h-performance luxury",
    img: "/images/Car12.png",
    tag: "New",
    promotin: "10%",
  },
  {
    name: "Tesla Model S ",
    price: "$89,990",
    tyepe: "Modern: Elictric Car",
    img: "/images/Car6.png",
    tag: "Popular",
    promotin: "18%",
  },

  {
    name: "Lexus RX AWD",
    price: "$49,950",
    tyepe: "Design elements",
    img: "/images/Car10.png",
    tag: "New",
    promotin: "10%",
  },
  {
    name: "Hyundai i30",
    price: "$24,000",
    tyepe: "Modern: Family Car",
    img: "/images/Car11.png",
    tag: "New",
    promotin: "30%",
  },
  {
    name: "Tesla cybertruck ",
    price: "$102,235",
    tyepe: "Modern: Elictric Car",
    img: "/images/Car13.png",
    tag: "UESD",
    promotin: "10%",
  },
  {
    name: "Mustang GT500",
    price: " $80,795",
    tyepe: "Modern: Sports Car",
    img: "/images/Car14.png",
    tag: "New",
    promotin: "10%",
  },
  {
    name: "Toyota Prius 2023",
    price: "$28,545",
    tyepe: "Model: LE LE AWD",
    img: "/images/Car15.png",
    tag: "USED",
    promotin: "20%",
  },
  {
    name: "Ford Trucks 2023",
    price: "$57,000",
    tyepe: "F-Series Pickups",
    img: "/images/Car16.png",
    tag: "USED",
    promotin: "18%",
  },
  {
    name: "Porsche 911 GT3 ",
    price: "$197,200",
    tyepe: "Modern: GT3 2023",
    img: "/images/Car17.png",
    tag: "New",
    promotin: "10%",
  },
  {
    name: "Chevy Trax 2025",
    price: "$21,495",
    tyepe: "Features &Specs",
    img: "/images/Car8.png",
    tag: "USED",
    promotin: "35%",
  },
];

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
      <a href="products.html" class="btn-buy">Buy Now</a>
      <span class="tag">${car.tag}</span>
  </div>
`;

const carContant = document.querySelector(".car-contant");
carData.forEach((car) => {
  const carBox = createCarBox(car);
  carContant.insertAdjacentHTML("beforeend", carBox);
});

document.addEventListener("DOMContentLoaded", function () {
  const carContantDiv = document.querySelector(".car-contant");
  const currentPage = window.location.pathname;

  if (currentPage.includes("about")) {
    carContantDiv.style.display = "none";
  }
});

// silder function

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 1000,
  loop: true,
  effect: "slide",
  slidesPerView: 1,
});

const mySwiper = new Swiper(".mySwiper", {
  direction: "horizontal",
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  scrollbar: {
    el: ".swiper-scrollbar",
    loop: true,
    draggable: true,
    snapOnRelease: true,
  },

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 1000,
  effect: "slide",

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
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
