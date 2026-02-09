// Initialize Alpine.js
document.addEventListener('alpine:init', () => {
    Alpine.data('layout', () => ({
        activeSection: 'Home',
        mobileMenuOpen: false,
        navItems: [
            'Home', 'Income Tax', 'GST', 'TDS & TCS',
            'Registrations', 'CMA & Net Worth', 'Investment',
            'EPF', 'Accounting', 'Gallery & Reviews', 'Contact Us'
        ],
        init() {
            // Handle Hash Navigation
            if (window.location.hash) {
                const hash = window.location.hash.substring(1).replace(/-/g, ' ');
                // Simple matching logic
                const found = this.navItems.find(item => item.toLowerCase() === hash.toLowerCase());
                if (found) this.activeSection = found;
            }
            // Initialize Icons
            this.$nextTick(() => {
                if (window.lucide) {
                    lucide.createIcons();
                }
            });

            // Watch for section changes to update URL hash optional
            this.$watch('activeSection', value => {
                // window.history.replaceState(null, null, '#' + value.toLowerCase().replace(/ /g, '-').replace(/&/g, ''));
                this.$nextTick(() => {
                    if (window.lucide) {
                        lucide.createIcons();
                    }
                });
            });
        },
        setActive(section) {
            this.activeSection = section;
            this.mobileMenuOpen = false;
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }));
});
