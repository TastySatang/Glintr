import { useEffect } from "react"
import { getImages } from "../../store/images";

import "./Browse.css"

const { useDispatch, useSelector } = require("react-redux")

const Browse = () => {
  const dispatch = useDispatch();
  const images = useSelector((state) => Object.values(state.image))
  const users = useSelector((state) => (state.session))

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch])

  const handleButtonClick = () => {
    console.log('images', images)
    console.log('users', users);
  }

  return (
    <>
      <div className='content'>
        <h1>In Browse</h1>
        <button onClick={handleButtonClick}>console</button>
        <div className='photos__container' >
          {images.map((image, idx) => {

            const background = {
              width: '100%',
              height: "400px",
              backgroundImage: `url(${image.imageUrl})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '50%',
            }

            return (
              <>
                <div key={idx} className='image__holder'>
                  <img className='image' alt={idx} key={idx} src={image.imageUrl} />
                </div>
                {/* <div key={idx} className='image__holder' style={background} >
              </div> */}
              </>
            );

          })}
        </div>
      </div>
    </>

  )
}

export default Browse;
