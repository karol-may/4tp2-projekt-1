import { useState } from "react";
import type { UserType } from "./Users";
import { neon } from "../lib/neon";

function UserNew(){
  

    let [errors, setErrors] = useState("");
     let [formData,setFormData] = useState<UserType>({
        id: undefined,
        name: "",
        surname: "",
        email:""
    })

    function handleChange(e:any) {
        const { name, value } = e.target;        
        setFormData((prev) => ({...prev, [name]:value}));
    }

    async function handleClick() {
        const {data, error} = await neon
        .from("users")
        .insert(formData)
        .select()
        .single();

        if (error) {
    
            switch (error.message) {
                case 'duplicate key value violates unique constraint "users_email_key"':
                    setErrors("Email musi być unikalny!");
                    break;
            
                default:
                    setErrors("Nieokreślony błąd!");
                    break;
            }
            
        };

        return data;
    }

    return(
        <form>
            <input className={"form-control"} type="hidden" value={formData.id} onChange={handleChange} name="id" id="id" />
            <label className="form-label mt-2" htmlFor="name">Imię:</label>
            <input className={"form-control"} type="text" value={formData.name} onChange={handleChange} name="name" id="name"/>
            <label className="form-label mt-2" htmlFor="surname">Nazwisko:</label>
            <input className={"form-control"} type="text" value={formData.surname} onChange={handleChange} name="surname" id="surname"/>
            <label className="form-label mt-2" htmlFor="email">E-mail</label>
            <input className={"form-control"} type="email" value={formData.email} onChange={handleChange} name="email" id="email"/>
            <button type="button" className="btn btn-success mt-4" onClick={handleClick}>Dodaj użytkownika</button>
            <div>{errors}</div>
        </form>
        
    )



}

export {UserNew};