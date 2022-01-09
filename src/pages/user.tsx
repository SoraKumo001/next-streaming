import { SuspenseType } from "@react-libraries/suspense-loader";
import { useRouter } from "next/router";
import { User } from "../components/User";

const PageStreaming = () => {
  const router = useRouter();
  const { wait, type, id } = router.query;
  return (
    <User id={id as string} wait={Number(wait)} type={type as SuspenseType} />
  );
};
export default PageStreaming;
