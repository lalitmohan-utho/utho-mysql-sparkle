// Simple JavaScript for interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Add a click effect
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
        });
    });

    // Add intersection observer for fade-in animations
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

    // Observe all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Table responsive behavior
    const tables = document.querySelectorAll('.comparison-table, .pricing-table');
    tables.forEach(table => {
        // Add hover effects to table rows
        const rows = table.querySelectorAll('tbody tr');
        rows.forEach(row => {
            row.addEventListener('mouseenter', function() {
                this.style.backgroundColor = 'var(--muted)';
            });
            row.addEventListener('mouseleave', function() {
                this.style.backgroundColor = '';
            });
        });
    });

    // Hero section parallax effect (subtle)
    const heroSection = document.querySelector('.hero-section');
    const heroGrid = document.querySelector('.hero-grid');
    
    if (heroSection && heroGrid) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            heroGrid.style.transform = `translate3d(0, ${rate}px, 0)`;
        });
    }

    // Add loading animation to cards
    const cards = document.querySelectorAll('.product-card, .pain-point-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        
        observer.observe(card);
    });

    // Console log for static version info
    console.log('🚀 MySQL Cloud Pricing - Static Version');
    console.log('📧 Contact: support@utho.com');
    console.log('🌐 Visit: https://utho.com');
});