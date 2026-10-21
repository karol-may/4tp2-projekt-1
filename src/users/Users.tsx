import { Link } from "react-router";
import { users } from "../data/users-data";

type UserType = {
  id?: number,
  name: string,
  surname: string,
  email: string
}


function Users(){


    return <table className={"table table-striped table-bordered"}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>E-mail</th>
            <th>Akcje</th>
          </tr>
        </thead>
        <tbody>
          {users.map((v)=>
            <tr>
              <td>{v.id}</td>
              <td>{v.name}</td>
              <td>{v.surname}</td>
              <td>{v.email}</td>
              <td className={"d-flex gap-2"}>
                <Link to={"/user/"+v.id} className={"btn btn-info btn-sm"}>
                  <i className="bi bi-eye-fill"></i>
                </Link>
                <Link to={"/user/"+v.id+"/edit"} className={"btn btn-primary btn-sm"}>
                  <i className="bi bi-pencil"></i>
                </Link>
                <Link to={"/user/"+v.id+"/delete"} className={"btn btn-danger btn-sm"}>
                  <i className="bi bi-trash"></i>
                </Link>
              </td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4}>Ilość użytkowników: {users.length}</td>
            <td>
              <Link to={"/user/new"} className={"btn btn-success btn-block btn-sm"}>
                <i className="bi bi-person-fill-add"></i>
              </Link>
            </td>
          </tr>
        </tfoot>
      </table>
    ;
}


export { type UserType, Users }