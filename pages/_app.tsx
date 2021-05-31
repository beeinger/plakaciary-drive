import "./index.css";

import React, { ReactElement } from "react";

interface MyAppProps {
  Component: any;
  pageProps: any;
}

function MyApp({ Component, pageProps }: MyAppProps): ReactElement {
  return <Component {...pageProps} />;
}

export default MyApp;
