import { SuspenseType } from "@react-libraries/suspense-loader";
import { useRouter } from "next/router";
import { NewsContainer } from "../components/NewsContainer";

const titles = { csr: "CSR", ssr: "SSR", streaming: "SSR Streaming" };

const PageStreaming = () => {
  const router = useRouter();
  const { wait, type, page } = router.query;
  return (
    <NewsContainer
      wait={Number(wait)}
      type={type as SuspenseType}
      page={Number(page || 0)}
      title={`${titles[type as SuspenseType]}${
        Number(wait) ? ` + ${wait}ms delay` : ""
      }`}
    />
  );
};
export default PageStreaming;
