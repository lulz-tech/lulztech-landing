import * as React from "react";

import boi from "../../assets/images/boiiiii.png";
import cat from "../../assets/images/cat.png";

import "./boi.styles.css";

interface IBoiProps { }

interface IBoiState { }

export class Boi extends React.Component<IBoiProps, IBoiState> {

    public render() {
        return (
            <div id="boi-background">
                <img className="cat" src={cat}></img>
                <img className="boi" src={boi}></img>
            </div>
        );
    }
}