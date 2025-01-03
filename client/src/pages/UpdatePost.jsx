import { Alert, Button, FileInput, Select, TextInput } from 'flowbite-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function UpdatePost() {
  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);
  const { postId } = useParams();

  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/post/getposts?postId=${postId}`);
        const data = await res.json();

        if (!res.ok) {
          setPublishError(data.message);
          return;
        }

        if (data.posts && data.posts.length > 0) {
          setFormData(data.posts[0]);
          setPublishError(null);
        } else {
          setPublishError('Post not found');
        }
      } catch (error) {
        setPublishError('Error fetching post');
      }
    };

    fetchPost();
  }, [postId]);

  const handleUploadImage = async () => {
    try {
      if (!file) {
        setImageUploadError('Please select an image');
        return;
      }

      setImageUploadError(null);

      const uploadData = new FormData();
      uploadData.append('file', file);
      uploadData.append('upload_preset', 'kalpna2');
      uploadData.append('cloud_name', 'dvh3ig0yj');

      const res = await fetch('https://api.cloudinary.com/v1_1/dvh3ig0yj/image/upload', {
        method: 'POST',
        body: uploadData,
      });

      const data = await res.json();

      if (res.ok) {
        setImageUploadProgress(null);
        setImageUploadError(null);

        setFormData((prevData) => ({
          ...prevData,
          image: data.secure_url,
        }));
      } else {
        setImageUploadError('Image upload failed');
      }
    } catch (error) {
      setImageUploadError('Image upload failed');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/post/updatepost/${formData._id}/${currentUser._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }

      if (res.ok) {
        setPublishError(null);
        navigate(`/post/${data.slug}`);
      }
    } catch (error) {
      setPublishError('Something went wrong');
    }
  };

  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Update Post</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
            onChange={(e) =>
              setFormData((prevData) => ({ ...prevData, title: e.target.value }))
            }
            value={formData.title || ''}
          />
          <Select
            onChange={(e) =>
              setFormData((prevData) => ({ ...prevData, category: e.target.value }))
            }
            value={formData.category || 'uncategorized'}
          >
            <option value="uncategorized">Select a category</option>
            <option value="Social">Social</option>
            <option value="Love">Love</option>
            <option value="Sad">Sad</option>
          </Select>
        </div>

        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <Button
            type="button"
            gradientDuoTone="purpleToBlue"
            size="sm"
            outline
            onClick={handleUploadImage}
            disabled={imageUploadProgress}
          >
            {imageUploadProgress ? (
              <div className="w-16 h-16">
                <CircularProgressbar
                  value={imageUploadProgress}
                  text={`${imageUploadProgress || 0}%`}
                />
              </div>
            ) : (
              'Upload Image'
            )}
          </Button>
        </div>
        {imageUploadError && <Alert color="failure">{imageUploadError}</Alert>}
        {formData.image && (
          <img src={formData.image} alt="upload" className="w-full h-72 object-cover" />
        )}

        <div className="flex flex-col gap-4">
          <ReactQuill
            theme="snow"
            value={formData.content || ''}
            placeholder="Write something..."
            className="h-72 mb-12"
            required
            onChange={(value) => {
              setFormData((prevData) => ({
                ...prevData,
                content: value,
              }));
            }}
          />
        </div>

        <Button type="submit" gradientDuoTone="purpleToPink">
          Update Post
        </Button>

        {publishError && (
          <Alert className="mt-5" color="failure">
            {publishError}
          </Alert>
        )}
      </form>
    </div>
  );
}
