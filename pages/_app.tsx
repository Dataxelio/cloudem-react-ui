import "../styles/globals.css";

import { AppProps } from "next/app";

import { useLocale, I18nProvider, SSRProvider } from "react-aria";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faBatteryThreeQuarters,
  faFolder,
  faCaretDown,
  faCaretUp,
  faSpinner,
  faCircleNotch,
  faPlus,
  faSync,
  faSearch,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFolder as faFolderRegular,
  faEye as faEyeRegular,
  faEyeSlash as faEyeSlashRegular,
} from "@fortawesome/free-regular-svg-icons";

function App({ Component, pageProps }: AppProps) {
  library.add(
    fab,
    faBatteryThreeQuarters,
    faFolder,
    faFolderRegular,
    faCaretDown,
    faCaretUp,
    faSpinner,
    faCircleNotch,
    faPlus,
    faSync,
    faSearch,
    faEye,
    faEyeRegular,
    faEyeSlash,
    faEyeSlashRegular
  );

  const { locale } = useLocale();

  return (
    <SSRProvider>
      <I18nProvider locale={locale}>
        <Component {...pageProps} />
      </I18nProvider>
    </SSRProvider>
  );
}

export default App;
