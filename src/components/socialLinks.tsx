import React, {useState} from 'react';
import Img from "gatsby-image"
import { useImage } from "../hooks/images"


const SocialLinks: React.FC = () => {
  const [facebookHover, setFacebookHover] = useState(false);
  const [twitterHover, setTwitterHover] = useState(false);
  const [instagramHover, setInstagramHover] = useState(false);
  const [soundcloudHover, setSoundcloudHover] = useState(false);
  const [appleHover, setAppleHover] = useState(false);
  const [spotifyHover, setSpotifyHover] = useState(false);

  const images = useImage();
  return (
    <div style={{width: 500, margin: '20px 0', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
      <div 
        style={{height: 50, width: 50, display: 'inline', cursor: 'pointer'}}
        onMouseEnter={() => setFacebookHover(true)}
        onMouseLeave={() => setFacebookHover(false)}
      >
        <a href="https://www.facebook.com/halfwaykid/" target="_blank" rel='noreferrer noopener' >
          <Img fixed={facebookHover === false ? images.facebook.childImageSharp.fixed : images.facebook_hover.childImageSharp.fixed} />
        </a>
      </div>
      <div 
        style={{height: 50, width: 50, display: 'inline', cursor: 'pointer'}}
        onMouseEnter={() => setTwitterHover(true)}
        onMouseLeave={() => setTwitterHover(false)}
      >
        <a href="https://www.twitter.com/thehalfwaykid/" target="_blank" rel='noreferrer noopener' >
          <Img fixed={twitterHover === false ? images.twitter.childImageSharp.fixed : images.twitter_hover.childImageSharp.fixed} />
        </a>
      </div>
      <div 
        style={{height: 50, width: 50, display: 'inline', cursor: 'pointer'}}
        onMouseEnter={() => setInstagramHover(true)}
        onMouseLeave={() => setInstagramHover(false)}
      >
        <a href="https://www.instagram.com/halfwaykid/" target="_blank" rel='noreferrer noopener' >
          <Img fixed={instagramHover === false ? images.instagram.childImageSharp.fixed : images.instagram_hover.childImageSharp.fixed} />
        </a>
      </div>
      <div 
        style={{height: 50, width: 50, display: 'inline', cursor: 'pointer'}}
        onMouseEnter={() => setSoundcloudHover(true)}
        onMouseLeave={() => setSoundcloudHover(false)}
      >
        <a href="https://www.soundcloud.com/thehalfwaykid/" target="_blank" rel='noreferrer noopener' >
          <Img fixed={soundcloudHover === false ? images.soundcloud.childImageSharp.fixed : images.soundcloud_hover.childImageSharp.fixed} />
        </a>
      </div>
      <div 
        style={{height: 50, width: 50, display: 'inline', cursor: 'pointer'}}
        onMouseEnter={() => setAppleHover(true)}
        onMouseLeave={() => setAppleHover(false)}
      >
        <a href="https://geo.itunes.apple.com/gb/artist/the-halfway-kid/1333719250?mt=1&app=music" target="_blank" rel='noreferrer noopener' >
          <Img fixed={appleHover === false ? images.apple.childImageSharp.fixed : images.apple_hover.childImageSharp.fixed} />
        </a>
      </div>
      <div 
        style={{height: 50, width: 50, display: 'inline', cursor: 'pointer'}}
        onMouseEnter={() => setSpotifyHover(true)}
        onMouseLeave={() => setSpotifyHover(false)}
      >
        <a href="https://open.spotify.com/artist/6RKOqm8A3960vhcYYG97SB" target="_blank" rel='noreferrer noopener' >
          <Img fixed={spotifyHover === false ? images.spotify.childImageSharp.fixed : images.spotify_hover.childImageSharp.fixed} />
        </a>
      </div>
    </div>
  )
}

export default SocialLinks;


