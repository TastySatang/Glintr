import { csrfFetch } from "./csrf";

const SET_IMAGE = "image/setImage";

const setImage = (image) => ({
  type: SET_IMAGE,
  payload: image,
})


export const createImage = (image) => async dispatch => {
  const { userId, albumId, imageUrl, content } = image;
  const formData = new FormData();
  formData.append("userId", userId);
  formData.append("albumId", albumId);
  formData.append("content", content);

  if (imageUrl) formData.append("image", imageUrl);

  const res = await csrfFetch(`/api/photos/`, {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData,
  });

  const data = await res.json();
  console.log('monkey', data.image)
  dispatch(setImage(data.image));
  return res;
}

const initialState = {};

const imageReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_IMAGE:
      console.log('newstate', newState);
      newState = Object.assign({}, state);
      newState.id = action.payload;
      return newState;
    default:
      return state;
  }
}

export default imageReducer;
