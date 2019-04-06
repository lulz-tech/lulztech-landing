import * as React from "react";

import "./app-title.styles.css";

interface IAppTitleProps {
    title?: string;
}

export class AppTitle extends React.PureComponent<IAppTitleProps> {
    public render() {
        return (
            <header className="App-header">
                <h1 className="App-title">{this.props.title || "Memster"}</h1>
            </header>
        );
    }
}   