import { useEffect } from "react"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getImages } from "../../store/images";

import "./Browse.css"

const Browse = () => {
  const dispatch = useDispatch();
  const images = useSelector((state) => Object.values(state.image))

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch])

  // const handleButtonClick = () => {
  //   console.log('images', images)
  // }

  return (
    <>
      <div className='content'>
        <h1>Explore</h1>
        {/* <button onClick={handleButtonClick}>BUTTON HERE</button> */}
        <div className='photos__container' >
          {images.map((image, idx) => {
            return (
              <>
                <div key={idx} className='image__holder'>
                  <Link key={idx} to={`/photos/${image.id}`} >
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
