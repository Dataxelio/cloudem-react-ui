import "../styles/globals.css";

import { AppProps } from "next/app";

import { useLocale, I18nProvider, SSRProvider } from "react-aria";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faBatteryThreeQuarters,
  faFolder,
  faCaretLeft,
  faCaretRight,
  faCaretUp,
  faCaretDown,
  faSpinner,
  faCircleNotch,
  faPlus,
  faSync,
  faSearch,
  faEye,
  faEyeSlash,
  faTimes,
  faTimesCircle,
  faCheck,
  faCheckCircle,
  faMinus,
  faMinusSquare,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFolder as faFolderRegular,
  faEye as faEyeRegular,
  faEyeSlash as faEyeSlashRegular,
  faTimesCircle as faTimesCircleRegular,
  faCheckCircle as faCheckCircleRegular,
  faMinusSquare as faMinusSquareRegular,
  faEdit as faEditRegular,
} from "@fortawesome/free-regular-svg-icons";

function App({ Component, pageProps }: AppProps) {
  library.add(
    fab,
    faBatteryThreeQuarters,
    faFolder,
    faFolderRegular,
    faCaretLeft,
    faCaretRight,
    faCaretUp,
    faCaretDown,
    faSpinner,
    faCircleNotch,
    faPlus,
    faSync,
    faSearch,
    faEye,
    faEyeRegular,
    faEyeSlash,
    faEyeSlashRegular,
    faTimes,
    faTimesCircle,
    faTimesCircleRegular,
    faCheck,
    faCheckCircle,
    faCheckCircleRegular,
    faMinus,
    faMinusSquare,
    faMinusSquareRegular,
    faEdit,
    faEditRegular
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
