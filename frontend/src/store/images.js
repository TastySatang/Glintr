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

  // if (images && images.length !== 0) {
  //   for (let i = 0; i < images.length; i++) {
  //     formData.append('images', image)
  //   }
  // }

  if (imageUrl) formData.append("image", imageUrl);

  const res = await csrfFetch(`/api/photos/`, {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData,
  });

  const data = await res.json();
  dispatch(setImage(data.user));
}

const initialState = { user: null };

const imageReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_IMAGE:
      newState = Object.assign({}, state);
      newState.image = action.payload;
      return newState;
    default:
      return state;
  }
}

export default imageReducer;
