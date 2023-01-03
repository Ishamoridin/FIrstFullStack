import React from "react";

export default function MovieCard({movie: {imdbID, Year, Poster, Title, Type}}) {
    return (
        <div
            className='movie'
            key={imdbID}
        >
            <div>
                <p>{Year}</p>
            </div>

            <div>
                <img
                    alt={Title}
                    src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
                />
            </div>

            <div>
                <span>{Type}</span>
                <h3>{Title}</h3>
            </div>
        </div>
    )
}