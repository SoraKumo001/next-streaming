import { lazy, Suspense } from "react";
const Weather = lazy(() => import("../components/Weather"));
const Page = () => {
  return (
    <Suspense fallback={"待機中"}>
      <Weather />
    </Suspense>
  );
};
export default Page;
