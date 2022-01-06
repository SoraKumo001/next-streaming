import { FC } from "react";
import Head from "next/head";

export const Header: FC = ({ children }) => {
  return (
    <>
      <style jsx>{`
        .root {
          width: 85%;
          margin: auto;
          padding: 10px 0 0 0;
        }

        .page {
          color: #828282;
          background: #fff;
          padding: 3px 10px;
        }
        @media (max-width: 750px) {
          .main {
            padding: 0;
            width: auto;
          }
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
          background: #eee;
        }
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
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
      <div className="root">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          {/* <link rel="shortcut icon" href="/static/favicon.ico" /> */}
        </Head>
        <div className="page">{children}</div>
      </div>
    </>
  );
};
