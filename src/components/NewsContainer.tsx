import { useRef } from "react";
import {
  SuspenseDispatch,
  SuspenseLoader,
  SuspenseType,
  useSuspenseData,
} from "@react-libraries/suspense-loader";
import { loader } from "../libs/loader";
import { Spinner } from "./Spinner";
import Link from "next/link";
import { Story } from "./Story";
import { NewsContents } from "./News";

export const NewsContainer = ({
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
      <style jsx>{`
        .top {
          margin: 16px 0;
        }
      `}</style>
      <div className="top">
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
        <NewsContents wait={wait} type={type} />
      </SuspenseLoader>
    </>
  );
};
