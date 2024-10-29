import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPostThunk, deletePostThunk, fetchPostsThunk, updatePostThunk } from "../redux/thunks/PostThunks";

const PostPage = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [thumbnail, setThumbnail] = useState(null);

  const fetchPosts = async () => {
    dispatch(fetchPostsThunk());
  };

  useEffect(() => {
    fetchPosts();
  }, [dispatch]);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await dispatch(createPostThunk({ title, content, thumbnail }));

      setTitle("");
      setContent("");
      setThumbnail(null);

      console.log("Post created successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      <h1>Len CMS</h1>
      <div>
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
          <input type="text" placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
          <input
            type="file"
            placeholder="Thumbnail"
            accept="image/*"
            onChange={(e) => setThumbnail(e.target.files?.[0])} // Use e.target.files[0] to get the uploaded file
          />
          <button type="submit">Create Post</button>
        </form>
      </div>

      <table className="w-full">
        <thead>
          <tr>
            <td>Thumbnail</td>
            <td>Title</td>
            <td>Content</td>
            <td>Actions</td>
          </tr>
        </thead>

        <tbody>
          {loading ? (
            <tr>
              <td colSpan="3">Loading...</td>
            </tr>
          ) : (
            posts.map((post) => (
              <tr key={post.id}>
                <td>
                  <img src={`/public/posts/${post?.thumbnail}`} alt="" className="w-40" />
                </td>
                <td>{post.title}</td>
                <td>{post.content}</td>
                <td>
                  <button onClick={() => document.getElementById("edit-" + post.id).showModal()}>Edit</button>
                  <button onClick={() => dispatch(deletePostThunk({ id: post.id }))}>Delete</button>
                </td>

                <dialog id={"edit-" + post.id}>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      dispatch(updatePostThunk({ id: post.id, title: e.target.title.value, content: e.target.content.value, thumbnail: e.target.thumbnail.files?.[0] }));
                    }}
                  >
                    <input type="text" placeholder="Title" defaultValue={post.title} name="title" />
                    <input type="text" placeholder="Content" defaultValue={post.content} name="content" />
                    <input type="file" placeholder="Thumbnail" accept="image/*" name="thumbnail" />
                    <button type="submit">Update Post</button>
                  </form>
                </dialog>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PostPage;
