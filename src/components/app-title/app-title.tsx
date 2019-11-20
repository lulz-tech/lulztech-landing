import * as React from "react";

import "./app-title.styles.scss";

interface IAppTitleProps {
    title?: string;
}

const AppTitle: React.FC<IAppTitleProps> = ({ title }) => (
    <header className="App-header">
        <h1 className="App-title">{title || "💦 Lulz tech 💦"}</h1>
    </header>
);

export default React.memo(AppTitle);
