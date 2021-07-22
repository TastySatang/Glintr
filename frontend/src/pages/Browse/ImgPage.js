import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { getImages } from "../../store/images";


const ImgPage = () => {
  const dispatch = useDispatch();
  const { imageId } = useParams();
  const image = useSelector(state => {
    return state.image[imageId]
  })

  useEffect(() => {
    dispatch(getImages());

  }, [dispatch])

  const handleButtonClick = () => {
    console.log('image', image.imageUrl)
  }

  return (
    <>
      <div className='content'>
        <div className='single__imgcontainer'>
          {/* <img src={image.imageUrl} alt='post' /> */}
          {/* <h1>inside image {image.imageUrl}</h1> */}
          <button onClick={handleButtonClick}>BUTTON HERE</button>
        </div>
      </div>
    </>
  )
}

export default ImgPage;
