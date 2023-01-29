import React from "react";

export const UserContext = React.createContext({
    name: 'Div'
});

export default function App() {
    return(
        <>
            <UserContext.Provider value={
                { name: 'Alan'}
            }>
                <User/>
            </UserContext.Provider>
        </>
    )
};

function User(){
    return (
        <>
            <UserContext.Consumer>
                {value => 
                    <h1>{value.name}</h1>
                }
            </UserContext.Consumer>
        </>
    )
};

//With useContext Hook--------(consume)

// function User(){
//     const value = React.useContext(UserContext);

//     return (
//         <>
//             <h1>{value.name}</h1>
//         </>
//     )
// }

