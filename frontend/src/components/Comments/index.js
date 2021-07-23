import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../../store/comments';

const CommentsComponent = ({ image }) => {
  const comments = useSelector((state) => Object.values(state.comment));

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
      <div>
        {/* <h2>{comments}</h2> */}
      </div>
      <button onClick={handleButtonClick}>CommentsButton</button>
    </>
  )
}

export default CommentsComponent
