import { Route, Switch } from "react-router-dom"
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Home from "../Pages/Home";
import { useState } from "react";
import { useEffect } from "react";

const Routes = () => {

    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("@KenzieHub:Token"));
        if (token) {
            setAuthenticated(true);
        }

    }, [authenticated])

    return (
        <Switch>
            <Route exact path="/">
                <Login authenticated={authenticated} setAuthenticated={setAuthenticated}/> 
            </Route>
            <Route exact path="/signup">
                <SignUp authenticated={authenticated}/>
            </Route>
            <Route exact path="/home">
                <Home authenticated={authenticated} setAuthenticated={setAuthenticated}/>
            </Route>
        </Switch>
    )
}

export default Routes;