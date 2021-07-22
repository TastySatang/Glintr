import { useEffect } from "react"
import { Link } from 'react-router-dom'
import { getImages } from "../../store/images";

import "./Browse.css"

const { useDispatch, useSelector } = require("react-redux")

const Browse = () => {
  const dispatch = useDispatch();
  const images = useSelector((state) => Object.values(state.image))
  // const users = useSelector((state) => (state.session))

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch])

  // const handleButtonClick = () => {
  //   console.log('images', images)
  //   console.log('users', users);
  // }

  return (
    <>
      <div className='content'>
        <h1>Explore</h1>
        {/* <button onClick={handleButtonClick}>console</button> */}
        <div className='photos__container' >
          {images.map((image, idx) => {

            // const background = {
            //   width: '100%',
            //   height: "400px",
            //   backgroundImage: `url(${image.imageUrl})`,
            //   backgroundSize: 'cover',
            //   backgroundRepeat: 'no-repeat',
            //   backgroundPosition: '50%',
            // }

            return (
              <>
                <div key={idx} className='image__holder'>
                  <Link to={`/photos/${image.id}`} >
                    <img className='image' alt={idx} key={idx} src={image.imageUrl} />
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>

  )
}

export default Browse;
