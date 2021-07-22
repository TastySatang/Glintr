import { useDispatch } from "react-redux"


const EditPhotoForm = ({ image, hideForm }) => {
  const dispatch = useDispatch();

  const [content, setContent] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    const payload = {
      content,
    }


  }
}
