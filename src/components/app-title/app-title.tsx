import * as React from "react";

import "./app-title.styles.css";

export class AppTitle extends React.PureComponent {
    public render() {
        return (
            <header className="App-header">
                <h1 className="App-title">Memster</h1>
            </header>
        );
    }
}   