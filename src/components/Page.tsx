import { FC } from "react";
import { Meta } from "./Meta";

export const Page: FC = ({ children }) => {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
    .main {
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
  `,
        }}
      />
      <div className="main">
        <Meta />
        <div className="page">{children}</div>
      </div>
    </>
  );
};
