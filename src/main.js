import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});

const allMenus = document.querySelectorAll(".mega-menu-mobile li.has-submenu");
const menuIcon = document.querySelector(".mega-menu-mobile .menu-icon");
const closeIcon = document.querySelector(".mega-menu-mobile .close-icon");
const mobileMenu = document.querySelector(".mega-menu-mobile ul");
const submenuContainers = document.querySelectorAll(".mega-menu-mobile .submenu-container");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.remove("active");
    closeIcon.classList.add("active");
    mobileMenu.classList.add("active");
});

closeIcon.addEventListener("click", () => {
    closeIcon.classList.remove("active");
    menuIcon.classList.add("active");
    mobileMenu.classList.remove("active");
});

const displaySubmenu = (submenu) => {
    submenu.classList.toggle("active");

    if (submenu.classList.contains("active")) {
    submenu.style.height = `${submenu.scrollHeight}px`;
    return;
}

submenu.style.height = "0px";

};

allMenus.forEach(menu => {
    menu.addEventListener("click", () => {
        const submenu = menu.querySelector(".submenu-container");
        displaySubmenu(submenu);

    });
});



var contactbtn = document.getElementById('submit-button');
      
document.getElementById('contact-form').addEventListener('submit', function(event) {
   event.preventDefault();

   contactbtn.value = 'Sending...';

   const serviceID = 'service_3mvp8md';
   const templateID = 'template_mhzmj5m';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      contactbtn.value = 'Send Email';
      alert('The boss has been notified.');
    }, (err) => {
      contactbtn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

