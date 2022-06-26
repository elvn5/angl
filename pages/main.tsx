import React from "react";
import {connectContext} from "../store";

const Main:React.FC<any> = ({title="Hello", myName}) =>{
    return(
        <div>
            <h1>{title} {myName}</h1>
        </div>
    )
}

export default  connectContext<any>(Main, (state: { myName: any; })=>state);
