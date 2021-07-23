import { csrfFetch } from "./csrf";

const LOAD = "image/LOAD"
const ADD_ONE = "image/ADD_ONE";
// const SET_IMAGE = 'image/SET_IMAGE'
const DELETE = 'image/DELETE'

const load = list => ({
  type: LOAD,
  list,
});

const addOne = image => ({
  type: ADD_ONE,
  image,
})

const removeOne = imageId => ({
  type: DELETE,
  imageId
})

// const setImage = (image) => ({
//   type: SET_IMAGE,
//   image,
// })

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
  dispatch(addOne(data.image));
  return res;
}

export const getImages = () => async dispatch => {
  const res = await csrfFetch('/api/photos');

  if (res.ok) {
    const images = await res.json();
    dispatch(load(images))
  }
}

export const getImage = (id) => async dispatch => {
  const res = await csrfFetch(`/api/photos/${id}`)

  if (res.ok) {
    const image = await res.json();
    dispatch(addOne(image));
  }
}

export const editContent = (payload) => async dispatch => {
  console.log('inside edit store', payload.id)
  const res = await csrfFetch(`/api/photos/${payload.id}`, {
    method: "PUT",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (res.ok) {
    console.log('afterapicall', res);
    const image = await res.json();
    console.log(image);
    dispatch(addOne({ image }))
    return image;
  }
}

export const deleteImage = id => async dispatch => {
  console.log('inside store', id);
  const res = await csrfFetch(`/api/photos/${id}`, {
    method: 'DELETE',
  });

  if (res.ok) {
    await res.json();
    dispatch(removeOne(id))
  }
}

const initialState = {};

const imageReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD:
      newState = { ...state };
      action.list.forEach((image) => {
        newState[image.id] = image;
      });
      return newState;
    case ADD_ONE:
      if (!state[action.image.id]) {
        const newState = {
          ...state,
          [action.image.id]: action.image
        };
        return newState
      }
      return {
        ...state,
        [action.image.id]: {
          ...state[action.image.id],
          ...action.image
        }
      }
    // case SET_IMAGE: {
    //   return { ...state, user: action.payload };
    // }
    case DELETE: {
      const newState = { ...state };
      delete newState[action.imageId]
      return newState
    }
    default:
      return state;
  }
}

export default imageReducer;
