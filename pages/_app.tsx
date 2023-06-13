import type { AppProps } from "next/app";
import "../styles/css/style.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
