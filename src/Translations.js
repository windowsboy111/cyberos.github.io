// FIXME: this is kinda ugly and tedious, it'd be nice if we had a better way of importing all of them
import cs from "./translations/cs.json";
import de from "./translations/de.json";
import el from "./translations/el.json";
import en_US from "./translations/en-US.json";
import es from "./translations/es.json";
import es_MX from "./translations/es-MX.json";
import fa from "./translations/fa.json";
import he_IL from "./translations/he-IL.json";
import he from "./translations/he.json";
import it from "./translations/it.json";
import nb_NO from "./translations/nb-NO.json";
import pl from "./translations/pl.json";
import pt_BR from "./translations/pt-BR.json";
import ru from "./translations/ru.json";
import si from "./translations/si.json";
import th from "./translations/th.json";
import tr from "./translations/tr.json";
import uk from "./translations/uk.json";
import yue from "./translations/yue.json";
import zh from "./translations/zh.json";
import zh_TW from "./translations/zh-TW.json";

const translations = {
  cs,
  de,
  el,
  'en-US': en_US,
  es,
  'es-MX': es_MX,
  fa,
  'he-IL': he_IL,
  he,
  it,
  'nb-NO': nb_NO,
  pl,
  'pt-BR': pt_BR,
  ru,
  si,
  th,
  tr,
  uk,
  zh,
  'zh-CN': zh,
  'yue': yue,
  'yue-HK': yue,
  'zh-HK': yue, // NOTE: zh-HK is not yue, but I am pretty sure no one's gonna reject using yue
  'zh-TW': zh_TW,
  'zh-SG': zh_TW
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
