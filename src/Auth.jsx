import { useState } from "react";
import pb from "./lib/pocketbase";
import { useForm } from "react-hook-form";


export default function Auth(){
    const [isLoading, setLoading] = useState(false);
    const { register, handleSubmit} = useForm();
    const [dummy, setDummy] = useState(0);
    const isLoggedIn = pb.authStore.isValid;
    async function login(data){
        setLoading(true);
        try{
        const authData = await pb.collection('users').authWithPassword(data.email, data.password);
        console.log(data)
        }catch(e){
            alert(e)
        }
        setLoading(false);
    }
    function logout(){
        pb.authStore.clear();
        setDummy(Math.random())
    }
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