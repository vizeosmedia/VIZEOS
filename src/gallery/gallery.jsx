import "../style.css";
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

   const serviceID = 'service_bx122ak';
   const templateID = 'template_uz68pw9';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      contactbtn.value = 'Send Email';
      alert('Your message has been received, thank you! We will reach out to you shortly.');
    }, (err) => {
      contactbtn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});



        // JavaScript to handle video playback
        document.querySelectorAll('.video-item').forEach(item => {
            item.addEventListener('click', function() {
                const vimeoId = this.dataset.vimeoId;
                const modal = document.getElementById('videoModal');
                const iframe = document.getElementById('vimeoFrame');
                
                // Replace with actual Vimeo embed URL
                iframe.src = `https://player.vimeo.com/video/${vimeoId}?autoplay=1`;
                modal.classList.add('active');
            });
        });
        function closeVideo() {
            const modal = document.getElementById('videoModal');
            const iframe = document.getElementById('vimeoFrame');
            
            modal.classList.remove('active');
            iframe.src = '';
        }
        // Close modal when clicking outside the video
        document.getElementById('videoModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeVideo();
            }
        });
        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeVideo();
            }
        });


