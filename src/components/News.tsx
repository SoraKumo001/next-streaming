import { useRef } from "react";
import { NewsWithData } from "../components/NewsWithData";
import {
  SuspenseDispatch,
  SuspenseLoader,
  SuspenseType,
  useSuspenseData,
} from "@react-libraries/suspense-loader";
import { loader } from "../libs/loader";
import { Spinner } from "../components/Spinner";
import Link from "next/link";

const News = ({
  wait,
  type,
  title,
}: {
  wait: number;
  type: SuspenseType;
  title: string;
}) => {
  const dispatch = useRef<SuspenseDispatch>();
  return (
    <>
      <div>
        <Link href="/">⬅️</Link> {title}
      </div>
      <div>
        <button
          onClick={() => {
            location.reload();
          }}
        >
          Reload(Browser)
        </button>{" "}
        <button
          onClick={() => {
            dispatch.current!();
          }}
        >
          Reload(CSR)
        </button>
      </div>
      <hr />
      <SuspenseLoader
        dispatch={dispatch} //Dispatch for reloading
        name="news" //Name the SSR transfer data.
        loader={loader} //A loader that returns a Promise
        loaderValue={{ type: "topstories", wait }} //Parameters to be passed to the loader (can be omitted if not needed)
        fallback={<Spinner />} //Components to be displayed while loading
        onLoaded={() => console.log("Loading complete")} //Events that occur after loading is complete
        type={type}
      >
        <NewsWithData wait={wait} type={type} />
      </SuspenseLoader>
    </>
  );
};
export default News;
