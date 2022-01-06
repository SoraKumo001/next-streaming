import Link from "next/link";
import News from "../components/News";
import { Header } from "../components/Header";

const PageStreaming = () => {
  return <News wait={0} type="streaming" title="SSR Streaming" />;
};
export default PageStreaming;
