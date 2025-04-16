
// open login page
function Subscribe() {
  window.location.href = "login-page.html";
}

//Close modle
// check from data
// user_info is database name
("use strict");

const modal = document.querySelector("[data-modal]");
const modalCloseBtn = document.querySelector("[data-modal-close]");
const modalCloseOverlay = document.querySelector("[data-modal-overlay]");

// دالة إغلاق المودال
const modalCloseFunc = function () {
  modal.classList.add("closed");
};

// دالة الفحص المتكرر
let checkInterval;

function checkUserData() {
  let storedData = JSON.parse(localStorage.getItem("user_info"));
  if (storedData && storedData.email && storedData.password) {
    // البيانات موجودة -> اغلق المودال وأوقف التكرار
    modal.classList.add("closed");

    clearInterval(checkInterval); // إيقاف التكرار
  } else {
    // البيانات غير موجودة -> اظهر المودال
    modal.classList.remove("closed");
  }
}

// بدء التكرار كل دقيقتين
checkInterval = setInterval(checkUserData, 120000); // 120000ms = دقيقتين

// أول مرة فحص مباشرة بدون انتظار
checkUserData();

// ربط الإغلاق اليدوي
modalCloseOverlay.addEventListener("click", modalCloseFunc);
modalCloseBtn.addEventListener("click", modalCloseFunc);

//Close Notification

const notificationToast = document.querySelector("[data-toast]");
const toastCloseBtn = document.querySelector("[data-toast-close]");

toastCloseBtn.addEventListener("click", function () {
  notificationToast.classList.add("closed");
});
// data user or sign in
function dataUser() {
  if (storedData && storedData.email && storedData.password) {
    window.location.href = "user-page.html";
  } else {
    window.location.href = "login-page.html";
  }
}
//Closing or Opening Mobile Menu
const mobileMenuOpenBtn = document.querySelectorAll(
  "[data-mobile-menu-open-btn]"
);
const mobileMenu = document.querySelectorAll("[data-mobile-menu]");
const mobileMenuCloseBtn = document.querySelectorAll(
  "[data-mobile-menu-close-btn]"
);
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove("active");
    overlay.classList.remove("active");
  };

  mobileMenuOpenBtn[i].addEventListener("click", function () {
    mobileMenu[i].classList.add("active");
    overlay.classList.add("active");
  });

  mobileMenuCloseBtn[i].addEventListener("click", mobileMenuCloseFunc);
  overlay.addEventListener("click", mobileMenuCloseFunc);
}

//Accordion Options
const accordionBtn = document.querySelectorAll("[data-accordion-btn]");
const accordion = document.querySelectorAll("[data-accordion]");

for (let i = 0; i < accordion.length; i++) {
  accordionBtn[i].addEventListener("click", function () {
    const clickedBtn = this.nextElementSibling.classList.contains("active");

    for (let i = 0; i < accordion.length; i++) {
      if (clickedBtn) break;
      if (accordion[i].classList.contains("active")) {
        accordion[i].classList.remove("active");
        accordionBtn[i].classList.remove("active");
      }
    }

    this.nextElementSibling.classList.toggle("active");
    this.classList.toggle("active");
  });
}

