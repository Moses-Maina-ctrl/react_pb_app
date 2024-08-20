/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useForm } from "react-hook-form";
import pb from "../lib/pocketbase";

export default function useLogin(){

    const [loading, setLoading] = useState(false);
    const {reset} = useForm();
    async function login(data){
        setLoading(true);
        try{
        const authData = await pb.collection('users').authWithPassword(data.email, data.password);
        console.log(data)
        }catch(e){
            alert(e)
        }
        setLoading(false);
        reset();
    }

    return login;
}