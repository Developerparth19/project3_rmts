// Form validation
    // JavaScript to restrict input to digits and limit to 10 digits
    document.getElementById('phone').addEventListener('input', function(event) {
        var phoneInput = event.target;
        
        // Remove any non-numeric characters
        phoneInput.value = phoneInput.value.replace(/\D/g, '');

        // Limit to 10 digits
        if (phoneInput.value.length > 10) {
            phoneInput.value = phoneInput.value.slice(0, 10);
        }
    });

    // JavaScript for form validation
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        var phoneInput = document.getElementById('phone');
        
        // Check if the phone number is exactly 10 digits
        if (phoneInput.value.length !== 10) {
            phoneInput.classList.add('is-invalid');
        } else {
            phoneInput.classList.remove('is-invalid');
            alert('Form Submitted Successfully');
        }
    });

// Form validation

 // Function to Scroll to Top
 function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Function to Open WhatsApp Chat
function openWhatsApp() {
    window.location.href = "https://wa.me/9322596402"; // Replace YOUR_PHONE_NUMBER
}

// Show/Hide Scroll Button on Scroll
window.onscroll = function() {
    let scrollBtn = document.querySelector(".scroll-top-btn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollBtn.style.display = "flex";
    } else {
        scrollBtn.style.display = "none";
    }
};