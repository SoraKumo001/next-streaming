import { AppContext, AppProps } from "next/app";
import React from "react";
import {
  getDataFromTree,
  setSuspenseTreeContext,
  SuspenseTreeContextType,
} from "@react-libraries/suspense-loader";
import { Page } from "../components/Page";

const timeoutSSR = 1400;

const App = (
  props: AppProps & { context: SuspenseTreeContextType; time?: string }
) => {
  const { Component, context, time } = props;
  setSuspenseTreeContext(context);
  return (
    <Page>
      <div>Last update: {time || ""}</div>
      <Component />
    </Page>
  );
};

App.getInitialProps = async ({ Component, router, AppTree }: AppContext) => {
  const context = await getDataFromTree(
    <AppTree Component={Component} pageProps={{}} router={router} />,
    timeoutSSR
  );
  return { context, time: new Date().toISOString() };
};
export default App;
