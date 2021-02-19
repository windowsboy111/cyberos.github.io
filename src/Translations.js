import en_US from "./translations/en-US.json";
import pl from "./translations/pl.json";
import de from "./translations/de.json";
import ru from "./translations/ru.json";

let translations = {
  en_US: en_US.website,
  pl: pl.website,
  de: de.website,
  ru: ru.website,
};

export function getLanguage() {
  return navigator.language in translations ? navigator.language : "en_US";
}

export default function getLanguageKey(key) {
  return translations[getLanguage()][key];
}
