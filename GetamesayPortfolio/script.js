// EmailJS and portfolio functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with your public key
    // Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
    emailjs.init("Zijz-zx5oUnKvxzuM"); // You'll get this from EmailJS dashboard

    // Mobile Menu Elements
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');
    
    // Contact Form Elements
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const formMessage = document.getElementById('form-message');
    const btnText = submitBtn?.querySelector('.btn-text');
    const btnLoading = submitBtn?.querySelector('.btn-loading');

    // Mobile Menu Toggle Functionality
    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });
    }
    
    // Close mobile menu when clicking on a link
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navLinks.classList.contains('active') && 
            !navLinks.contains(event.target) && 
            !mobileMenu.contains(event.target)) {
            navLinks.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Contact Form with EmailJS Integration
    if (contactForm) {
        contactForm.addEventListener('submit', async function(event) {
            event.preventDefault();
            
            // Get form values
            const firstName = document.getElementById('firstName').value.trim();
            const lastName = document.getElementById('lastName').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Validation
            if (!validateForm(firstName, lastName, email, subject, message)) {
                return;
            }
            
            // Show loading state
            setLoadingState(true);
            hideMessage();
            
            try {
                // Prepare template parameters
                const templateParams = {
                    from_name: `${firstName} ${lastName}`,
                    from_email: email,
                    subject: subject,
                    message: message,
                    to_name: "Getamesay",
                    reply_to: email
                };
                
                // Send email using EmailJS
                // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual IDs
                const response = await emailjs.send(
                    'service_usdfi0g', // Replace with your EmailJS service ID
                    'template_0x9pyd7', // Replace with your EmailJS template ID
                    templateParams
                );
                
                // Success handling
                showMessage('✅ Message sent successfully! I will get back to you soon.', 'success');
                contactForm.reset();
                resetFormLabels();
                
            } catch (error) {
                // Error handling
                console.error('EmailJS Error:', error);
                showMessage('❌ Failed to send message. Please try again or contact me directly at getamesaymekcha677@gmail.com', 'error');
            } finally {
                // Reset loading state
                setLoadingState(false);
            }
        });
    }
    
    // Form validation function
    function validateForm(firstName, lastName, email, subject, message) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let isValid = true;
        let errorMessage = '';
        
        if (!firstName) {
            isValid = false;
            errorMessage += '• First Name is required\n';
        }
        
        if (!lastName) {
            isValid = false;
            errorMessage += '• Last Name is required\n';
        }
        
        if (!email) {
            isValid = false;
            errorMessage += '• Email Address is required\n';
        } else if (!emailRegex.test(email)) {
            isValid = false;
            errorMessage += '• Please enter a valid email address\n';
        }
        
        if (!subject) {
            isValid = false;
            errorMessage += '• Subject is required\n';
        }
        
        if (!message) {
            isValid = false;
            errorMessage += '• Message is required\n';
        } else if (message.length < 10) {
            isValid = false;
            errorMessage += '• Message should be at least 10 characters long\n';
        }
        
        if (!isValid) {
            showMessage('❌ Please fix the following errors:\n\n' + errorMessage, 'error');
        }
        
        return isValid;
    }
    
    // Loading state management
    function setLoadingState(isLoading) {
        if (!submitBtn || !btnText || !btnLoading) return;
        
        if (isLoading) {
            submitBtn.disabled = true;
            btnText.style.display = 'none';
            btnLoading.style.display = 'inline-block';
        } else {
            submitBtn.disabled = false;
            btnText.style.display = 'inline-block';
            btnLoading.style.display = 'none';
        }
    }
    
    // Message display functions
    function showMessage(text, type) {
        if (!formMessage) return;
        
        formMessage.textContent = text;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';
        
        // Auto-hide success messages after 5 seconds
        if (type === 'success') {
            setTimeout(() => {
                hideMessage();
            }, 5000);
        }
    }
    
    function hideMessage() {
        if (formMessage) {
            formMessage.style.display = 'none';
            formMessage.className = 'form-message';
        }
    }
    
    // Reset form labels
    function resetFormLabels() {
        const labels = contactForm?.querySelectorAll('label');
        labels?.forEach(label => {
            label.style.top = '12px';
            label.style.fontSize = '0.9rem';
            label.style.color = '#7f8c8d';
        });
    }
    
    // Animate skill bars when they come into view
    const animateSkillBars = function() {
        const skillBars = document.querySelectorAll('.skill-progress');
        const skillsSection = document.querySelector('.professional-skills');
        
        if (!skillsSection) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    skillBars.forEach(bar => {
                        const width = bar.style.width;
                        bar.style.width = '0%';
                        setTimeout(() => {
                            bar.style.width = width;
                        }, 100);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(skillsSection);
    };
    
    // Initialize skill bar animation
    animateSkillBars();
    
    // Add loading animation to page elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for fade-in animation
    const animatedElements = document.querySelectorAll('.about-container, .skills-content, .education-frame, .project-frame, .contact-content');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Form input label animation
    const formInputs = document.querySelectorAll('.input-group input, .input-group textarea');
    formInputs.forEach(input => {
        // Check if input has value on page load
        if (input.value) {
            const label = input.previousElementSibling;
            if (label && label.tagName === 'LABEL') {
                label.style.top = '-8px';
                label.style.fontSize = '0.75rem';
                label.style.color = '#75798b';
            }
        }
        
        input.addEventListener('focus', function() {
            const label = this.previousElementSibling;
            if (label && label.tagName === 'LABEL') {
                label.style.top = '-8px';
                label.style.fontSize = '0.75rem';
                label.style.color = '#75798b';
            }
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                const label = this.previousElementSibling;
                if (label && label.tagName === 'LABEL') {
                    label.style.top = '12px';
                    label.style.fontSize = '0.9rem';
                    label.style.color = '#7f8c8d';
                }
            }
        });
    });
});