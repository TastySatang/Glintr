import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { updateComment } from "../../store/comments";

const EditCommentForm = ({ commentId, hideForm }) => {
  const comment = useSelector(state => state.comment[commentId])
  const dispatch = useDispatch();

  const [text, setText] = useState(comment.comment)

  const handleEditSubmit = async e => {
    e.preventDefautlt();

    const payload = {
      id: commentId,
      text
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
    <div>
      <form onSubmit={handleEditSubmit}>
        <input
          type='text'
          placeholder='Edit text'
          onChange={e => setText(e.target.value)}
        />
        <button type="submit">update</button>
        <button type="button" onClick={handleCancelClick}>cancel</button>
      </form>
    </div>
  )
}

export default EditCommentForm;
