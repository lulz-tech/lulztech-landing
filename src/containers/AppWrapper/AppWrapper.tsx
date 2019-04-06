import * as React from "react";

import "./AppWrapper.styles.css";

interface IAppWrapperProps { }

interface IAppWrapperState { }

export class AppWrapper extends React.Component<IAppWrapperProps, IAppWrapperState> {

    public render() {
        return (
            <div className="wrapper">
            <div className="background"></div>
                <div className="App">
                    {this.props.children}
                </div>
            </div>
        );
    }
}