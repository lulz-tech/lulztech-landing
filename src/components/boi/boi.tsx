import * as React from "react";

import boi from "../../assets/images/boiiiii.png";
import cat from "../../assets/images/cat.png";
import house from "../../assets/images/house.png";
import man from "../../assets/images/man.png";
import minecraft from "../../assets/images/minecraft.png";

import { randomBetween } from "../../utils/utils";

import "./boi.styles.scss";

enum Pic {
    cat = "cat",
    house = "house",
    man = "man",
    minecraft = "minecraft"
}

const pics: Array<{ picName: Pic, pic: string }> = [
    { picName: Pic.cat, pic: cat },
    { picName: Pic.house, pic: house },
    { picName: Pic.man, pic: man },
    { picName: Pic.minecraft, pic: minecraft },
]

interface IBoiProps {
    defaultPic?: Pic;
}

interface IBoiState {
    currentPic: string;
}

export class Boi extends React.Component<IBoiProps, IBoiState> {
    constructor(props: IBoiProps) {
        super(props);

        this.initRandomPic(this.props.defaultPic);
    }

    private initRandomPic = (defaultPic?: Pic) => {
        const currentPic = defaultPic ? pics[defaultPic].pic : pics[randomBetween(0, pics.length)].pic;

        this.state = {
            currentPic
        };
    }

    public render() {
        const { currentPic } = this.state;
        return (
            <div id="boi-background">
                <img className="cat" alt="cat" src={currentPic}></img>
                <img className="boi" alt="boi" src={boi}></img>
            </div>
        );
    }
}