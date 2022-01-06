import { NewsContainer } from "../components/NewsContainer";

const PageStreaming = () => {
  return (
    <NewsContainer wait={500} type="streaming" title="SSR Streaming with API Delays" />
  );
};
export default PageStreaming;
