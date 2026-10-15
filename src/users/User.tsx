import { useParams } from "react-router";
import { users } from "../data/users-data";

function User(){

   let {id} = useParams();   

   const user = users.find((v) => v.id === Number(id));

    if (!user) {
        return <div>Nie znaleziono użytkownika.</div>;
    }

    return <div className="card m-0 p-0">
        <div className="card-header border-primary bg-primary text-white">{user.name} {user.surname}</div>
        <div className="card-body">e-mail: {user.email}</div>
        <div className="card-footer">{user.id}</div>
    </div>;

}

export {User};