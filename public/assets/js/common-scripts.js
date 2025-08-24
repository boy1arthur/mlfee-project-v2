// common-scripts.js

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 다국어 번역 데이터 ---
    const translations = {
        ko: {
            nav_tools: "유틸리티",
            nav_journey: "다음 아이디어",
            nav_devlog: "개발실록",
            hero_title: "하나의 불편함에서<br>시작된 여정",
            hero_subtitle: "게이머의 손이 닿지 못했던 곳에, AI가 답을 주었습니다.",
            hero_cta: "여정의 결과물 보기",
            tools_title: "그래서, 직접 만들었습니다",
            tools_subtitle: "당신의 게임 경험을 바꿀 AI 기반 유틸리티",
            tool_raid_chronicle: "레이드 크로니클 ✨",
            tool_raid_chronicle_tagline: "<span class='font-bold text-slate-300'>[통합 업데이트]</span> 혼테일 브레이커와 자쿰 타이머가 하나로! 입장 시간부터 파티 관리, 리저렉션까지 모든 것을 한 곳에서 해결하세요.",
            tool_calc: "N빵마스터",
            tool_calc_tagline: "수수료 걱정 없는 완벽한 분배",
            tool_buff: "메피 버피",
            tool_buff_tagline: "최적의 버프 순서와 타이밍",
            tool_ledger: "혼테일렛저",
            tool_ledger_tagline: "보상과 기여도 자동 기록",
            tool_janus: "프로젝트 야누스",
            tool_janus_tagline: "새로운 세계관 로드맵",
            launch_btn: "바로가기 &rarr;",
            coming_soon_btn: "준비중입니다...",
            journey_title: "당신의 아이디어가 다음 도구가 됩니다",
            journey_subtitle: "\"이런 기능이 있었으면...\" 하는 생각이 있으신가요? 커뮤니티에서 당신의 목소리를 들려주세요. 당신의 불편함이 모두의 편안함이 될 수 있습니다.",
            journey_cta_btn: "커뮤니티에서 아이디어 제안하기",
            about_h2_journey: "A Gamer's Journey",
            about_p_journey1: "MLFEE는 한 명의 게이머가 느낀 작은 불편함에서 시작되었습니다. \"왜 이런 건 아무도 안 만들지?\" 라는 질문은 곧 \"그럼 내가 직접 만들자\" 라는 다짐으로 이어졌습니다.",
            about_p_journey2: "이곳의 모든 도구는 실제 게임 플레이 경험을 바탕으로, 반복적이고 계산이 필요한 부분을 자동화하여 여러분이 게임의 핵심적인 재미에 더 집중할 수 있도록 돕기 위해 만들어졌습니다. N빵 계산의 번거로움, 레이드 공략의 복잡함, 버프 타이밍의 압박감 등, 제가 겪었던 문제들을 해결하기 위한 고민의 결과물입니다.",
            about_h2_foreveryone: "For Everyone, Everywhere",
            about_p_foreveryone1: "MLFEE는 'Mapleland For Everyone Everywhere'의 약자일지도 모릅니다. 이 프로젝트는 여러분의 피드백과 아이디어를 통해 계속해서 성장하고 발전합니다. 당신의 목소리가 다음 도구를 만드는 가장 중요한 재료가 됩니다.",
            about_p_foreveryone2: "이 사이트의 운영은 여러분의 자발적인 후원과 광고 수익으로 유지됩니다. 여러분의 작은 관심이 더 유용하고 새로운 도구를 만드는 데 큰 힘이 됩니다.",
            about_signature_name: "소년아서 드림",
            about_signature_title: "Creator of MLFEE"
        },
        en: {
            nav_tools: "Utilities",
            nav_journey: "Next Idea",
            nav_devlog: "Dev Log",
        },
        ja: {
            nav_tools: "ユーティリティ",
            nav_journey: "次のアイデア",
            nav_devlog: "開発ログ",
        }
    };

    // --- 언어 변경 함수 ---
    const setLanguage = (lang) => {
        document.documentElement.lang = lang;
        localStorage.setItem('mlfee-lang', lang);
        
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.dataset.translate;
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            } else if (translations['ko'] && translations['ko'][key]) {
                el.innerHTML = translations['ko'][key];
            }
        });
    };

    // --- 네비게이션 기능 초기화 함수 ---
    const initializeNavigation = () => {
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileNavContainer = document.getElementById('mobile-nav');
        const desktopNav = document.querySelector('nav.hidden.lg\\:flex');
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
        }
    };

    // --- 컴포넌트 로더 ---
    window.loadComponent = (url, placeholderId, callback) => {
        // [수정] 현재 페이지 위치를 기준으로 상대 경로를 계산
        const pagePath = window.location.pathname;
        const isIndex = pagePath.endsWith('/') || pagePath.endsWith('index.html');
        // index.html에서는 '_includes/...' 로, 하위 폴더에서는 '../_includes/...' 로 경로 조정
        const adjustedUrl = isIndex ? url : `../${url}`;

        fetch(adjustedUrl)
          .then(response => {
            if (!response.ok) throw new Error(`Component load failed: ${response.status} for ${adjustedUrl}`);
            return response.text();
          })
          .then(data => {
            const placeholder = document.getElementById(placeholderId);
            if (placeholder) {
                placeholder.outerHTML = data;
                if (callback) callback();
            }
          })
          .catch(error => console.error(`Error loading ${placeholderId}:`, error));
    };

    // --- 실행 ---
    // 이제 이 함수는 어느 페이지에서든 올바른 경로의 파일을 불러옵니다.
    window.loadComponent('_includes/navigation.html', 'nav-placeholder', initializeNavigation);
    window.loadComponent('_includes/footer.html', 'footer-placeholder');
});
