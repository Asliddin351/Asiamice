export function saveLanguage(lang) {
    return localStorage.setItem('lang', lang)
}

export function getLanguageLocalstorage() {
    return localStorage.getItem('lang');
}
