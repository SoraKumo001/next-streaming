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
    <div className="news">
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
