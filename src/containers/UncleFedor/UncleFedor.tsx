import * as React from "react";

import { AppTitle } from "src/components/app-title/app-title";
import { Boi } from "src/components/boi/boi";

interface IUncleFedorProps { }

interface IUncleFedorState { }

export class UncleFedor extends React.Component<IUncleFedorProps, IUncleFedorState> {

    public render() {
        return (
            <>
                <Boi defaultPic={undefined} />
                <AppTitle title={"uncleFedor"} />
            </>
        );
    }
}