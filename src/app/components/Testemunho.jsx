export default function Textemunho() {
  return (
    <section id="testemunho">
      <div className="container">
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <h2>Excelente Ferramenta para acompanhamento do dia a dia.</h2>
              <img src="images/Pinheiro.jpg" className="d-block w-100" alt="Pinheiro" />
              <em>Marcio Martins - Sao Paulo</em>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <h2>Excelente Ferramenta para acompanhamento do dia a dia.</h2>
              <img src="images/welcome.png" className="d-block w-100" alt="bem vindo" />
            </div>
            <div className="carousel-item">
              <h2>Excelente Ferramenta para acompanhamento do dia a dia.</h2>
              <img src="images/welcome.png" className="d-block w-100" alt="bem vindo" />
              <em>Joaosilva - Rio de Janeiro</em>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}
