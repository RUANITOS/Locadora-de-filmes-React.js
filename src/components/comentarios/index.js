const comentariosList = [{
    "filme": "The Avengers", "comenatarios": [{
        "usuario": "ruanitos",
        "comentario": "brabo"
    },
    {
        "usuario": "ruanitos II",
        "comentario": "brabo demais"
    },
    {
        "usuario": "ruanitos III",
        "comentario": "Bisavo do ruanitos"
    }
    ]
},
{
    "filme": "Avengers: Age of Ultron", "comenatarios": [{
        "usuario": "ruanitos",
        "comentario": "ruim"
    },
    {
        "usuario": "ruanitos",
        "comentario": "ruim demais"
    }
    ]
},
{
    "filme": "Avengers: Infinity War", "comenatarios": [{
        "usuario": "ruanitos",
        "comentario": "ruim"
    },
    {
        "usuario": "ruanitos",
        "comentario": "ruim demais"
    }
    ]
},
{
    "filme": "Avengers: Endgame", "comenatarios": [{
        "usuario": "ruanitos",
        "comentario": "ruim"
    },
    {
        "usuario": "ruanitos",
        "comentario": "ruim demais"
    }
    ]
},
{
    "filme": "Wonder Woman", "comenatarios": [{
        "usuario": "ruanitos",
        "comentario": "ruim"
    },
    {
        "usuario": "ruanitos",
        "comentario": "ruim demais"
    }
    ]
},
{
    "filme": "Doctor Strange", "comenatarios": [{
        "usuario": "ruanitos",
        "comentario": "ruim"
    },
    {
        "usuario": "ruanitos",
        "comentario": "ruim demais"
    }
    ]
},
{
    "filme": "Guardians of the Galaxy", "comenatarios": [{
        "usuario": "ruanitos",
        "comentario": "ruim"
    },
    {
        "usuario": "ruanitos",
        "comentario": "ruim demais"
    }
    ]
},
{
    "filme": "Iron Man 2", "comenatarios": [{
        "usuario": "ruanitos",
        "comentario": "ruim"
    },
    {
        "usuario": "ruanitos",
        "comentario": "ruim demais"
    }
    ]
},
{
    "filme": "Iron Man", "comenatarios": [{
        "usuario": "ruanitos",
        "comentario": "ruim"
    },
    {
        "usuario": "ruanitos",
        "comentario": "ruim demais"
    }
    ]
},
]




export default function Comments({ filme }) {
    const comentariosFilme = comentariosList.find(c =>
        c.filme === filme
    );
    return (
        <div className="container text-center">
            <h6 class="border-bottom border-gray pb-2 mb-0">Recentes: </h6>
            {comentariosFilme.comenatarios.map((comment, i) => (
                <div class="my-3 p-3 bg-white rounded shadow-sm" key={i.toString()}>

                    <div class="media text-muted pt-3">
                        <svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff" /><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
                        <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                            <strong class="d-block text-gray-dark">{comment.usuario}</strong>
                            {comment.comentario}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}