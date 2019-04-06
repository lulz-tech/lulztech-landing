import * as React from "react";

import { randomBetween } from "../../utils/utils";
import "./app-intro.styles.css";

const aboutTexts = ["Давай, пробуй", "Не хочешь немного мемов?", "Илитные мемы от бота"];

interface IAppIntroState { }

export class AppIntro extends React.PureComponent<{}, IAppIntroState> {

    public render() {
        const randomTextIndex = randomBetween(0, aboutTexts.length);
        return (
            <div className="App-intro">
                <p className="about">{aboutTexts[randomTextIndex]}</p>
                <a target="__blank" href="https://t.me/memser_bot">Тыц</a>
            </div>
        );
    }
}