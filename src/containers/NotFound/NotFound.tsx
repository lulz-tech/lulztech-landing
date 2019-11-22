import * as React from "react";

import AppTitle from "../..//components/app-title/app-title";

import "./NotFound.styles.scss";

export class NotFound extends React.PureComponent {

  public render() {
    return (
      <AppTitle title="Такой страницы нет 😵" />
    );
  }
}
