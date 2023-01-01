export default function Precos() {
  return (
    <section id="preco">
      <div className="container">
        <div className="row text-center">
          <div className="titulo"></div>
          <h1>Planos e Precos</h1>
          <p>
            Comece sua avaliacao gratuita. Nao e necessario cartao de credido.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <div className="card">
              <div className="card-hader">
                <h1>Free</h1>
              </div>
              <div className="card-body">
                <h2>R$ 0,00</h2>
                <p>Ate 50 clientes</p>
                <p>Sem suporte</p>
                <button className="btn btn-outline-primary">
                  Comecar Agora
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card">
              <div className="card-hader">
                <h1>Pro</h1>
              </div>
              <div className="card-body">
                <h2>
                  R$ 49,90 <small className="text-muted">/mes</small>{" "}
                </h2>
                <p>Ate 200 clientes</p>
                <p>Suporte por email</p>
                <button className="btn btn-outline-primary">
                  Assinar Agora
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card">
              <div className="card-hader">
                <h1>Premium</h1>
              </div>
              <div className="card-body">
                <h2>
                  R$ 49,90 <small className="text-muted">/mes</small>{" "}
                </h2>
                <p>Clientes Ilimitados</p>
                <p>Suporte por telefone</p>
                <button className="btn btn-outline-primary">
                  Assinar Agora
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
