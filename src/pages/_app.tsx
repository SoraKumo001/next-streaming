import { AppContext, AppProps } from "next/app";
import React from "react";
import {
  getDataFromTree,
  setSuspenseTreeContext,
  SuspenseTreeContextType,
} from "@react-libraries/suspense-loader";

const App = (props: AppProps & { context: SuspenseTreeContextType }) => {
  const { Component, context } = props;
  setSuspenseTreeContext(context);
  return <Component />;
};

App.getInitialProps = async ({ Component, router, AppTree }: AppContext) => {
  const context = await getDataFromTree(
    <AppTree Component={Component} pageProps={{}} router={router} />,
    1400
  );
  return { context };
};
export default App;
