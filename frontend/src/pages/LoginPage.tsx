import {FormEvent, useContext, useState} from "react"
import {AuthContext} from "../context/AuthProvider";
import "../styles/LoginPage.css"

export default function LoginPage() {

    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const {login} = useContext(AuthContext)

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        login({username: username, password: password})
    }

    return (
        <form className="login-page" onSubmit={onSubmit}>
            <h1>Log in to your Account</h1>
            <input type={"text"}
                   placeholder={"username"}
                   value={username}
                   onChange={(event) => setUsername(event.target.value)}/>
            <input type={"password"}
                   placeholder={"password"}
                   value={password}
                   onChange={(event) => setPassword(event.target.value)}/>
            <button className={"login-button"} type={"submit"}>Login</button>
        </form>
    )
}