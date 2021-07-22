import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editContent, getImage, deleteImage } from "../../store/images";

import './Browse.css'

const ImgPage = (isLoaded) => {
  let history = useHistory();
  const { imageId } = useParams();
  const dispatch = useDispatch();

  const [newContent, setNewContent] = useState('');

  const image = useSelector(state => (state.image[imageId]))
  const sessionUser = useSelector(state => (state.session.user))

  useEffect(() => {
    dispatch(getImage(imageId))

  }, [dispatch])


  const handleEditSubmit = (e) => {
    e.preventDefault();

    console.log({ id: imageId, content: newContent })
    dispatch(editContent({ id: imageId, content: newContent }));
  }

  const handleDeleteSubmit = (e) => {
    e.preventDefault();

    console.log(imageId)
    const deletedImage = dispatch(deleteImage(imageId))
      .then(() => history.push('/photos'));
    // if (deletedImage) {
    //   history.push('/photos');
    // }

  }

  let sessionEdit;
  if (sessionUser.id === image.userId) {
    sessionEdit = (
      <>
        <form onSubmit={handleEditSubmit}>
          <input
            type='text'
            placeholder='change content'
            onChange={e => setNewContent(e.target.value)}
          />
          <button>Edit</button>
        </form>
        <button
          className='delete'
          onClick={() => {
            dispatch(deleteImage(imageId))
            history.push('/photos')
          }}>Delete image</button>
      </>
    )
  } else {
    sessionEdit = (
      <>
      </>
    )
  }



  const handleButtonClick = () => {
    console.log('image', image)
    console.log('user', sessionUser)
    console.log('bool')
  }

  const pumper = (
    <>
      <div className='single__content'>
        <div className='single__imgcontainer'>
          <img className='singleImage' src={image.imageUrl} alt='post' />
        </div>
        <div className='single__postcontainer'>
          <div className='leftview'>
            <h2 className='single__imageContent'>
              {image.content}
              {sessionEdit}
            </h2>

          </div>
          <div className='rightview'></div>
        </div>
        <button onClick={handleButtonClick}>BUTTON HERE</button>
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
