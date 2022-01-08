import Head from "next/head";
import { FC } from "react";

export const Page: FC = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <style jsx global>
          {`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
  background: #eee;
}
`}
        </style>
      </Head>

      <style jsx>{`
        .root {
          width: 85%;
          margin: auto;
          padding: 10px 0 0 0;
        }

        .page {
          margin-top: 16px;
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
      `}</style>
      <div className="root">
        <div className="info">
          <p>
            Immediately after switching the page, it will work with CSR. <br />
            Please reload your browser to see how it works.
          </p>
          <p>
            Source:
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/SoraKumo001/next-streaming"
            >
              https://github.com/SoraKumo001/next-streaming
            </a>
          </p>
        </div>
        <div className="page">{children}</div>
      </div>
    </>
  );
};
