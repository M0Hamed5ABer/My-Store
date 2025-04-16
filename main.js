// open login page
function Subscribe() {
    window.location.href = "login-page.html";
}

//Close modle
// check from data
// user_info is database name
'use strict';

const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// وظيفة إغلاق المودال
const modalCloseFunc = function () { 
  modal.classList.add('closed');
};

// تحقق من وجود بيانات مستخدم
let storedData = JSON.parse(localStorage.getItem("user_info"));

if (storedData && storedData.email && storedData.password) {
  // المستخدم مسجل من قبل -> أغلق المودال
  modal.classList.add('closed');
} else {
  // المستخدم غير مسجل -> اترك المودال مفتوح أو أظهر صفحة تسجيل الدخول
  modal.classList.remove('closed');  // تأكد أن المودال ظاهر
}

// إغلاق المودال بالضغط على الزر أو الخلفية
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);

//Close Notification 

const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

toastCloseBtn.addEventListener('click', function() {
    notificationToast.classList.add('closed');
})

//Closing or Opening Mobile Menu 
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

    const mobileMenuCloseFunc = function () {
        mobileMenu[i].classList.remove('active');
        overlay.classList.remove('active');
    }

    mobileMenuOpenBtn[i].addEventListener('click', function () {
        mobileMenu[i].classList.add('active');
        overlay.classList.add('active');
    })

    mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
    overlay.addEventListener('click', mobileMenuCloseFunc);
}

//Accordion Options
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordion.length; i++) {
    accordionBtn[i].addEventListener('click', function () {
        const clickedBtn = this.nextElementSibling.classList.contains('active');

        for (let i = 0; i < accordion.length; i++) {
            if (clickedBtn) break;
            if (accordion[i].classList.contains('active')) {
                accordion[i].classList.remove('active');
                accordionBtn[i].classList.remove('active');
            }
        }

        this.nextElementSibling.classList.toggle('active');
        this.classList.toggle('active');
    })
}
