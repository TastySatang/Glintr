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

export const getImages = () => async dispatch => {
  const res = await fetch('/api/photos');

  if (res.ok) {
    const images = await res.json();
    dispatch(setImage(images))
  }
}

const initialState = {};

const imageReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_IMAGE:
      newState = { ...state };
      action.payload.forEach((image) => {
        newState[image.id] = image;
      });
      return newState;
    // console.log('newstate', newState);
    // newState = Object.assign({}, state);
    // newState.id = action.payload;
    // return newState;
    default:
      return state;
  }
}

export default imageReducer;
