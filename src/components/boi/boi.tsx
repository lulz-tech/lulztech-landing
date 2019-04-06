import * as React from "react";

import boi from "../../assets/images/boiiiii.png";
import cat from "../../assets/images/cat.png";
import house from "../../assets/images/house.png";
import man from "../../assets/images/man.png";
import minecraft from "../../assets/images/minecraft.png";


import { randomBetween } from 'src/utils/utils';

import "./boi.styles.css";

interface IBoiState {
    currentPic: string;
}

export class Boi extends React.Component<{}, IBoiState> {
    constructor(props: {}) {
        super(props);

        this.initRandomPic();
    }

    private initRandomPic = () => {
        const pics = [cat, house, man, minecraft];
        const currentPic = pics[randomBetween(0, pics.length - 1)];

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