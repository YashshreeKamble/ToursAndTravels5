// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    
    // Sticky Header Effect
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.querySelector('.nav-links');
    const navContainer = document.querySelector('.navbar');
    let isMenuOpen = false;

    menuIcon.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
            menuIcon.innerHTML = "<i class='bx bx-x'></i>";
            navContainer.classList.add('nav-active');
            
            // Re-show links for mobile menu
            navLinks.style.display = 'flex';
        } else {
            menuIcon.innerHTML = "<i class='bx bx-menu'></i>";
            navContainer.classList.remove('nav-active');
            
            // Reset to default css state (hidden on mobile)
            setTimeout(() => {
                navLinks.style.display = '';
            }, 300);
        }
    });

    // Active link highlighting based on current page
    const currentLocation = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.nav-links a');
    
    links.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentLocation) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
        
        link.addEventListener('click', () => {
            if (isMenuOpen) {
                menuIcon.click();
            }
        });
    });

    // Handle form submission (Prevent default for demo)
    const bookingForm = document.querySelector('.booking-form');
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const destination = document.getElementById('destination').value;
        
        if(destination) {
            alert(`Searching for trips to ${destination}...`);
        } else {
            alert('Please enter a destination to search.');
        }
    });

    // Set today's date as min for checkin
    const checkinInput = document.getElementById('checkin');
    const today = new Date().toISOString().split('T')[0];
    checkinInput.min = today;
});
