import { useState } from "react";
import type { UserType } from "./Users";

function UserEdit(){
  
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

    return(
        <form>
            <label htmlFor="id">ID:</label>
            <input className={"form-control"} type="text" value={formData.id} onChange={handleChange} name="id" id="id"/>
            <label htmlFor="name">Imię:</label>
            <input className={"form-control"} type="text" value={formData.name} onChange={handleChange} name="name" id="name"/>
            <label htmlFor="surname">Nazwisko:</label>
            <input className={"form-control"} type="text" value={formData.surname} onChange={handleChange} name="surname" id="surname"/>
            <label htmlFor="email">E-mail</label>
            <input className={"form-control"} type="email" value={formData.email} onChange={handleChange} name="email" id="email"/>
        </form>
    )



}

export {UserEdit};