import {
  SuspenseLoader,
  SuspenseType,
  useSuspenseData,
} from "@react-libraries/suspense-loader";
import { storyLoader } from "src/libs/loader";
import { Spinner } from "./Spinner";
import { Story } from "./Story";

export const NewsContents = ({
  wait,
  type,
}: {
  wait: number;
  type: SuspenseType;
}) => {
  const storyIds = useSuspenseData<number[]>();
  return (
    <>
      {storyIds.slice(0, 30).map((id) => {
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
