import {
  SuspenseLoader,
  SuspenseType,
  useSuspenseData,
} from "@react-libraries/suspense-loader";
import Link from "next/link";
import { storyLoader } from "src/libs/loader";
import { Spinner } from "./Spinner";
import { Story } from "./Story";

const pageSize = 30;

export const News = ({
  wait,
  type,
  page,
}: {
  wait: number;
  type: SuspenseType;
  page: number;
}) => {
  const storyIds = useSuspenseData<number[]>();
  const maxPage = Math.floor(storyIds.length / pageSize);
  return (
    <>
      <div>
        <Link
          href={`/news?type=${type}&wait=${wait}&page=${Math.max(page - 1, 0)}`}
        >
          [Previous]
        </Link>
        <Link
          href={`/news?type=${type}&wait=${wait}&page=${Math.min(
            page + 1,
            maxPage
          )}`}
        >
          [Next]
        </Link>
        {page}/{maxPage}
      </div>
      {storyIds.slice(page * pageSize, (page + 1) * pageSize).map((id) => {
        return (
          <div key={id} className="box">
            <SuspenseLoader
              name={`News/${id}`}
              loader={storyLoader}
              loaderValue={{ id, wait }}
              fallback={<Spinner />}
              onLoaded={() => console.log(`Loading complete(${id})`)}
              type={type}
            >
              <Story wait={wait} type={type} />
            </SuspenseLoader>
          </div>
        );
      })}
    </>
  );
};
