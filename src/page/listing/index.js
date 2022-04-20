import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
function ListingIndex() {
    const list = [
        {
            url: "anime/naruto",
            name: "Naruto",
            img: "naruto.jpg"
        },
        {
            url: "anime/conan",
            name: "Conan",
            img: "conan.jpg"
        },
        {
            url: "anime/onepiece",
            name: "One piece",
            img: "onepie.jpg"
        },
        {
            url: "anime/dragonball",
            name: "Dragon ball",
            img: "dragonball.jpg"
        }
    ]
    return (
        <main>
            <div className='list-page'>
                {list.map((movie, index) => (
                    <div key={index} className="background-listing-wrapper">
                        <LazyLoad height={200}>
                        <Link to={`${movie.name}`}>{movie.name}</Link>
                        <div className='background-image'>
                            <img src={require(`../../image/${movie.img}`)} alt={movie.name} />
                        </div>
                        </LazyLoad>
                    </div>
                ))}
            </div>
        </main>
    );
}


export default ListingIndex;