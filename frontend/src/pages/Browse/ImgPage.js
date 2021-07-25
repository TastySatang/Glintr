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
  const [showContentForm, setShowContentForm] = useState(false);
  const dispatch = useDispatch();

  const image = useSelector(state => (state.image[imageId]))
  const sessionUser = useSelector(state => (state.session.user))

  const openMenu = () => {
    setShowContentForm(!showContentForm);
    setNewContent(image?.content)
  }


  useEffect(() => {
    dispatch(getImage(imageId))
    setEditCommentId(null)
  }, [dispatch, imageId])

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      id: imageId,
      content: newContent
    }

    setNewContent('');
    setShowContentForm(false);
    const updatedImage = await dispatch(editContent(payload));
    console.log(updatedImage);
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

  const contentChangeForm = (
    <div>
      <form
        className='contentForm'
        onSubmit={handleEditSubmit}>
        <input
          className='editField'
          type='text'
          value={newContent}
          onChange={e => setNewContent(e.target.value)}
        />
        <div className='buttonHolder'>
          <button
            type='button'
            id='delete'
            onClick={() => {
              dispatch(deleteImage(imageId))
              history.push('/photos')
            }}>Delete Image!</button>
          <button type='button' onClick={openMenu}>Cancel</button>
          <button type='submit'>Done</button>
        </div>
      </form>
    </ div>
  )

  // for editing image itself while logged in as the user
  let sessionEdit;
  if (sessionUser?.id === image?.userId) {
    sessionEdit = (
      <div className='imageIconHolder' onClick={openMenu}>
        <i className="far fa-edit"></i>
      </div>
    )
  } else {
    sessionEdit = (
      <>
      </>
    )
  }

  return (
    <>
      <div className='single__content'>
        <div className='single__imgcontainer'>
          <img className='singleImage' src={image?.imageUrl} alt='post' />
        </div>
        <div className='single__postcontainer'>
          <div className='leftview'>
            <div className='single__imageContent'>
              {showContentForm ? contentChangeForm : (<h1 className='image__content' >{image?.content}</h1>)}
              {sessionEdit}
            </div>
            <CommentsComponent image={image} setEditCommentId={setEditCommentId} />
          </div>
          <div className='rightview'>
            {content}
          </div>
        </div>
      </div>
    </>
  )
}

export default ImgPage;
