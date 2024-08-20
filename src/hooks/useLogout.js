import pb from "../lib/pocketbase";
import { useState } from "react";

export default function useLogout(){
    // eslint-disable-next-line no-unused-vars
    const [dummy, setDummy] = useState(0);

    function logout(){
        pb.authStore.clear();
        setDummy(Math.random());
    }
    return logout;
    
}
