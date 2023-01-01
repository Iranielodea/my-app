export default function Banner(){
  return(
    <section id="banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1>Uma plataforma de CRM simples de configurar e facil de usar.</h1>
            <h4>Gerencie seus clientes em um unico lugar.</h4>
            <button type="button" className="btn btn-dark btn-lg btn-banner">Criar uma conta</button>
            <button type="button" className="btn btn-outline-light btn-lg btn-banner">Fazer Login</button>
          </div>
          <div className="col-lg-6">
            <img src="images/Pinheiro.jpg" alt="imagem" />
          </div>
        </div>
      </div>
    </section>
  )
}

/*
tamanhos de colunas
lg = desktop
md = tablet
sm = mobile
*/