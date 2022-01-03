import Link from "next/link";
import News from "../components/News";
import { Page } from "../components/Page";

const PageStreaming = () => {
  return (
    <Page>
      <div>
        <Link href="/">⬅️</Link> SSR Streaming
      </div>
      <News wait={0} type="streaming" />
    </Page>
  );
};
export default PageStreaming;
