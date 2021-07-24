import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { createImage } from '../../store/images'
import { useDispatch, useSelector } from 'react-redux'

const PostImage = () => {
  const [albumId, setAlbumId] = useState(0);
  const [imageUrl, setImageUrl] = useState(null);
  const [content, setContent] = useState('');
  const [errors, setErrors] = useState([]);

  let history = useHistory();

  useEffect(() => {
    setAlbumId(0)
  }, [])
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user)

  const handleSubmit = async e => {
    e.preventDefault();

    const created = await dispatch(createImage({ userId: user.id, albumId, imageUrl, content }))
    console.log(created);
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
      <div>
        <h1>Post</h1>
        <form style={{ display: "flex", flexFlow: "column" }}
          onSubmit={handleSubmit}>
          <label>content
            <textarea
              type="text" placeholder='content'
              onChange={e => setContent(e.target.value)}
            />
          </label>
          <label>files
            <input
              type='file' onChange={updateFile}
            />
          </label>
          <button type="submit">Post photo</button>
        </form>
      </div>
    </>
  )
}

export default PostImage;
