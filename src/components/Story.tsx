import { useState } from "react";
import {
  SuspenseType,
  useSuspenseData,
  useSuspenseDispatch,
} from "@react-libraries/suspense-loader";
import Link from "next/link";
import { timeAgo } from "../libs/timeago";
import { StoryType } from "src/libs/loader";

export const Story = ({ wait, type }: { wait: number; type: SuspenseType }) => {
  const { id, title, time, url, by, score, descendants } =
    useSuspenseData<StoryType>();
  const dispatch = useSuspenseDispatch();
  const { host } = url ? new URL(url) : { host: "#" };
  const [voted, setVoted] = useState(false);
  return (
    <div className="root">
      <style jsx>{`
        .root {
          height: 64px;
          background: mintcream;
          padding: 8px;
          border-radius: 4px;
        }
        .title {
          font-size: 15px;
          margin-bottom: 3px;
        }
        .vote {
          cursor: pointer;
          font-family: sans-serif;
          margin-right: 5px;
        }
        .source {
          font-size: 12px;
          display: inline-block;
          margin-left: 5px;
        }
        .source a,
        .meta a {
          color: #828282;
          text-decoration: none;
        }
        a.reload {
          font-size: 12px;
          padding: 2px;
          background: lightGray;
          border-radius: 4px;
          cursor: pointer;
        }
      `}</style>
      <div className="title">
        <span
          className="vote"
          style={{
            color: voted ? "#ffa52a" : "#ccc",
          }}
          onClick={() => setVoted(!voted)}
        >
          &#9650;
        </span>
        <a href={url}>{title}</a>
        {url && (
          <span className="source">
            <a href={`http://${host}`}>{host.replace(/^www\./, "")}</a>
          </span>
        )}
      </div>
      <div className="meta">
        {score} point{score ? "s" : ""} by{" "}
        <Link href={`/user?id=${by}`}>
          <a>{by}</a>
        </Link>{" "}
        {timeAgo(time * 1000)} |{" "}
        <Link href={`/comments?id=${id}&wait=${wait}&type=${type}`}>
          <a>
            {descendants} comment{descendants ? "s" : ""}
          </a>
        </Link>{" "}
        |{" "}
        <a
          className="reload"
          onClick={() => {
            dispatch();
          }}
        >
          Reload
        </a>
      </div>
    </div>
  );
};
