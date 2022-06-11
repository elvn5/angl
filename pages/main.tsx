import React from "react";
import {MainPageProps} from "./types";
import {connectContext} from "../store";

const Main:React.FC<MainPageProps> = ({title="Hello", myName}) =>{
    return(
        <div>
            <h1>{title} {myName}</h1>
        </div>
    )
}

export const MainPage = connectContext<MainPageProps>(Main, (state: { myName: any; })=>state);
