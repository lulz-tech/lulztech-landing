import * as React from "react";

import { randomBetween } from "../../utils/utils";
import "./app-intro.styles.scss";

import aboutTexts from "./app-intro.texts";

const ABOUT_LINK = "https://github.com/lulz-tech/";

interface IAppIntroState { }

export class AppIntro extends React.PureComponent<{}, IAppIntroState> {

    public render() {
        const randomTextIndex = randomBetween(0, aboutTexts.length);
        return (
            <div className="App-intro">
                <p className="about">{aboutTexts[randomTextIndex]}</p>
                <a target="__blank" href={ABOUT_LINK} title="Тыц">Тыц</a>
            </div>
        );
    }
}