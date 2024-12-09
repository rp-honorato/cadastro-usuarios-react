import { useEffect, useState } from "react";
import "./style.css";
import Trash from "../../assets/Trash.svg";
import api from "../../services/api";


//React Hooks

function Home() {
  const [users, setUsers] = useState([])

  async function getUsers(){
    const usersFromApi = await api.get('/usuarios');

    setUsers(usersFromApi.data);

    
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuários</h1>
        <input name="nome" type="text" placeholder="Nome" />
        <input name="idade" type="number" placeholder="Idade" />
        <input name="email" type="E-mail" placeholder="E-mail" />
        <button type="button">Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button>
            <img src={Trash} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
