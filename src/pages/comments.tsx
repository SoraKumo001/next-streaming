import { SuspenseType } from "@react-libraries/suspense-loader";
import { useRouter } from "next/router";
import { Comments } from "src/components/Comments";

const titles = { csr: "CSR", ssr: "SSR", streaming: "SSR Streaming" };

const PageStreaming = () => {
  const router = useRouter();
  const { wait, type, id } = router.query;
  return (
    <Comments id={Number(id)} wait={Number(wait)} type={type as SuspenseType} />
  );
};
export default PageStreaming;
