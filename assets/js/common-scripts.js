// /assets/js/common-scripts.js

document.addEventListener('DOMContentLoaded', () => {
  
  try {
    (adsbygoogle = window.adsbygoogle || []).push({});
  } catch (e) {
    console.error("Adsense push error:", e);
  }

  const translations = {
    ko: {
      nav_tools: '유틸리티', nav_journey: '다음 아이디어', nav_devlog: '개발실록',
      hero_title: '하나의 불편함에서<br>시작된 여정', hero_subtitle: '게이머의 손이 닿지 못했던 곳에, AI가 답을 주었습니다.', hero_cta: '여정의 결과물 보기',
      tools_title: '그래서, 직접 만들었습니다', tools_subtitle: '당신의 게임 경험을 바꿀 AI 기반 유틸리티',
      tool_calc: 'N빵마스터', tool_calc_tagline: '수수료 걱정 없는 완벽한 분배',
      tool_breaker: '혼테일 브레이커', tool_breaker_tagline: '최적의 공략 순서 시뮬레이터',
      tool_timer: '리저 타이머', tool_timer_tagline: '부활과 버프, 놓치지 마세요',
      tool_ledger: '혼테일렛저', tool_ledger_tagline: '보상과 기여도 자동 기록',
      tool_buff: '메피 버피', tool_buff_tagline: '최적의 버프 순서와 타이밍',
      tool_janus: '프로젝트 야누스', tool_janus_tagline: '새로운 세계관 로드맵',
      launch_btn: '바로가기 →',
      journey_title: '당신의 아이디어가 다음 도구가 됩니다', journey_subtitle: '"이런 기능이 있었으면..." 하는 생각이 있으신가요? 커뮤니티에서 당신의 목소리를 들려주세요. 당신의 불편함이 모두의 편안함이 될 수 있습니다.',
      journey_cta_btn: '커뮤니티에서 아이디어 제안하기',
      footer_about: '소개', footer_terms: '이용약관', footer_privacy: '개인정보처리방침',
    },
    en: {
      nav_tools: 'Utilities', nav_journey: 'Next Idea', nav_devlog: 'Devlog',
      hero_title: 'A Journey Born From<br>a Single Inconvenience', hero_subtitle: 'Where a gamer\'s reach fell short, AI provided the answer.', hero_cta: 'See the Journey\'s Results',
      tools_title: 'So, I Built Them Myself', tools_subtitle: 'AI-powered utilities to change your gaming experience',
      tool_calc: 'Split Master', tool_calc_tagline: 'Perfect distribution without fee worries',
      tool_breaker: 'Horntail Breaker', tool_breaker_tagline: 'Optimal attack sequence simulator',
      tool_timer: 'Resurrection Timer', tool_timer_tagline: 'Don\'t miss resurrections and buffs',
      tool_ledger: 'Horntail Ledger', tool_ledger_tagline: 'Auto-record rewards & contributions',
      tool_buff: 'Mefi Buffy', tool_buff_tagline: 'Optimal buff order & timing',
      tool_janus: 'Project Janus', tool_janus_tagline: 'A new world roadmap',
      launch_btn: 'Launch →',
      journey_title: 'Your Idea Becomes the Next Tool', journey_subtitle: 'Ever thought, "I wish there was a feature for..."? Let us hear your voice in the community. Your inconvenience can become everyone\'s convenience.',
      journey_cta_btn: 'Suggest an Idea in the Community',
      footer_about: 'About', footer_terms: 'Terms', footer_privacy: 'Privacy',
    },
    ja: {
      nav_tools: 'ユーティリティ', nav_journey: '次のアイデア', nav_devlog: '開発記録',
      hero_title: '一つの不便から<br>始まった旅', hero_subtitle: 'ゲーマーの手が届かなかった場所に、AIが答えをくれました。', hero_cta: '旅の成果を見る',
      tools_title: 'だから、自分で作りました', subtitle: 'あなたのゲーム体験を変えるAI搭載ユーティリティ',
      tool_calc: '割り勘マスター', tool_calc_tagline: '手数料の心配ない完璧な分配',
      tool_breaker: 'ホーンテイルブレーカー', tool_breaker_tagline: '最適攻略順序シミュレーター',
      tool_timer: 'リザレクションタイマー', tool_timer_tagline: '復活とバフ、お見逃しなく',
      tool_ledger: 'ホーンテイル元帳', tool_ledger_tagline: '報酬と貢献度を自動記録',
      tool_buff: 'メピバフィ', tool_buff_tagline: '最適なバフ順序とタイミング',
      tool_janus: 'プロジェクト・ヤヌス', tool_janus_tagline: '新しい世界観のロードマップ',
      launch_btn: '→ 起動',
      journey_title: 'あなたのアイデアが次のツールになります', journey_subtitle: '「こんな機能があったらいいな...」と思ったことはありませんか？コミュニティであなたの声を聞かせてください。あなたの不便が、みんなの便利になるかもしれません。',
      journey_cta_btn: 'コミュニティでアイデアを提案する',
      footer_about: '紹介', footer_terms: '利用規約', footer_privacy: 'プライバシーポリシー',
    }
  };

  const languageSwitcher = document.getElementById('language-switcher');
  
  function changeLanguage(lang) {
    if (!translations[lang]) return;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-translate]').forEach(el => {
      const key = el.dataset.translate;
      if (translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });
    updateMobileNav(lang);
    localStorage.setItem('preferredLanguage', lang);
  }

  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  
  if(mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => { 
        mobileNav.classList.toggle('hidden'); 
    });
  }

  function updateMobileNav(lang) { 
      if(!mobileNav) return;
      const navItems = [
          { key: 'nav_tools', href: '/#tools' }, 
          { key: 'nav_journey', href: '/#journey' }, 
          { key: 'nav_devlog', href: '/devlog/index.html' }
      ]; 
      mobileNav.innerHTML = navItems.map(item => `<a href="${item.href}" class="block px-4 py-3 hover:bg-slate-700">${translations[lang][item.key]}</a>`).join(''); 
  }

  const savedLang = localStorage.getItem('preferredLanguage'); 
  const browserLang = navigator.language.split('-')[0]; 
  const initialLang = savedLang || (translations[browserLang] ? browserLang : 'ko'); 
  
  if(languageSwitcher) {
    languageSwitcher.value = initialLang; 
    languageSwitcher.addEventListener('change', (e) => { 
        changeLanguage(e.target.value); 
    });
  }
  
  changeLanguage(initialLang);
});
