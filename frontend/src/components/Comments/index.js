import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getComments, } from '../../store/comments';

const CommentsComponent = ({ image, setEditCommentId }) => {
  const comments = useSelector((state) => Object.values(state.comment).filter(comment => comment.imageId === image.id));
  const user = useSelector((state => state.session.user))
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComments(image?.id));
  }, [dispatch, image?.id])

  const handleButtonClick = () => {
    console.log('image', image)
    console.log(comments)
  }

  return (
    <>
      {comments.map((comment, idx) => {
        const rightUser = (comment.userId) === (user?.id)
        console.log(rightUser)
        return (
          <>
            <div key={idx}>
              <p key={idx}>{comment.comment}</p>
            </div>
            {rightUser && (
              <button onClick={() => setEditCommentId(comment.id)}>Edit</button>
            )}
          </>
        )
      })}
      <button onClick={handleButtonClick}>CommentsButton</button>
    </>
  )
}

export default CommentsComponent
