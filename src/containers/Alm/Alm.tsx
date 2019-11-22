import * as React from "react";

import AppTitle from "../../components/app-title/app-title";

interface IAlmProps { }

interface IAlmState { }

export class Alm extends React.Component<IAlmProps, IAlmState> {

  public render() {
    return (
      <AppTitle title="Alm" />
    );
  }
}
