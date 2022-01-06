import { loader } from "../libs/loader";
import { Story } from "./Story";
import {
  SuspenseLoader,
  SuspenseType,
  useSuspenseData,
} from "@react-libraries/suspense-loader";
import { Spinner } from "./Spinner";

export const NewsWithData = ({
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
          <SuspenseLoader
            key={id}
            name={`News/${id}`}
            loader={loader}
            loaderValue={{ type: `item/${id}`, wait }}
            fallback={<Spinner />}
            onLoaded={() => console.log(`Loading complete(${id})`)}
            type={type}
          >
            <Story />
          </SuspenseLoader>
        );
      })}
    </>
  );
};
