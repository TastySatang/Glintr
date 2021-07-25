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

  const image = useSelector(state => (state.image[imageId]))
  const sessionUser = useSelector(state => (state.session.user))

  const [newContent, setNewContent] = useState('');
  const [editCommentId, setEditCommentId] = useState(null);
  const [showContentForm, setShowContentForm] = useState(false);
  const dispatch = useDispatch();

  const hideForm = () => {
    setEditCommentId(null);
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

  // for editing image itself
  const contentChangeForm = (
    <div>
      <form
        className='contentForm'
        onSubmit={handleEditSubmit}>
        <input
          className='editField'
          type='text'
          placeholder='change content'
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
          <button type='button'>Cancel</button>
          <button type='submit'>Done</button>
        </div>
      </form>
    </ div>
  )

  // while logged in as the user
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

  // let content;
  // //for editing comments itself while logged in as the commenter
  // if (editCommentId) {
  //   content = (
  //     <EditCommentForm image={image} commentId={editCommentId} hideForm={() => setEditCommentId(null)} />
  //   )
  // } else {
  //   content = (
  //     <CommentsComponent image={image} setEditCommentId={setEditCommentId} />
  //   )
  // }

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
            <CommentsComponent image={image} editCommentId={editCommentId} setEditCommentId={setEditCommentId} />
            {/* {content} */}
          </div>
          <div className='rightview'>
            {editCommentId && (<EditCommentForm image={image} commentId={editCommentId} hideForm={() => setEditCommentId(null)} />)}
            <h2 className='single__updatedContent'>Image uploaded at: {image?.createdAt}</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default ImgPage;
