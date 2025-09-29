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