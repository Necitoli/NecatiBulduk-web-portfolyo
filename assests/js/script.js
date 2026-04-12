// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Hamburger menüyü aç/kapat
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Nav linkine tıklandığında menüyü kapat
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Sayfa kaydırıldığında menüyü kapat
window.addEventListener('scroll', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
});

// Aktif sayfa linkini vurgula
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Form Submit Handler
function handleFormSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Basit validasyon
    if (!name || !email || !subject || !message) {
        alert('Lütfen tüm alanları doldurunuz!');
        return;
    }
    
    // Başarı mesajı
    alert(`Teşekkürler ${name}! Mesajınız başarıyla gönderildi.\nEn kısa sürede sizinle iletişime geçeceğiz.`);
    
    // Formu sıfırla
    document.querySelector('.contact-form').reset();
}

// Intersection Observer - Scroll animasyonları
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Kartlara animasyon ekle
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll(
        '.feature-card, .wrestler-card, .event-card, .type-card, .highlight-item'
    );
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});

// Sayfa yükleme animasyonu
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Konsol mesajı
console.log('%cGüreş Dünyasına Hoş Geldiniz!', 'color: #dc2626; font-size: 16px; font-weight: bold;');
console.log('%cAntik Spordan Modern Güreşe', 'color: #f59e0b; font-size: 14px;');

// Responsive tasarım testi (opsiyonel)
function logScreenSize() {
    const width = window.innerWidth;
    if (width <= 480) {
        console.log('📱 Mobil görünüm (≤480px)');
    } else if (width <= 768) {
        console.log('📱 Tablet görünüm (481-768px)');
    } else {
        console.log('🖥️ Masaüstü görünüm (>768px)');
    }
}

window.addEventListener('resize', logScreenSize);
logScreenSize();
