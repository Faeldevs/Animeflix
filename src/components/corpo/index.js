import './corpo.css'


const Corpo = () =>{

    function botao(){
        window.location.href='https://www.youtube.com/watch?v=7WoSgiY97SI'
    }

    return(
        <main>
            <div className='container'>
                <div className='container-itens'>
                    <h1 className='titulo'>Destaque</h1>
                    <h2 className='subtitulo'>Shokugeki No Souma - 2</h2>
                    <div className='opcoes-texto'>
                    <p className='texto'>Soma é um jovem chef apaixonado por culinária e sempre busca a perfeição em seus pratos. O garoto entra para uma grande escola de culinária onde enfrenta desafios amargos e compete com cozinheiros habilidosos.</p>
                    </div>
                    
                    <div className='botao-info'>
                    <button className='botao' onClick={botao}>Assitir</button>
                    </div>
                    
                </div>
            </div>
        </main>
    )
        
    
}

export default Corpo
