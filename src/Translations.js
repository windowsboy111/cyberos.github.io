import en_US from "./translations/en_US.json";
import pl from "./translations/pl.json";

let translations = {
  en_US: en_US.website,
  pl: pl.website,
};

function getLanguage() {
  return navigator.language in translations ? navigator.language : "en_US";
}

export default function getLanguageKey(key) {
  let language = getLanguage();

  return translations[language][key];
}
