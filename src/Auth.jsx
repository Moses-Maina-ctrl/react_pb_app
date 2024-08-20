/* eslint-disable no-unused-vars */
import { useState } from "react";
import pb from "./lib/pocketbase";
import { useForm } from "react-hook-form";
import useLogout from "./hooks/useLogout";
import useLogin from "./hooks/useLogin";


export default function Auth(){
    const logout = useLogout();
    const login = useLogin();
    const [isLoading, setLoading] = useState(false);
    const { register, handleSubmit } = useForm();
    const isLoggedIn = pb.authStore.isValid;

    if (isLoggedIn){
        return(
        <>
            <h1>Logged In: {pb.authStore.model.email}</h1>
          <button  onClick={logout}>Logout</button>
        </>
    );}
    return(
    <>
    {isLoading && <p>Loading...</p>}
    <h1>
        Please Login </h1>
        <form onSubmit={handleSubmit(login)}>
            <input type="text" placeholder="email" {...register("email")}/>
            <input type="password" placeholder="password" {...register("password")}/>

            <button type="submit" disabled ={isLoading}>{isLoading ? "Loading":"Login"}</button>
        </form>
    
    </>
    )
}