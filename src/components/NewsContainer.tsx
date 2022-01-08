import { useRef } from "react";
import {
  SuspenseDispatch,
  SuspenseLoader,
  SuspenseType,
} from "@react-libraries/suspense-loader";
import { topLoader } from "../libs/loader";
import { Spinner } from "./Spinner";
import Link from "next/link";
import { NewsContents } from "./News";

interface Props {
  wait: number;
  type: SuspenseType;
  title: string;
}

export const NewsContainer = ({ wait, type, title }: Props) => {
  const dispatch = useRef<SuspenseDispatch>();
  return (
    <div className="root">
      <style jsx global>{`
        .top {
          margin: 16px 0;
        }
        .root :global(.box) {
          margin: 4px 0;
        }
        .root :global(news) {
          height: 64px;
        }
        .root :global(.title) {
          font-size: 15px;
          margin-bottom: 3px;
        }
        .root :global(.vote) {
          cursor: pointer;
          font-family: sans-serif;
          margin-right: 5px;
        }
        .root :global(.source) {
          font-size: 12px;
          display: inline-block;
          margin-left: 5px;
        }
        .root :global(.source a),
        .root :global(.meta a) {
          color: #828282;
          text-decoration: none;
        }
        .root :global(a.reload) {
          font-size: 12px;
          padding: 2px;
          background: lightGray;
          border-radius: 4px;
          cursor: pointer;
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
        loader={topLoader} //A loader that returns a Promise
        loaderValue={{ type: "topstories", wait }} //Parameters to be passed to the loader (can be omitted if not needed)
        fallback={<Spinner />} //Components to be displayed while loading
        onLoaded={() => console.log("Loading complete")} //Events that occur after loading is complete
        type={type}
      >
        <NewsContents wait={wait} type={type} />
      </SuspenseLoader>
    </div>
  );
};
