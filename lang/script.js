const translations = {
    en: {
        htitle: "Website Translating Service",
        hhome: "HOME",
        hservices: "SERVICES",
        servicesm: "Services",
        introm: "We translate your websites from Japanese to English, or vise versa. ",
        detailsm: "\"Details\"",
        detailscm: "We support translation of partial, or whole content including header, footer, and metatags. Any type of content is welcome, we especially have a deep understanding towards terminologies of computer science, audio-video, and videogame content.",
        expertisem: "\"Expertise\"",
        expertisecm: "We are a group of talented people with experience in several feilds that involves language. Some certifications include TOEIC, IELTS, and more. We also have moderate experience in web development with several platforms and tools, capable of fulfilling clients needs accordingly."
    },
    jp: {
        htitle: "ホームページ翻訳サービス",
        hhome: "ホーム",
        hservices: "サービス",
        servicesm: "サービス",
        introm: "あなたのウェブサイトを英訳、日本語訳致します。",
        detailsm: "「詳細」",
        detailscm: "ウェブサイト全体、または特定の一部を、メタタグ等含め翻訳致します。私たちはIT、音響映像、ゲーム関連のコンテンツを得意としていますが、どの業種の内容も歓迎致します。",
        expertisem: "「専門」",
        expertisecm: "我々の持つ豊富な言語経験と海外経験を精一杯活かします。資格として、TOEICやIELTSなどの試験で高得点を獲得しています。またウェブ開発においては、複数の手法を用いた開発、運営を経験しています。あなたのニーズに答えられるよう努力致します。"
    }
};

function setLanguage(lang) {
    document.getElementById('htitle').textContent = translations[lang].htitle;
    document.getElementById('hhome').textContent = translations[lang].hhome;
    document.getElementById('hservices').textContent = translations[lang].hservices;
    document.getElementById('servicesm').textContent = translations[lang].servicesm;
    document.getElementById('introm').textContent = translations[lang].introm;
    document.getElementById('detailsm').textContent = translations[lang].detailsm;
    document.getElementById('detailscm').textContent = translations[lang].detailscm;
    document.getElementById('expertisem').textContent = translations[lang].expertisem;
    document.getElementById('expertisecm').textContent = translations[lang].expertisecm;
}

// Detect browser language and set it
window.onload = function() {
    const userLang = navigator.language || navigator.userLanguage;
    const langCode = userLang.startsWith('jp') ? 'jp' : 'en';  // Fallback to English if not Japanese
    setLanguage(langCode);
};
