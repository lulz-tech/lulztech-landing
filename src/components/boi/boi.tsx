import * as React from "react";

import boi from "../../assets/images/boiiiii.png";
import cat from "../../assets/images/cat.png";
import man from "../../assets/images/man.png";

import "./boi.styles.css";
interface IBoiProps { }

interface IBoiState {
    currentPic: string;
}

export class Boi extends React.Component<IBoiProps, IBoiState> {
    constructor(props: IBoiProps) {
        super(props);

        const rand = Math.random();

        const currentPic = rand > 0.7 ? cat : man;
        this.state = {
            currentPic
        };
    }

    public render() {
        const { currentPic } = this.state;
        return (
            <div id="boi-background">
                <img className="cat" src={currentPic}></img>
                <img className="boi" src={boi}></img>
            </div>
        );
    }
}