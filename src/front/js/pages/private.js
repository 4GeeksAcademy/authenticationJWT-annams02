import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Private = () => {
        const { store, actions } = useContext(Context);

	return (
        <button onclick=" ">Llévame a iniciar sesión</button>


    );
};