import Link from "next/link";
import News from "../components/News";
import { Header } from "../components/Header";

const PageStreaming = () => {
  return <News wait={500} type="ssr" title="SSR Streaming" />;
};
export default PageStreaming;
