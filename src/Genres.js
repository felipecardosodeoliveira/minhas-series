import React from 'react';

import { Link } from 'react-router-dom';

import axios from 'axios';

function Genres() {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        setLoading(true);
        axios.get('/api/genres')
            .then(resp => {
                setData(resp.data.data);
                setLoading(false);
            })
            .catch(e => console.log('error', e));
    }, []);

    const deleteGenre = (id) => {
        axios.delete('/api/genres/' + id)
            .then(res => {
                const newData = data.filter(d => d.id !== id);
                setData(newData);
            });
    }

    const renderLine = (record) => {
        return <tr key={record.id}>
            <td>{record.id}</td>
            <td>{record.name}</td>
            <td>
                <button className="btn btn-danger mx-1" onClick={() => deleteGenre(record.id)}>Remover</button>
                <Link className="btn btn-info mx-1" to={'/generos/editar/' + record.id}>Editar</Link>
            </td>
        </tr>
    }

    if (loading) {
        return (
            <div className="text-center py-2">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    if (data.length === 0) {
        return (
            <section className="container">
                <h1>Gêneros</h1>
                <Link className="btn btn-outline-primary" to={'/generos/novo'}>Novo</Link>
                <div className="alert alert-warning" role="alert">
                    Você não possui gêneros criados.
                </div>
            </section>
        )
    }

    return (
        <section className="container">
            <h1>Gêneros</h1>
            <Link className="btn btn-outline-primary" to={'/generos/novo'}>Novo</Link>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(renderLine)}
                </tbody>
            </table>
        </section>
    )
}

export default Genres;
