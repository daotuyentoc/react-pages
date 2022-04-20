import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Detail from './Detail';
import 'swiper/css';
import LazyLoad from 'react-lazyload';

function List(movieName) {

  const url = movieName.movieName.url
  const name = movieName.movieName.name
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
    fetch('https://api.jikan.moe/v4/' + url)
      .then((res) => res.json())
      .then((anime) => {
        setAnimes(anime.data);
        console.log(animes)
      });
  }, []);
  return (
    <div className="item-movie">
      <h2 className='h2' to={`/list-movie/${url}`} >{name} Movie</h2>
      <Swiper className='movie-list'
        spaceBetween={30}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          425: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
      >
        {animes.map((anime, index) => (
          <SwiperSlide key={index} className="movie-item">
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
          </SwiperSlide>
        ))}
      </Swiper>
      <div>
        <Detail array={arr} />
      </div>
    </div>
  );
}
export default List;
