import pb from "./lib/pocketbase";

export default function Auth(){
    return(
    <>
    <h1>
        Logged In: {pb.authStore.isValid.toString()};
        <form>
            <input type="text" placeholder="email"/>
            <input type="password" placeholder="password"/>

            <button type="submit">Login</button>
        </form>
    </h1>
    </>
    )
}