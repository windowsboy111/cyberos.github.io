// FIXME: this is kinda ugly and tedious, it'd be nice if we had a better way of importing all of them
import ar from "./translations/ar.json";
import cs from "./translations/cs.json";
import de from "./translations/de.json";
import el from "./translations/el.json";
import et from "./translations/et.json";
import en_US from "./translations/en-US.json";
import es from "./translations/es.json";
import es_MX from "./translations/es-MX.json";
import fa from "./translations/fa.json";
import he_IL from "./translations/he-IL.json";
import he from "./translations/he.json";
import hi from "./translations/hi.json";
import hu from "./translations/hu.json";
import id from "./translations/id.json";
import it from "./translations/it.json";
import ja from "./translations/ja.json";
import lt from "./translations/lt.json";
import ml from "./translations/ml.json";
import nb_NO from "./translations/nb-NO.json";
import pl from "./translations/pl.json";
import pt_BR from "./translations/pt-BR.json";
import ro from "./translations/ro.json";
import ru from "./translations/ru.json";
import si from "./translations/si.json";
import sr from "./translations/sr.json";
import th from "./translations/th.json";
import tr from "./translations/tr.json";
import uk from "./translations/uk.json";
import yue_HK from "./translations/yue-HK.json";
import zh_HK from "./translations/zh-HK.json";
import zh from "./translations/zh.json";
import zh_TW from "./translations/zh-TW.json";

const translations = {
  ar,
  cs,
  de,
  el,
  'en-US': en_US,
  es,
  'es-MX': es_MX,
  fa,
  'he-IL': he_IL,
  he,
  hi,
  hu,
  id,
  it,
  ja,
  lt,
  ml,
  'nb-NO': nb_NO,
  pl,
  'pt-BR': pt_BR,
  ro,
  ru,
  si,
  sr,
  th,
  tr,
  uk,
  'yue-HK': yue_HK,
  yue: yue_HK,
  zh,
  'zh-CN': zh,
  'zh-HK': zh_HK,
  'zh-TW': zh_TW
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
