import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

const Home = () => (

    export const SignUp = () => {
        const { store, actions } = useContext(Context);

	return (

    <form>
    <div class="mb-3">
        <label for="inputEmail" className="form-label">Email address</label>
        <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
        <label for="inputPassword" class="form-label">Password</label>
        <input type="password" class="form-control" id="inputPassword" />
     </div>
    
    <button type="submit" className="btn btn-primary">Sign up</button>
    </form>


    );
};