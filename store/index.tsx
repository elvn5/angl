import React from "react";
import {INITIAL_STATE} from './initialState';
import {combineReducers} from '../utils';
import {userReducer} from "./user/reducer";


const Context = React.createContext({});
const combinedReducers = combineReducers({
    userReducer:userReducer
});

function ContextProvider({children}:any):JSX.Element {
    const [state, dispatch] = React.useReducer(combinedReducers, INITIAL_STATE);
    const context = React.useMemo(() => [state, dispatch], [state, dispatch]);

    return (<Context.Provider value={context}>{children}</Context.Provider>)
}

// eslint-disable-next-line no-unused-vars
function connectContext<P>(Component:React.FC<P>, select?: any) {
    return (props: any) => {
        // @ts-ignore
        const [store, dispatch] = React.useContext(Context)
        const data = {...(select ? select(store) : {})}
        return React.useMemo(
            () => (<Component {...data} {...props} dispatch={dispatch}
        />),
            [JSON.stringify(data), JSON.stringify(props)],
    );
    };
}

export {Context, ContextProvider, connectContext};
