import * as React from "react";

import AppTitle from "../../components/app-title/app-title";

interface IUncleFedorProps { }

interface IUncleFedorState { }

export class UncleFedor extends React.Component<IUncleFedorProps, IUncleFedorState> {

  public render() {
    return (
      <AppTitle title={"uncleFedor"} />
    );
  }
}
