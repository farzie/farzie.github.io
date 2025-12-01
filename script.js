const toggle = document.getElementById('dark-mode-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
const body = document.body;

const setDarkMode = (isDark) => {
    if (isDark) {
        body.classList.add('dark');
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark');
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
        localStorage.setItem('theme', 'light');
    }
}

const savedTheme = localStorage.getItem('theme');
const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && systemPreference)) {
    setDarkMode(true);
} else {
    setDarkMode(false); 
}

if (toggle) {
    toggle.addEventListener('click', () => {
        const isCurrentlyDark = body.classList.contains('dark');
        setDarkMode(!isCurrentlyDark);
    });
}

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 150; 
    
    revealElements.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        } 
    });
};

revealOnScroll();
window.addEventListener('scroll', revealOnScroll);

lucide.createIcons();

tailwind.config = {
    darkMode: 'class', 
    theme: {
        extend: {
            fontFamily: {
                sans: ['Space Grotesk', 'sans-serif'],
            },
            colors: {
                'brand-bg': 'var(--color-bg)',
                'brand-text': 'var(--color-text)', 
                'brand-accent': 'var(--color-accent)', 
                'brand-accent-hover': 'var(--color-accent-hover)', 
                'nav-light': 'var(--color-nav-bg)',
                'nav-border': 'var(--color-nav-border)',
                'marquee-bg': 'var(--color-marquee-bg)',
                'marquee-border': 'var(--color-marquee-border)',
                'card-bg': 'var(--color-card-bg)',
                'card-border': 'var(--color-card-border)',
                'text-primary': 'var(--color-text)',
            },
            animation: {
                'blob': 'blob 7s infinite',
            },
            keyframes: {
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                }
            }
        }
    }
}