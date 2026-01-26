
// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const menuIcon = document.getElementById('menu');
    const mobileMenu = document.createElement('div');
    const closeBtn = document.createElement('button');
    const mobileNavLinks = document.createElement('ul');
    
    // Create mobile menu structure
    mobileMenu.className = 'mobile-menu';
    closeBtn.className = 'mobile-menu-close';
    closeBtn.innerHTML = '<i class="fas fa-times"></i>';
    mobileNavLinks.className = 'mobile-nav-links';
    
    // Get navigation links
    const navLinksContainer = document.querySelector('.nav-links');
    if (navLinksContainer) {
        const navLinks = navLinksContainer.querySelectorAll('a');
        navLinks.forEach(link => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = link.getAttribute('href');
            a.textContent = link.textContent;
            // Copy active class
            if (link.classList.contains('active')) {
                a.classList.add('active');
            }
            li.appendChild(a);
            mobileNavLinks.appendChild(li);
        });
    }
    
    // Assemble mobile menu
    mobileMenu.appendChild(closeBtn);
    mobileMenu.appendChild(mobileNavLinks);
    document.body.appendChild(mobileMenu);
    
    // Menu toggle functions
    function openMenu() {
        mobileMenu.classList.add('active');
        document.body.classList.add('menu-open');
    }
    
    function closeMenu() {
        mobileMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
    
    // Event listeners for menu toggle
    menuIcon.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    
    // Close menu when clicking on a mobile link
    mobileNavLinks.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            e.preventDefault();
            
            const targetId = e.target.getAttribute('href');
            
            // Update active classes
            document.querySelectorAll('.nav-links a, .mobile-nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            
            // Add active class to clicked link
            e.target.classList.add('active');
            
            // Update corresponding desktop link
            const desktopLink = document.querySelector(`.nav-links a[href="${targetId}"]`);
            if (desktopLink) {
                desktopLink.classList.add('active');
            }
            
            // Close menu
            closeMenu();
            
            // Smooth scroll to section
            if (targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    setTimeout(() => {
                        window.scrollTo({
                            top: targetSection.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }, 300); // Wait for menu to close
                }
            }
        }
    });
    
    // Close menu when clicking outside (on overlay)
    mobileMenu.addEventListener('click', function(e) {
        if (e.target === mobileMenu) {
            closeMenu();
        }
    });
    
    // WhatsApp button functionality
    const whatsappButtons = document.querySelectorAll('.whatsapp, .whatsapp-btns, .whatsapp-btn-mobile');
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const phoneNumber = '9779805073555';
            const message = encodeURIComponent('Hello Mr. Tanka Bhattarai sir! I would like to inquire about your mathematics tutoring services.');
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
            window.open(whatsappURL, '_blank');
        });
    });
    
    // Smooth scrolling for desktop anchor links
    document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const targetSection = document.querySelector(href);
            if (targetSection) {
                e.preventDefault();
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Update active class
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
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


// Contact Form Submission
document.addEventListener('DOMContentLoaded', function(){
    const contactForm = document.getElementById('contactForm');

if(contactForm){
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const submitBtn=this.querySelector('.btn-primary-modal');
        const originalText= submitBtn.innerHTML;

        submitBtn.innerHTML= '<i class="fas fa-spinner fa-spin"></i>Sending...';
        submitBtn.disabled = true;


        emailjs.send("service_84ik37j", "template_ypvbein", {
            name: this.querySelector('input[type="text"]').value,
            email: this.querySelector('input[type="email"]').value,
            subject: this.querySelector('input[placeholder="Subject"]').value,
            message: this.querySelector('textarea').value,
            to_email: "info.liberysscollege@gmail.com"

        })
        .then(()=> {
            let successMsg = document.querySelector('.success-message');
            if(!successMsg){
                successMsg=document.createElement('div');
                successMsg.className='success-message';
                successMsg.innerHTML = 
                '<i class="fas fa-check-circle"></i> Message sent successfully!';
                contactForm.appendChild(successMsg);

            }

            successMsg.style.display= 'block';
            contactForm.reset();
            

            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;

            setTimeout(()=> successMsg.style.display="none", 5000);

        })
        .catch(()=> {
            alert("Failed to send message. Please try again.");
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        });
    });

}
});