import * as React from "react";

import { AppTitle } from "../../components/app-title/app-title";
import { Boi } from "../../components/boi/boi";

interface IAlmProps { }

interface IAlmState { }

export class Alm extends React.Component<IAlmProps, IAlmState> {

    public render() {
        return (
            <>
                <Boi defaultPic={undefined} />

                <AppTitle title="Alm" />
            </>
        );
    }
}