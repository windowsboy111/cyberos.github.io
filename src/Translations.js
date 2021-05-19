// FIXME: this is kinda ugly and tedious, it'd be nice if we had a better way of importing all of them
import ar from "./translations/ar.json";
import cs from "./translations/cs.json";
import de from "./translations/de.json";
import el from "./translations/el.json";
import en from "./translations/en-US.json";
import es from "./translations/es.json";
import es_MX from "./translations/es-MX.json";
import et from "./translations/et.json";
import fa from "./translations/fa.json";
import he from "./translations/he.json";
import he_IL from "./translations/he-IL.json";
import hi from "./translations/hi.json";
import hu from "./translations/hu.json";
import id from "./translations/id.json";
import it from "./translations/it.json";
import ja from "./translations/ja.json";
import lt from "./translations/lt.json";
import ml from "./translations/ml.json";
import nb_NO from "./translations/nb-NO.json";
import nl from "./translations/nl.json"
import pl from "./translations/pl.json";
import pt_BR from "./translations/pt-BR.json";
import ro from "./translations/ro.json";
import ru from "./translations/ru.json";
import si from "./translations/si.json";
import sr from "./translations/sr.json";
import th from "./translations/th.json";
import tr from "./translations/tr.json";
import uk from "./translations/uk.json";
import yue from "./translations/yue-HK.json";
import zh from "./translations/zh.json";
import zh_TW from "./translations/zh-TW.json";

const translations = {
  ar,
  cs,
  de,
  el,
  en,
  'en-US': en,
  es,
  'es-MX': es_MX,
  et,
  fa,
  he,
  'he-IL': he_IL,
  hi,
  hu,
  id,
  it,
  ja,
  lt,
  ml,
  'nb-NO': nb_NO,
  nl,
  pl,
  'pt-BR': pt_BR,
  ro,
  ru,
  si,
  sr,
  th,
  tr,
  uk,
  yue,
  'yue-HK': yue,
  zh,
  'zh-CN': zh,
  'zh-HK': yue, // NOTE: zh-HK is not yue, but I am pretty sure no one's gonna reject using yue
  'zh-SG': zh_TW, // not available
  'zh-TW': zh_TW
};

export function getLanguage() {
  return navigator.language in translations ? navigator.language : "en-US";
}

export default function getLanguageKey(key) {
  const keys = translations[getLanguage()];

  let rootKey = keys.website;
  if (!rootKey) rootKey = en.website;

  let output = rootKey[key];
  if (!output) output = en.website[key];

  return output;
}
