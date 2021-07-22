import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getImage } from "../../store/images";

import './Browse.css'

const ImgPage = (isLoaded) => {
  const { imageId } = useParams();
  const dispatch = useDispatch();
  const image = useSelector(state => (state.image))

  useEffect(() => {
    dispatch(getImage(imageId))
  }, [dispatch])

  const handleButtonClick = () => {
    console.log('image', image)
  }

  const pumper = (
    <>
      <div className='content'>
        <div className='single__imgcontainer'>
          <button onClick={handleButtonClick}>BUTTON HERE</button>
          <img src={image[imageId].imageUrl} alt='post' />

        </div>
      </div>
    </>
  )

  return (
    <>
      {isLoaded && pumper}
    </>
  )
}

export default ImgPage;
