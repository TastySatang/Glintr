import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { editContent, getImage, deleteImage } from "../../store/images";
import CommentsComponent from "../../components/Comments";
import EditCommentForm from "../../components/Comments/EditCommentForm";

import './Browse.css'

const ImgPage = () => {
  let history = useHistory();
  const { imageId } = useParams();
  const [newContent, setNewContent] = useState('');
  const [editCommentId, setEditCommentId] = useState(null);
  const dispatch = useDispatch();

  const image = useSelector(state => (state.image[imageId]))
  const sessionUser = useSelector(state => (state.session.user))

  useEffect(() => {
    dispatch(getImage(imageId))
    setEditCommentId(null)
  }, [imageId])

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      id: imageId,
      content: newContent
    }

    const updatedImage = await dispatch(editContent(payload));
    console.log('after await dispatch', updatedImage);
  }

  let content;
  //for editing comments itself while logged in as the commenter
  if (editCommentId) {
    content = (
      <EditCommentForm image={image} commentId={editCommentId} hideForm={() => setEditCommentId(null)} />
    )
  } else {
    content = (
      null
    )
  }

  // for editing image itself while logged in as the user
  let sessionEdit;
  if (sessionUser?.id === image?.userId) {
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

  // const handleButtonClick = () => {
  //   console.log('image', image)
  //   console.log('user', sessionUser)
  //   console.log('bool')
  // }


  return (
    <>
      <div className='single__content'>
        <div className='single__imgcontainer'>
          <img className='singleImage' src={image?.imageUrl} alt='post' />
        </div>
        <div className='single__postcontainer'>
          <div className='leftview'>
            <h2 className='single__imageContent'>
              {image?.content}
              {sessionEdit}
            </h2>
            <CommentsComponent image={image} setEditCommentId={setEditCommentId} />
          </div>
          <div className='rightview'></div>
        </div>
        {/* <button onClick={handleButtonClick}>BUTTON HERE</button> */}
      </div>
    </>
  )
}

export default ImgPage;
