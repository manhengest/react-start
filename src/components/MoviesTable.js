import React, {useState, useEffect} from "react";

export const MoviesTable = () => {
    const [movies, setMovies] = useState([])

    const fetchMovies = () => {
        setMovies([
            {id: 1, category: "Documentary", price: "$49.99", stocked: true, name: "Pulp Fiction"},
            {id: 2, category: "Documentary", price: "$9.99", stocked: true, name: "Bohemian Rhapsody"},
            {id: 3, category: "Documentary", price: "$29.99", stocked: false, name: "Kill Bill: Vol 2"},
            {id: 4, category: "Comedy", price: "$99.99", stocked: true, name: "Avengers: War of Infinity"},
            {id: 5, category: "Comedy", price: "$99.99", stocked: false, name: "Inception"},
            {id: 6, category: "Comedy", price: "$99.99", stocked: true, name: "Reservoir dogs"}
        ]);
    }

    useEffect(() => {
        fetchMovies();
    }, [])

    return (
        <div>
            <ul style={{textAlign: 'left'}}>
                {
                    movies.map(movie => {
                        return (
                            <li key={movie.id}>
                                {movie.name}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
