import * as React from "react";

import { Link } from "react-router-dom";

import { AppTitle } from "../..//components/app-title/app-title";
import { Boi } from "../../components/boi/boi";

import "./NotFound.styles.css";

export class NotFound extends React.PureComponent {

    public render() {
        return (
            <>
                <Boi />
                <AppTitle title="Такой страницы нет 😵" />
                <Link className="not-found__link" to="/">На главную</Link>
            </>
        );
    }
}