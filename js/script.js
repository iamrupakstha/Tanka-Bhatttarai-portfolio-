// Simple form submission handling
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
        
        // WhatsApp button functionality
        document.querySelectorAll('.whatsapp, .whatsapp-btn').forEach(button => {
            button.addEventListener('click', function() {
                const phoneNumber = '9862155015';
                const message = 'Hello, I would like to know more about your mathematics services.';
                const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(url, '_blank');
            });
        });