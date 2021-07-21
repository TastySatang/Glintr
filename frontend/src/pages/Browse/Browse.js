import { useEffect } from "react"
import { getImages } from "../../store/images";


const { useDispatch, useSelector } = require("react-redux")

const Browse = () => {
  const dispatch = useDispatch();
  const images = useSelector((state) => Object.values(state.image))
  const users = useSelector((state) => Object.values(state.session))

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch])

  const handleButtonClick = () => {
    console.log('images', images)
    console.log('users', users);
  }

  return (
    <>
      <div className='photos__container' >
        <h1>In Browse</h1>
        <button onClick={handleButtonClick}>console</button>
        {/* {images.map((image, idx) => {
          console.log('inside imagemap image:', image);
          console.log('inside imagemap images:', images);

          return (
            <div key={idx} className='image holder' ></div>
          );

        })} */}
      </div>
    </>

  )
}

export default Browse;
