import { SuspenseType } from "@react-libraries/suspense-loader";
import { useRouter } from "next/router";
import { Item } from "src/components/Item";
import { NewsContainer } from "../components/NewsContainer";

const titles = { csr: "CSR", ssr: "SSR", streaming: "SSR Streaming" };

const PageStreaming = () => {
  const router = useRouter();
  const { wait, type, id } = router.query;
  return (
    <Item id={Number(id)} wait={Number(wait)} type={type as SuspenseType} />
  );
};
export default PageStreaming;
