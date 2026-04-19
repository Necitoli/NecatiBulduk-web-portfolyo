// ============================================
// GÜREŞ DÜNYASI - JAVASCRIPT ETKİLEŞİMLERİ
// ============================================

// 1. DARK MODE (Koyu Tema) ETKİLEŞİMİ
// ============================================

// Dark Mode CSS'ini dinamik olarak oluştur
const darkModeStyle = document.createElement('style');
darkModeStyle.textContent = `
    body.dark-mode {
        background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%) !important;
        color: #e0e0e0 !important;
    }

    body.dark-mode .navbar {
        background: rgba(26, 26, 46, 0.95) !important;
    }

    body.dark-mode .nav-link {
        color: #e0e0e0 !important;
    }

    body.dark-mode .modal-content {
        background: #2a2a3e !important;
        color: #e0e0e0 !important;
    }

    body.dark-mode .form-group input,
    body.dark-mode .form-group label {
        background: #3a3a4e !important;
        color: #e0e0e0 !important;
        border-color: #4a4a5e !important;
    }

    body.dark-mode .feature-card {
        background: #2a2a3e !important;
        color: #e0e0e0 !important;
    }

    body.dark-mode .hero {
        background: rgba(26, 26, 46, 0.8) !important;
    }

    body.dark-mode .footer {
        background: #0f1419 !important;
    }

    body.dark-mode .section-title {
        color: #e0e0e0 !important;
    }
`;
document.head.appendChild(darkModeStyle);

// Dark Mode Toggle Butonunu Dinamik Olarak Oluştur
function createDarkModeToggle() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    const navContainer = navbar.querySelector('.nav-container');
    if (!navContainer) return;

    // Eğer zaten toggle varsa çıkış yap
    if (document.querySelector('.theme-toggle')) return;

    // Toggle butonu oluştur
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.textContent = '🌙';
    themeToggle.style.cssText = `
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        transition: all 0.3s ease;
        padding: 0.5rem;
        margin-right: 1rem;
    `;

    // Hover efekti
    themeToggle.addEventListener('mouseover', () => {
        themeToggle.style.transform = 'rotate(20deg)';
    });

    themeToggle.addEventListener('mouseout', () => {
        themeToggle.style.transform = 'rotate(0deg)';
    });

    // Tıklanma olayı
    themeToggle.addEventListener('click', toggleDarkMode);

    // Navbar'a ekle (hamburger menüden önce)
    const hamburger = navContainer.querySelector('.hamburger');
    if (hamburger) {
        navContainer.insertBefore(themeToggle, hamburger);
    } else {
        navContainer.appendChild(themeToggle);
    }
}

// Dark Mode Aç/Kapat
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    
    // Buton ikonunu değiştir
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    }
}

// Sayfa yüklendiğinde Dark Mode tercihini yükle
function loadDarkModePreference() {
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        const themeToggle = document.querySelector('.theme-toggle');
        if (themeToggle) {
            themeToggle.textContent = '☀️';
        }
    }
}

// ============================================
// 2. SCROLL TO TOP BUTONU (Yukarı Çık)
// ============================================

// Scroll to Top CSS'ini dinamik olarak oluştur
const scrollToTopStyle = document.createElement('style');
scrollToTopStyle.textContent = `
    .scroll-to-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #dc2626;
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        z-index: 999;
    }

    .scroll-to-top.show {
        display: flex;
    }

    .scroll-to-top:hover {
        background: #f59e0b;
        transform: translateY(-5px);
    }

    @media (max-width: 768px) {
        .scroll-to-top {
            bottom: 20px;
            right: 20px;
            width: 45px;
            height: 45px;
            font-size: 1.2rem;
        }
    }
`;
document.head.appendChild(scrollToTopStyle);

// Scroll to Top Butonunu Dinamik Olarak Oluştur
function createScrollToTopButton() {
    // Eğer zaten varsa çıkış yap
    if (document.querySelector('.scroll-to-top')) return;

    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.textContent = '↑';
    scrollToTopBtn.addEventListener('click', scrollToTop);

    document.body.appendChild(scrollToTopBtn);
}

// Scroll olayını dinle
window.addEventListener('scroll', () => {
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    if (!scrollToTopBtn) return;

    // Eğer sayfa 300 piksel aşağı kaydırıldıysa butonu göster
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

// Sayfayı yukarı kaydır
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ============================================
// SAYFA YÜKLENDIĞINDE ÇALIŞTIRILACAK KODLAR
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Dark Mode butonunu oluştur
    createDarkModeToggle();
    
    // Dark Mode tercihini yükle
    loadDarkModePreference();
    
    // Scroll to Top butonunu oluştur
    createScrollToTopButton();
});

// ============================================
// AÇIKLAMA
// ============================================
/*
Bu dosya 2 adet JavaScript etkileşimi içerir:

1. DARK MODE:
   - Navbar'a dinamik olarak ay ikonu (🌙) ekler
   - Tıklandığında koyu tema açılır/kapanır
   - Tema seçimi tarayıcı hafızasında kaydedilir
   - Sayfa yenilense bile tema ayarı kalır
   - Tüm CSS dinamik olarak oluşturulur (HTML'e ekleme yapılmaz)

2. SCROLL TO TOP:
   - Sağ alt köşeye dinamik olarak ↑ butonu ekler
   - Sayfa 300 piksel aşağı kaydırıldığında buton görünür
   - Tıklandığında sayfa yumuşak şekilde en üste kaydırılır
   - Responsive tasarım ile mobil cihazlarda da çalışır
   - Tüm stil ve işlevsellik JavaScript ile oluşturulur

NOT: HTML ve CSS dosyalarına hiçbir ekleme yapılmamıştır.
Tüm etkileşimler sadece bu JavaScript dosyasında yer almaktadır.
*/
