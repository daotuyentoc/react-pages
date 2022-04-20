import { useState } from 'react';
import ReactPlayer from 'react-player';
import LazyLoad from 'react-lazyload';

function Background() {
  const [isMuted] = useState(true);
  return (
    <div className="section-background">
            <LazyLoad height={500} offset={500}>
      <div className="background-wrapper">

        <ReactPlayer
          className="background-video"
          url="https://www.youtube.com/watch?v=OSyKhqDsW14"
          playing={true}
          loop={true}
          width="100%"
          height="100%"
          volume={1}
          muted={isMuted}
          config={{
            youtube: {
              controls: false,
              height: '100%',
              width: '100%',
            },
          }}
        />
        <div className='headding'>
          <h1>Top Movie</h1>
        </div>
        
      </div>
      </LazyLoad>
    </div>
  );
}
export default Background;
