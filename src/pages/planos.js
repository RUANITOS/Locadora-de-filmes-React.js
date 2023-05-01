import "../components/estilos gerais/Geral.css";
const planos = [{
    "nome": "plano 1",
    "vantagem": "Você assina e n ganha nada",
    "foto": "fuiTapeado.jpg",
    "preço": "Grátis",
},
{
    "nome": "plano 2",
    "vantagem": "Tudo do plano 1 mais um parabéns do gestor",
    "foto": "shitpost.jpg",
    "preço": "2 Reais",
},
{
    "nome": "plano 3",
    "vantagem": "Tudo dos planos anteriores mais 3 filmes do catálogo",
    "foto": "celtaveneno.jpg",
    "preço": "1 Celta 2 portas",
}
]

export default function Planos() {
    return (
        <div className="container text-center">
            <div class="row">
                {planos.map((plano, i) => (
                    <div className="col" key={i}>
                        <div className="card">
                            <img src={'/assets/images/' + plano.foto} alt={plano.nome} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{plano.nome}</h5>
                                <p>{plano.vantagem}</p>
                                <h5 className="card-title">Preço</h5>
                                <p>{plano.preço}</p>
                                <a
                                    href={`/detalhes/`}
                                >
                                    <div className="btn btn-outline-light me-2">
                                        Detalhes
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}