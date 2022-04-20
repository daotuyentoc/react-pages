import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import LazyLoad from 'react-lazyload';
import Detail from '../home/Detail';
function Listing() {
    const movieName = useParams();
    console.log(movieName)
    const [animes, setAnimes] = useState([]);
    const [arr, setArr] = useState([]);
    let list = [];
    const handleClick = (image, title, type, url, time, description, score, score_by) => {
        list['image'] = image;
        list['title'] = title;
        list['type'] = type;
        list['url'] = url;
        list['time'] = time;
        list['description'] = description;
        list['show'] = true;
        list['score'] = score / 2;
        list['scoreBy'] = score_by;
        setArr(list);
    };

    useEffect(() => {
        fetch('https://api.jikan.moe/v4/anime?q=' + movieName.movieName)
            .then((res) => res.json())
            .then((anime) => {
                setAnimes(anime.data);
                console.log(animes)
            });

    }, []);
    return (
        <main>
            <div className="listing container">
                <h2 className='h2' to={`/movie-list/${movieName.movieName}`} >{movieName.movieName} Movie</h2>
                <div className="movie-list">
                    {animes.map((anime, index) => (
                        <div key={index} className="movie-item">
                            <LazyLoad height={300} offset={100}>
                            <div
                                className="image"
                                onClick={() =>
                                    handleClick(
                                        anime.images.jpg.large_image_url,
                                        anime.title,
                                        anime.type,
                                        anime.url,
                                        anime.duration,
                                        anime.synopsis,
                                        anime.score,
                                        anime.scored_by,
                                    )
                                }
                            >
                                <img src={anime.images.jpg.large_image_url} alt={anime.title} />
                            </div>
                            </LazyLoad>
                        </div>
                    ))}
                </div>
                <div>
                    <Detail array={arr} />
                </div>
            </div>
        </main>
    );
}
export default Listing;
