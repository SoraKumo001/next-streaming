import { useState } from "react";
import {
  useSuspenseData,
  useSuspenseDispatch,
} from "@react-libraries/suspense-loader";
import Link from "next/link";
import { timeAgo } from "../libs/timeago";

export const Story = () => {
  const { id, title, time, url, by, score, descendants } = useSuspenseData<{
    id: number;
    title: string;
    time: number;
    url: string;
    by: String;
    score: number;
    descendants: number;
  }>();
  const dispatch = useSuspenseDispatch();
  const { host } = url ? new URL(url) : { host: "#" };
  const [voted, setVoted] = useState(false);
  return (
    <div style={{ margin: "8px 0" }}>
      <style jsx>{`
        .title {
          font-size: 15px;
          margin-bottom: 3px;
        }
        .title > a {
          color: #000;
          text-decoration: none;
        }
        .title > a:visited {
          color: #828282;
        }
        .meta {
          font-size: 12px;
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
        .source a:hover,
        .meta a:hover {
          text-decoration: underline;
        }
        .item-skeleton {
          margin: 5px 0;
          overflow: hidden;
        }
        .item-skeleton:before,
        .item-skeleton:after {
          content: "";
          display: block;
          width: 350px;
          max-width: 100%;
          height: 16px;
          background: #eee;
          margin: 6px 0 2px;
          background-image: linear-gradient(270deg, #ccc, #eee, #eee, #ccc);
          background-size: 400% 100%;
          animation: highlight-rotating 8s ease infinite;
        }
        .item-skeleton:after {
          width: 250px;
          height: 10px;
          margin: 5px 0;
        }
        @keyframes highlight-rotating {
          from {
            background-position: 200% 0;
          }
          to {
            background-position: -200% 0;
          }
        }
      `}</style>
      <div className="title">
        <span
          style={{
            cursor: "pointer",
            fontFamily: "sans-serif",
            marginRight: 5,
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
        <Link href={`/item?id=${id}`}>
          <a>
            {descendants} comment{descendants ? "s" : ""}
          </a>
        </Link>{" "}
        |{" "}
        <a
          style={{
            background: "lightGray",
            borderRadius: "4px",
            cursor: "pointer",
          }}
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
