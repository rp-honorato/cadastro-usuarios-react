import './style.css'
import Trash from '../../assets/Trash.svg'
function Home() {

  return (
      <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input name="nome" type="text" placeholder='Nome'/>
        <input name="idade" type="number" placeholder='Idade'/>
        <input name="email" type="email" placeholder='E-mail'/>
        <button type=''>Cadastrar</button>
      </form>

      <div>
        <div>
          <p>Nome: </p>
          <p>Idade: </p>
          <p>Email: </p>
        </div>
        <button>
          <img src={Trash}/>
        </button>
      </div>
      </div>
  )
}


export default Home
