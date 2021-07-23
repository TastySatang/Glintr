import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createComment, getComments, } from '../../store/comments';

const CommentsComponent = ({ image, setEditCommentId }) => {
  const comments = useSelector((state) => Object.values(state.comment).filter(comment => comment.imageId === image.id));
  const user = useSelector((state => state.session.user))
  const [newComment, setNewComment] = useState('')
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComments(image?.id));
  }, [dispatch, image?.id])

  const handleButtonClick = () => {
    console.log('image', image)
    console.log(comments)
  }

  const handleCommentSubmit = async e => {
    e.preventDefault();

    let data = {
      userId: user.id,
      imageId: image.id,
      comment: newComment,
    }

    await dispatch(createComment(data, image.id))
  }

  return (
    <>
      {comments.map((comment, idx) => {
        const rightUser = (comment.userId) === (user?.id)
        return (
          <>
            <div key={idx}>
              <p key={idx}>{comment.comment}</p>
              {rightUser && (
                <button onClick={() => {
                  setEditCommentId(comment.id)
                  console.log(comment.id)
                }}>Edit</button>
              )}
            </div>
          </>
        )
      })}
      <form onSubmit={handleCommentSubmit}>
        <input type='text'
          placeholder='new comment'
          onChange={e => setNewComment(e.target.value)}
        />
        <button type='submit'>SUbmit comment</button>
      </form>
      <button onClick={handleButtonClick}>CommentsButton</button>
    </>
  )
}

export default CommentsComponent
