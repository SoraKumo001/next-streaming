import { useState } from "react";
import {
  useSuspenseData,
  useSuspenseDispatch,
} from "@react-libraries/suspense-loader";

export const Story = () => {
  const { id, title, date, url, user, score, commentsCount } = useSuspenseData<{
    id: number;
    title: string;
    date: string;
    url: string;
    user: String;
    score: number;
    commentsCount: number;
  }>();
  const dispatch = useSuspenseDispatch();
  const { host } = url ? new URL(url) : { host: "#" };
  const [voted, setVoted] = useState(false);
  return (
    <div style={{ margin: "8px 0" }}>
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
        {score} {plural(score, "point")} by{" "}
        <a href={`/user?id=${user}`}>{user}</a>{" "}
        <a href={`/item?id=${id}`}>{date}</a> |{" "}
        <a href={`/item?id=${id}`}>
          {commentsCount} {plural(commentsCount, "comment")}
        </a>{" "}
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
const plural = (n: number, s: string) => s + (n === 0 || n > 1 ? "s" : "");
