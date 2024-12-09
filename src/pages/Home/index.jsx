import "./style.css";
import Trash from "../../assets/Trash.svg";

function Home() {
  const users = [
    {
      id: "diihiheh298333h3yb22fubufb23",
      name: "Pedro Honorato",
      age: 26,
      email: "pedro@pedro.com",
    },
    {
      id: "diihiheh298333h3yb22fubdddufb23",
      name: "Pedro Silva",
      age: 27,
      email: "pedro@pedro.com",
    },
    {
      id: "diihiheh298ssss333h3yb22fubdddufb23",
      name: "Maria Silva",
      age: 29,
      email: "pmaria@maria.com",
    }
  ];

  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuários</h1>
        <input name="nome" type="text" placeholder="Nome" />
        <input name="idade" type="number" placeholder="Idade" />
        <input name="email" type="email" placeholder="E-mail" />
        <button type="">Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id}>
          <div>
            <p>Nome: {user.name}</p>
            <p>Idade: {user.age} </p>
            <p>Email: {user.email} </p>
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
