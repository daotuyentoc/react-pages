import { useEffect, useState } from "react"
import { IoClose, IoPlay } from "react-icons/io5"
function Detail(array) {
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [url, setUrl] = useState('');
    const [time, setTime] = useState('');
    const [description, setDescription] = useState('');
    const [show, setShow] = useState('');
    useEffect(() => {
        setImage(array.array.image);
        setTitle(array.array.title);
        setType(array.array.type);
        setUrl(array.array.url);
        setTime(array.array.time);
        setDescription(array.array.description);
        setShow(array.array.show)
    }, [array])
    const closeDetail=()=>{
        setShow(false);
    }
    return (
        <div className={`popup ${show ? "show" : ""}`}>
            <div className="overlay"></div>
            <div className="popup-wrapper">
                <div className="popup-inner">
                    <div className="image-wrapper">
                        <div className="image"><img className="image-detail" src={image} /></div>
                    </div>
                    <div className="content">
                        <div className="title"><strong>Name: </strong>{title}</div>
                        <div className="type"><strong>Type:</strong> {type}</div>
                        <div className="time"><strong>Time:</strong> {time ? time : ""}</div>
                        <div className="description">{description}</div>
                        <div className="close"
                            onClick={closeDetail}
                        ><IoClose /></div>
                        <a className="watch" href={url}>Watch <IoPlay /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail