import Link from "next/link";
import News from "../components/News";
import { Header } from "../components/Header";

const PageStreaming = () => {
  return (
    <News wait={500} type="streaming" title="SSR Streaming with API Delays" />
  );
};
export default PageStreaming;
