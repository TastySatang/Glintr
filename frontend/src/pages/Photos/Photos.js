import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { createImage } from '../../store/images'
import { useDispatch, useSelector } from 'react-redux'

import './Photos.css'
import { set } from 'js-cookie'

const PostImage = () => {
  const [albumId, setAlbumId] = useState(0);
  const [imageUrl, setImageUrl] = useState(null);
  const [content, setContent] = useState('');
  // const [errors, setErrors] = useState([]);

  let history = useHistory();

  useEffect(() => {
    setAlbumId(0)
  }, [])
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user)

  const handleSubmit = async e => {
    e.preventDefault();

    const created = await dispatch(createImage({ userId: user.id, albumId, imageUrl, content }))
    setImageUrl(null)
    setContent('')

    if (created) {
      history.push(`/photos`)
    }
  };

  const updateFile = (e) => {
    const file = e.target.files[0];
    if (file) setImageUrl(file);
  };

  return (
    <>
      <div className='uploadContainer'>
        <label className='uploadLabel' >Upload an Image
          <form style={{ display: "flex", flexFlow: "column" }}
            onSubmit={handleSubmit}>

            <input
              className='photoField'
              type="text" placeholder='Give it a snappy title'
              onChange={e => setContent(e.target.value)}
            />

            <label className='fileselect'>
              <input
                type='file' onChange={updateFile}
              />
            </label>
            <button className='uploadButton' type="submit">Post photo</button>
          </form>
        </label>
      </div>
    </>
  )
}

export default PostImage;
