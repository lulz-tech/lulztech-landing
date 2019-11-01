import * as React from "react";

import { AppTitle } from "../..//components/app-title/app-title";
import { Boi } from "../../components/boi/boi";

import "./NotFound.styles.scss";

export class NotFound extends React.PureComponent {

    public render() {
        return (
            <>
                <Boi />
                <AppTitle title="Такой страницы нет 😵" />
                {/* <Link className="not-found__link" to="/">На главную</Link> */}
            </>
        );
    }
}