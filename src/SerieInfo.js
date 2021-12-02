import React from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { Badge } from 'reactstrap';

import axios from 'axios';

const masterHeader = (urlImg) => ({
    color: '#FFF',
    height: '50vh',
    minHeight: '500px',
    backgroundImage: `url(${urlImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
})

function SerieInfo() {
    const [data, setData] = React.useState({});
    const [mode, setMode] = React.useState('INFO');
    const [form, setForm] = React.useState({});
    const [genres, setGenres] = React.useState([]);

    const navigate = useNavigate();
    const params = useParams();

    React.useEffect(() => {
        if (params.id) {
            axios.get('/api/series/' + params.id)
                .then(res => {
                    setData(res.data);
                    setForm(res.data);
                });
        }
    }, [params.id]);

    React.useEffect(() => {
        axios.get('/api/genres')
            .then(res => setGenres(res.data.data));
    }, []);

    const onChange = (evt) => {
        setForm({ ...form, [evt.target.name]: evt.target.value });
    }

    const save = () => {
        axios.put('/api/series/' + params.id, form)
            .then(() => navigate('/series'))
    }

    return (
        <section>
            <header style={masterHeader(data.background)}>
                <div className="h-100" style={{ background: 'rgba(0,0,0,0.7)' }}>
                    <div className="h-100 container">
                        <div className="row align-items-center h-100 mx-0">
                            <div className="col-3">
                                <img className="img-fluid img-thumbnail" src={data.poster} alt="Poster" />
                            </div>
                            <div className="col-8">
                                <h1>{data.name}</h1>
                                <div className="lead">
                                    {form.status === 'ASSISTIDO' &&
                                        <Badge color="success" className="mx-1" >Assistido</Badge>
                                    }
                                    {form.status === 'PARA_ASSISTIR' &&
                                        <Badge color="warning" className="mx-1">Para assistir</Badge>
                                    }
                                    <br />
                                    <span>Gênero:</span> <small>{form.genre_name}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="container">
                <div className="card my-2 border-0">
                    <div className="card-body">
                        Clique no botão abaixo para editar o gênero!
                        <br />
                        {mode === 'EDIT' ? (
                            <button
                                type="button"
                                className="btn btn-outline-danger mt-3"
                                onClick={() => setMode('INFO')}
                            >
                                Cancelar
                            </button>
                        ) : (
                            <button
                                type="button"
                                className="btn btn-outline-primary mt-3"
                                onClick={() => setMode('EDIT')}
                            >
                                Editar
                            </button>
                        )}
                        {mode === 'EDIT' && (
                            <form>
                                <div className="form-group mt-3">
                                    <label htmlFor="name">Nome</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name || ''}
                                        onChange={onChange}
                                        className="form-control"
                                        id="name"
                                    />
                                </div>

                                <div className="form-group mt-3">
                                    <label htmlFor="genrer">Gênero</label>
                                    <select className="form-control custom-select"
                                        value={form.genre_id} name="genre_id" onChange={onChange}>
                                        {genres.map((g, i) => {
                                            return <option
                                                key={g.id}
                                                value={g.id}
                                            >
                                                {g.name}
                                            </option>
                                        })}
                                    </select>
                                </div>

                                <div className="form-group mt-3">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            id="assistido"
                                            name="status"
                                            value="ASSISTIDO"
                                            onChange={onChange}
                                            checked={form.status === 'ASSISTIDO'}
                                        />
                                        <label className="form-check-label" htmlFor="assistido">
                                            Assistido
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            id="assistir"
                                            name="status"
                                            value="PARA_ASSISTIR"
                                            onChange={onChange}
                                            checked={form.status === 'PARA_ASSISTIR'}
                                        />
                                        <label className="form-check-label" htmlFor="assistir">
                                            Para assistir
                                        </label>
                                    </div>
                                </div>

                                <div className="form-group mt-3">
                                    <label htmlFor="comments">Comentário</label>
                                    <textarea
                                        name="comments"
                                        value={form.comments}
                                        id="comments"
                                        onChange={onChange}
                                        className="form-control"

                                    >
                                    </textarea>
                                </div>
                                <button
                                    type="button"
                                    className="btn btn-primary mt-3"
                                    onClick={save}
                                >
                                    Salvar
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </section>
    )
}

export default SerieInfo;
