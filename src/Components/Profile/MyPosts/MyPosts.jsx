import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';



const MyPosts = (props) => {
  
  let postsElements = props.posts.map(p => <Post message={p.message} count={p.count} />);

  let newPostsElement = React.createRef();

  let onAddPost = () => {
   props.addPost();
  }

  let onPostChange = () => {
    let text = newPostsElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea onChange={onPostChange} ref={newPostsElement} value={props.newPostText} />
      </div>
      <div>
        <button onClick={onAddPost}>Add post</button>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;