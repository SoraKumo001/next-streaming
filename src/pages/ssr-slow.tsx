import { NewsContainer } from "../components/NewsContainer";

const PageStreaming = () => {
  return <NewsContainer wait={500} type="ssr" title="Hybrid SSR with API Delays" />;
};
export default PageStreaming;
