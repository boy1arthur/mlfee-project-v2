document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        ko: {
            nav_tools: "유틸리티", nav_raid_chronicle: "레이드 크로니클", nav_devlog: "개발실록",
            footer_about: "소개", footer_privacy: "개인정보처리방침", footer_contact: "문의하기",
            footer_copyright: "&copy; 2024 MLFEE by 소년아서. All Rights Reserved.",
            footer_message: "이 사이트는 개인의 열정으로 운영되며, 여러분의 후원과 관심으로 성장합니다."
        },
        en: { 
            nav_tools: "Utilities", nav_raid_chronicle: "Raid Chronicle", nav_devlog: "Dev Log",
            footer_about: "About", footer_privacy: "Privacy Policy", footer_contact: "Contact",
            footer_copyright: "&copy; 2024 MLFEE by Boy Arthur. All Rights Reserved.",
            footer_message: "This site is run with personal passion and grows with your support and interest."
        },
        ja: { 
            nav_tools: "ユーティリティ", nav_raid_chronicle: "レイドクロニクル", nav_devlog: "開発ログ",
            footer_about: "紹介", footer_privacy: "プライバシーポリシー", footer_contact: "お問い合わせ",
            footer_copyright: "&copy; 2024 MLFEE by ソニョンアーサー. All Rights Reserved.",
            footer_message: "このサイトは個人の情熱で運営されており、皆様の支援と関心によって成長します。"
        }
    };

    const setLanguage = (lang) => {
        document.documentElement.lang = lang;
        localStorage.setItem('mlfee-lang', lang);
        
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.dataset.translate;
            const pageTranslations = window.pageTranslations || {};
            const allTranslations = { ...translations, ...pageTranslations };

            if (allTranslations[lang] && allTranslations[lang][key]) {
                el.innerHTML = allTranslations[lang][key];
            } else if (allTranslations['ko'] && allTranslations['ko'][key]) {
                el.innerHTML = allTranslations['ko'][key];
            }
        });
    };

    const initializeUi = () => {
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileNavContainer = document.getElementById('mobile-nav');
        const desktopNav = document.querySelector('header nav.hidden.lg\\:flex');
        const languageSwitcher = document.getElementById('language-switcher');

        if (mobileMenuBtn && mobileNavContainer && desktopNav) {
            mobileNavContainer.innerHTML = `<div class="p-4 space-y-2">${desktopNav.innerHTML}</div>`;
            
            mobileMenuBtn.addEventListener('click', () => {
                mobileNavContainer.classList.toggle('hidden');
            });
        }

        if (languageSwitcher) {
            const savedLang = localStorage.getItem('mlfee-lang') || 'ko';
            languageSwitcher.value = savedLang;
            setLanguage(savedLang);

            languageSwitcher.addEventListener('change', (e) => {
                setLanguage(e.target.value);
            });
        } else {
            const savedLang = localStorage.getItem('mlfee-lang') || 'ko';
            setLanguage(savedLang);
        }
    };

    const loadComponent = (url, placeholderId) => {
        fetch(url)
          .then(response => {
            if (!response.ok) throw new Error(`Component load failed: ${response.status} for ${url}`);
            return response.text();
          })
          .then(data => {
            const placeholder = document.getElementById(placeholderId);
            if (placeholder) {
                placeholder.outerHTML = data;
            }
          })
          .catch(error => console.error(`Error loading ${placeholderId}:`, error));
    };
    
    Promise.all([
        loadComponent('/_includes/header.html', 'header-placeholder'),
        loadComponent('/_includes/footer.html', 'footer-placeholder')
    ]).then(() => {
        initializeUi();
    }).catch(error => {
        console.error("Failed to load essential components:", error);
    });
});
