import React from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { userRegister } from "../../redux/actions"

export default function RegisterForm () {

    const dispatch = useDispatch()

    const [input, setInput] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        city: "",
        telephone: ""
    })

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit () {
        dispatch(userRegister(input))
    }

    return (
        <div>
            <div>
                <label>Nombre</label>
                <input type="text" name="first_name" value={input.first_name} onChange={(e) => handleChange(e)}></input>
            </div>
            <div>
                <label>Apellido</label>
                <input type="text" name="last_name" value={input.last_name} onChange={(e) => handleChange(e)}></input>
            </div>
            <div>
                <label>Email</label>
                <input type="text" name="email" value={input.email} onChange={(e) => handleChange(e)}></input>
            </div>
            <div>
                <label>Contraseña</label>
                <input type="text" name="password" value={input.password} onChange={(e) => handleChange(e)}></input>
            </div>
            <div>
                <label>Ciudad</label>
                <input type="text" name="city" value={input.city} onChange={(e) => handleChange(e)}></input>
            </div>
            <div>
                <label>Telefono</label>
                <input type="text" name="telephone" value={input.telephone} onChange={(e) => handleChange(e)}></input>
            </div>
            <div>
                <button onClick={handleSubmit}>Registrarse</button>
            </div>
        </div>
    )
}