import ReactPlayer from "react-player"
import { useState } from "react";
function Background() {
    const [isMuted] = useState(false)
    return (
        <div className="section-background">
            <div className='background-wrapper'>
                <ReactPlayer className="background-video"
                    url="https://www.youtube.com/watch?v=OSyKhqDsW14"
                    playing={true}
                    loop={true}
                    width='100%'
                    height='100%'
                    volume={1}
                    muted={isMuted}
                    config={{
                        youtube: {
                            controls: false,
                            height: '100%',
                            width: '100%'
                        }
                    }}
                />
            </div>
        </div>
    )
}
export default Background;
