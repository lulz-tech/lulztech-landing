import * as React from "react";

import boi from "../../assets/images/boiiiii.png";
import cat from "../../assets/images/cat.png";
import house from "../../assets/images/house.png";
import man from "../../assets/images/man.png";

import "./boi.styles.css";
interface IBoiProps { }

interface IBoiState {
    currentPic: string;
}

export class Boi extends React.Component<IBoiProps, IBoiState> {
    constructor(props: IBoiProps) {
        super(props);

        this.initRandomPic();
    }

    private initRandomPic = () => {
        const rand = Math.random();

        let currentPic: string = "";

        if (rand > 0 && rand < 0.4) {
            currentPic = cat;
        } else if (rand > 0.4 && rand < 0.8) {
            currentPic = man;
        } else if (rand > 0.8 && rand < 1) {
            currentPic = house;
        }

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