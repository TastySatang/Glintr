import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { updateComment, deleteComment } from "../../store/comments";

import './Comments.css'

const EditCommentForm = ({ commentId, hideForm }) => {
  const comment = useSelector(state => state.comment[commentId])
  const dispatch = useDispatch();

  const [text, setText] = useState(comment.comment)

  const handleEditSubmit = async e => {
    e.preventDefault();

    const payload = {
      id: commentId,
      comment: text
    };
    const updatedComment = await dispatch(updateComment(payload))

    if (updatedComment) {
      hideForm();
    }
  };

  const handleCancelClick = e => {
    e.preventDefault();
    console.log(typeof commentId)
    hideForm();
  };

  return (
    <div>
      <form onSubmit={handleEditSubmit}>
        <input
          type='text'
          placeholder='Edit text'
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button type="submit">update</button>
        <button type="button" onClick={handleCancelClick}>cancel</button>
        <button type='button' onClick={() => {
          dispatch(deleteComment(commentId))
          hideForm();
        }}>Delete</button>
      </form>
    </div>
  )
}

export default EditCommentForm;
