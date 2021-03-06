import { csrfFetch } from "./csrf";

const LOAD_COMMENTS = "comments/LOAD_COMMENTS"
// const UPDATE_COMMENT = "comments/UPDATE_COMMENT"
const ADD_COMMENT = "comments/ADD_COMMENT"
const REMOVE_COMMENT = "comments/REMOVE_COMMENT"

const load = (comments, imageId) => ({
  type: LOAD_COMMENTS,
  comments,
  imageId,
});

// const update = comment => ({
//   type: UPDATE_COMMENT,
//   comment,
// })

const add = comment => ({
  type: ADD_COMMENT,
  comment,
})

const remove = (commentId) => ({
  type: REMOVE_COMMENT,
  commentId,
})

export const getComments = id => async dispatch => {
  const res = await csrfFetch(`/api/photos/${id}/comments`)

  if (res.ok) {
    const comments = await res.json();
    dispatch(load(comments, id));
  }
}

export const createComment = (data, imageId) => async dispatch => {
  console.log('entered store', data, imageId)
  const res = await csrfFetch(`/api/photos/${imageId}/comments`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    const comment = await res.json();
    dispatch(add(comment));
    return comment;
  }
}

export const updateComment = payload => async dispatch => {
  const res = await csrfFetch(`/api/comments/${payload.id}`, {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (res.ok) {
    const newComment = await res.json();
    console.log('after res.json', newComment);
    dispatch(add(newComment));
    return newComment;
  }
}

export const deleteComment = id => async dispatch => {
  const res = await csrfFetch(`/api/comments/${id}`, {
    method: 'delete',
  });

  if (res.ok) {
    await res.json();
    dispatch(remove(id));
  }
}


const initialState = {};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {

    case LOAD_COMMENTS: {
      const newState = {};
      action.comments.forEach(comment => {
        newState[comment.id] = comment;
      })
      return {
        ...state,
        ...newState
      }
    }

    case ADD_COMMENT: {
      return {
        ...state,
        [action.comment.id]: action.comment,
      }
    }

    case REMOVE_COMMENT: {
      const newState = { ...state };
      delete newState[action.commentId];
      return newState;
    }

    default:
      return state;
  }
}

export default commentsReducer;
