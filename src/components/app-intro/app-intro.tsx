import * as React from "react";

import "./app-intro.styles.css";

interface IAppIntroState { }

export class AppIntro extends React.PureComponent<{}, IAppIntroState> {

    public render() {
        return (
            <div className="App-intro">
                <p className="about"> Давай, пробуй </p>
                <a target="__blank" href="https://t.me/memser_bot">Тыц</a>
            </div>
        );
    }
}