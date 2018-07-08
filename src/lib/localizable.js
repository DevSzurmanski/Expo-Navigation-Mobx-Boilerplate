import Localizable from "i18n-js";

Localizable.fallbacks = true;
Localizable.defaultLocale = "pl";
Localizable.locale = "pl";

Localizable.translations = {
  en: require("./languages/en.json"),
  pl: require("./languages/pl.json")
};

Localizable.numberFormat = {
  delimiter: Localizable.t("decimalDelimiter"),
  separator: Localizable.t("decimalSeparator"),
  precision: 2
};
export default Localizable;
