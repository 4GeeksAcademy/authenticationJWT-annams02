import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const SignUp = () => {
        const { store, actions } = useContext(Context);
        const [inputEmail, setInputEmail] = useState ("");
        const [inputPassword, setInputPassword] = useState ("");

        const controlarInputEmail = (e) => {
            setInputEmail(e.target.value) 
        }

        const controlarInputPassword = (e) => {
            setInputPassword(e.target.value) 
        }


        const handleSubmit = (e) => {
            /// si esta vacio no reg nada.... controlar lo que no sea tipo email / @ ...
            signUp(inputEmail,inputPassword);
            e.preventDefault ();

        }

        const signUp = async (username, password) => {
            const resp = await fetch(`https://your_api.com/signup`, { 
                 method: "POST",
                 headers: { "Content-Type": "application/json" },
                 body: JSON.stringify({ username, password }) 
            })
       
            if(!resp.ok) throw Error("There was a problem in the signup request")
            

            const data = await resp.json()
            return data
       }


	return (

    <form onSubmit = {handleSubmit}>
    <div className="mb-3">
        <label htmlFor="inputEmail" className="form-label">Email address</label>
        <input type="email" className="form-control" id="inputEmail" value={inputEmail} onChange={controlarInputEmail} aria-describedby="emailHelp" />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
        <label htmlFor="inputPassword" className="form-label">Password</label>
        <input type="password" className="form-control" id="inputPassword" value={inputPassword} onChange={controlarInputPassword} />
     </div>
    
    <button type="submit" className="btn btn-primary">Sign up</button>
    </form>


    );
};