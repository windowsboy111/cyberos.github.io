import de from "./translations/de.json";
import en_US from "./translations/en-US.json";
import es_MX from "./translations/es-MX.json";
import pl from "./translations/pl.json";
import pt_BR from "./translations/pt-BR.json";
import ru from "./translations/ru.json";
import zh_Hans from "./translations/zh-Hans.json";
import zh_Hant_HK from "./translations/zh-Hant-HK.json";
import zh_Hant from "./translations/zh-Hant.json";

let translations = {
  de: de,
  "en-US": en_US,
  "es-MX": es_MX,
  pl: pl,
  "pt-BR": pt_BR,
  ru: ru,
  "zh": zh_Hans,
  "zh-CN": zh_Hans,
  "zh-HK": zh_Hant_HK,
  "zh-TW": zh_Hant,
};

export function getLanguage() {
  return navigator.language in translations ? navigator.language : "en-US";
}

export default function getLanguageKey(key) {
  const keys = translations[getLanguage()];

  let rootKey = keys.website;
  if (!rootKey) rootKey = en_US.website;

  let output = rootKey[key];
  if (!output) output = en_US.website[key];

  return output;
}
