import * as React from "react";

import AppIntro from "../../components/app-intro/app-intro";
import AppTitle from "../../components/app-title/app-title";

interface IHomeProps { }

interface IHomeState { }

export class Home extends React.Component<IHomeProps, IHomeState> {

  public render() {
    return (
      <>
        <AppTitle />
        <AppIntro />
      </>
    );
  }
}
