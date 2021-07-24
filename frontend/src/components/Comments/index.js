import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createComment, getComments, } from '../../store/comments';

import './Comments.css'
import EditCommentForm from './EditCommentForm';

const CommentsComponent = ({ image, editCommentId, setEditCommentId }) => {
  const comments = useSelector((state) => Object.values(state.comment).filter(comment => comment.imageId === image.id));
  const sessionUser = useSelector((state => state.session.user))

  const [newComment, setNewComment] = useState('')
  const [showCommentForm, setShowCommentForm] = useState(false)
  const dispatch = useDispatch();

  const openMenu = () => {
    setShowCommentForm(!showCommentForm);
    console.log(showCommentForm)
  }

  useEffect(() => {
    dispatch(getComments(image?.id));
  }, [dispatch, image?.id])



  const handleCommentSubmit = async e => {
    e.preventDefault();

    let data = {
      userId: sessionUser.id,
      imageId: image.id,
      comment: newComment,
    }

    setNewComment('');

    await dispatch(createComment(data, image.id))
  }

  return (
    <>
      {/* This is to show comment and edit depending*/}
      {comments.map((comment, idx) => {
        let sessionEdit;
        if (sessionUser?.id === comment?.userId) {
          sessionEdit = (
            <div className='commentIconHolder' onClick={openMenu}>
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
          <div className='iconHolder' key={idx}>
            <p>{comment.comment}</p>
            {sessionEdit}
            <EditCommentForm commentId={editCommentId} hideForm={openMenu} />
          </div>
        )
      })}
      {/* This is to post comment */}
      <form className='buttonHolder' onSubmit={handleCommentSubmit}>
        <textarea type='text'
          placeholder='new comment'
          name='comment'
          value={newComment}
          onChange={e => setNewComment(e.target.value)}
        />
        <button type='submit'>Submit Comment</button>
      </form>
    </>
  )
}

export default CommentsComponent
