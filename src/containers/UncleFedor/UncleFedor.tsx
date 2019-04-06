import * as React from "react";

import { AppTitle } from "../../components/app-title/app-title";
import { Boi } from "../../components/boi/boi";

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