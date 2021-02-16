import en_US from "./translations/en_US.json";
import pl from "./translations/pl.json";

export default function getLanguageKey(key) {
  let translations = {
    en_US: en_US.website,
    pl: pl.website,
  };

  let language =
    navigator.language in translations ? navigator.language : "en_US";

  return translations[language][key];
}
