import { useEffect, useState } from 'react';
import { IoClose, IoPlay, IoStarOutline, IoStar } from 'react-icons/io5';
function Detail(array) {
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [url, setUrl] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');
  const [score, setScore] = useState(0);
  const [scoreBy, setScoreBy] = useState(0);
  const [show, setShow] = useState('');
  useEffect(() => {
    setImage(array.array.image);
    setTitle(array.array.title);
    setType(array.array.type);
    setUrl(array.array.url);
    setTime(array.array.time);
    setDescription(array.array.description);
    setScore(array.array.score);
    setScoreBy(array.array.scoreBy);
    setShow(array.array.show);
  }, [array]);
  const closeDetail = () => {
    setShow(false);
    array = null
  };
  if (show) {
    return (
      <div className={`popup ${show ? 'show' : ''}`}>
        <div className="overlay"
          onClick={closeDetail}></div>
        <div className="popup-wrapper">
          <div className="popup-inner">
            <div className="image-wrapper">
              <div className="image">
                <img className="image-detail" src={image} />
              </div>
            </div>
            <div className="content">
              <div className="title">
                <strong>Name: </strong>
                {title}
              </div>
              <div className="type">
                <strong>Type:</strong> {type}
              </div>
              
              <div className="score">
                <strong>Rating:</strong> {score}
                <span className='ratting-star' style={{ '--rating': score }} >
                  <span className='empty-stars'><IoStarOutline /><IoStarOutline /><IoStarOutline /><IoStarOutline /><IoStarOutline /></span>
                  <span className='full-stars'><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></span>
                </span>
                <span className='rating-review'>({scoreBy})</span>
              </div>
              <div className="time">
                <strong>Time:</strong> {time ? time : ''}
              </div>
              <div className="description">{description}</div>
              <div className="close" onClick={closeDetail}>
                <IoClose />
              </div>
              <a className="watch" href={url}>
                Watch <IoPlay />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return '';
  }
}

export default Detail;
