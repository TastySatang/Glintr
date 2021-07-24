import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createComment, getComments, } from '../../store/comments';

import './Comments.css'

const CommentsComponent = ({ image, setEditCommentId }) => {
  const comments = useSelector((state) => Object.values(state.comment).filter(comment => comment.imageId === image.id));
  const user = useSelector((state => state.session.user))
  const [newComment, setNewComment] = useState('')
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComments(image?.id));
  }, [dispatch, image?.id])

  const handleCommentSubmit = async e => {
    e.preventDefault();

    let data = {
      userId: user.id,
      imageId: image.id,
      comment: newComment,
    }

    setNewComment('');

    await dispatch(createComment(data, image.id))
  }

  return (
    <>
      {comments.map((comment, idx) => {
        const rightUser = (comment.userId) === (user?.id)
        return (
          <div className='iconHolder' key={idx}>
            <p className='iconHolder' >{comment.comment}</p>
            {rightUser && (
              <div className='iconHolder' onClick={() => {
                setEditCommentId(comment.id)
              }}>
                <i className="far fa-edit"></i>
              </div>
            )}
          </div>
        )
      })}
      <form onSubmit={handleCommentSubmit}>
        <textarea type='text'
          placeholder='new comment'
          name='comment'
          value={newComment}
          onChange={e => setNewComment(e.target.value)}
        />
        <button type='submit'>Submit comment</button>
      </form>
    </>
  )
}

export default CommentsComponent
