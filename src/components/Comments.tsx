import { SuspenseLoader, SuspenseType } from "@react-libraries/suspense-loader";
import Link from "next/link";
import { storyLoader } from "src/libs/loader";
import { timeAgo } from "src/libs/timeago";
import { Spinner } from "./Spinner";

export const Comments = ({
  id,
  wait,
  type,
}: {
  id: number;
  wait: number;
  type: SuspenseType;
}) => {
  return (
    <>
      <style jsx>{`
        .box {
          margin: 4px 0;
        }
        .name {
          font-weight: bold;
        }
        .comment {
          margin: 8px 0;
        }
        a.reload {
          margin-left: 8px;
          font-size: 12px;
          padding: 2px;
          background: lightGray;
          border-radius: 4px;
          cursor: pointer;
        }
      `}</style>

      <div key={id} className="box">
        <SuspenseLoader
          name={`News/${id}`}
          loader={storyLoader}
          loaderValue={{ id, wait }}
          fallback={
            <>
              <Link href={`/news?type=${type}&wait=${wait}`}>
                <a>⬅️</a>
              </Link>
              <Spinner />
            </>
          }
          onLoaded={() => console.log(`Loading complete(${id})`)}
          type={type}
        >
          {({ title, kids }) => (
            <>
              <Link href={`/news?type=${type}&wait=${wait}`}>
                <a>⬅️ {title}</a>
              </Link>
              {kids.slice(0, 5).map((id) => (
                <div key={id}>
                  <SuspenseLoader
                    name={`News/${id}`}
                    loader={storyLoader}
                    loaderValue={{ id, wait }}
                    fallback={<Spinner />}
                    onLoaded={() => console.log(`Loading complete(${id})`)}
                    type={type}
                  >
                    {({ by, text, time }, dispatch) => (
                      <>
                        <div className="comment">
                          <div>
                            <span className="name">{by} </span>
                            <span className="time">{timeAgo(time * 1000)}</span>
                            <a
                              className="reload"
                              onClick={() => {
                                dispatch();
                              }}
                            >
                              Reload
                            </a>
                          </div>
                          <div dangerouslySetInnerHTML={{ __html: text }} />
                        </div>
                        <hr />
                      </>
                    )}
                  </SuspenseLoader>
                </div>
              ))}
            </>
          )}
        </SuspenseLoader>
      </div>
    </>
  );
};
