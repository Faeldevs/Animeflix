import './cabecalho.css'

const Cabecalho = () =>{
    return(
        <header>
        <div className='principal'>

        <div className='logo'>
          <img src='./image/logo.png' alt="Logo AnimeFlix" />
        </div>

        <div className='menu'>
          <div className='menu-itens'>
            <ul>
                <li><a href='/'>Início</a></li>
                <li><a href='/'>Séries</a></li>
                <li><a href='/'>Filmes</a></li>
                <li><a href='/'>Bombando</a></li>
                <li><a href='/'>Minha lista</a></li>
            </ul>
            </div>
            
            </div>
        </div>
        </header>
        
        
      
    )
}

export default Cabecalho