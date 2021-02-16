export default function getLanguageKey(key) {
    let translations = {
        "en_US": {
            "introQuote": "A Linux distribution built with Qt Quick and Arch Linux.",
            "download": "Download",
            "wipDisclaimer": "Psst, this website is a work-in-progress. You can help by [sending a pull request]."
        },
        "pl": {
            "introQuote": "Dystrybucja Linux, zbudowana na podstawie Arch Linux i Qt Quick.",
            "download": "Pobierz",
            "wipDisclaimer": "Psst, ta strona jest dalej budowana. Możesz pomóc [wysłając pull request]."
        }
    };

    let language = navigator.language in translations ? navigator.language : "en_US";

    return translations[language][key];
};
