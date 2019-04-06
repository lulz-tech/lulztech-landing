import * as React from "react";

import YoutubeBackground from "react-youtube-background"

import "./AppWrapper.styles.css";

interface IAppWrapperProps { }

interface IAppWrapperState { }

export class AppWrapper extends React.Component<IAppWrapperProps, IAppWrapperState> {
    private aspectRatio: string;

    constructor(props: IAppWrapperProps) {
        super(props);

        this.setAspectRatio();
    }

    private setAspectRatio = () => {
        let aspectRatio: string;
        if (window.outerHeight > window.outerWidth) {
            aspectRatio = "16:9"
        } else {
            const aspectRatioNumber = window.outerWidth / window.outerHeight;
            aspectRatio = `${window.outerWidth * aspectRatioNumber}:${window.outerHeight * aspectRatioNumber}`;
        }

        this.aspectRatio = aspectRatio;
    }

    public render() {

        return (
            <div className="wrapper">
                <YoutubeBackground
                    videoId={"4UzZk6wCeQM"}
                    overlay={"rgba(0,0,0,0.8)"}       // defaults -> null | e.g. "rgba(0,0,0,.4)"
                    className={"background-video"}   // defaults -> null
                    aspectRatio={this.aspectRatio}
                // onReady={func}       // defaults -> null

                >
                    <div className="App">
                        {this.props.children}
                    </div>
                </YoutubeBackground>
            </div>
        );
    }
}