
import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { Link, useNavigate } from 'react-router-dom';

export const login = () => {

    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    console.log(store.email)
    console.log(store.password)
   
    

    return (
        <>
            <div className='wrapper container mt-5'>
                <div className='row mt-5'>
                    <div className='form-header col'>
                        <h2>Please Login</h2>
                    </div>
                </div>

                <form onSubmit={(e) => {
                    e.preventDefault()
                    actions.fetchLogin()
                    e.target.reset()
                    
                    !store.token ? alert("Access denied. Go back.") : alert("You're logged") 
                    navigate("/private") 
                }}>
                <div className="mb-3 row mt-5 justify-content-center">
                    <div >
                        <label className="col-sm-2 form-label">Email:</label>
                    </div>
                    <div className="col-sm-10">
                        <input type="text" name="email" onChange={actions.handleChange} className="form-control input-style" placeholder="youremail@example.com" required></input>
                    </div>
                </div>

                <div className="mb-3 row mt-4 justify-content-center">
                    <div >
                        <label className="col-sm-2 col-form-label">Password:</label>
                    </div>
                    <div className="col-sm-10">
                        <input type="password" name="password" onChange={actions.handleChange} className="form-control input-style" placeholder="**********" ></input>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className='col-sm-10 mt-4'>
                        <button type='submit' className='submit-button btn btn-primary'>Login</button>
                    </div>
                </div>
                </form>


            </div>



        </>
    )
}

export const Login = () => {
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
    
    <button type="submit" className="btn btn-primary">Log in</button>
    </form>


    );
};