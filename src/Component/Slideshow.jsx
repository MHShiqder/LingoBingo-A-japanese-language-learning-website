import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}






const slideImages = [
  {
    url: 'https://i.ibb.co.com/rMZPgWM/robert-anasch-Mc-X3-Xu-JRs-UM-unsplash.jpg',
    caption: 'Slide 1'
  },
  {
    url: 'https://i.ibb.co.com/HGk4Ft7/jerry-wang-jfn-UC7s3iuw-unsplash.jpg',
    caption: 'Slide 2'
  },
  {
    url: 'https://i.ibb.co.com/gyz45n6/galen-crout-0-x-Mu-Ebp-FAQ-unsplash.jpg',
    caption: 'Slide 3'
  },
  {
    url: 'https://i.ibb.co.com/RBQ7Zv3/jase-bloor-o-CZHIa1-D4-EU-unsplash.jpg',
    caption: 'Slide 4'
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container w-11/12 mx-auto">
        <Slide duration={2000}>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slideshow;