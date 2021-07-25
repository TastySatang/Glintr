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
    hideForm();
  };

  return (
    <div className='editFormContainer' >
      <label>Edit Comment</label>
      <form id='editField' onSubmit={handleEditSubmit}>
        <textarea
          className='editCommentField'
          type='text'
          placeholder='Edit text'
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <div className='buttonHolder' >
          <button type="submit">Update</button>
          <button type="button" onClick={handleCancelClick}>Cancel</button>
          <button id='delete' type='button' onClick={() => {
            dispatch(deleteComment(commentId))
            hideForm()
          }}>Delete</button>
        </div>
      </form>
    </div>
  )
}

export default EditCommentForm;
