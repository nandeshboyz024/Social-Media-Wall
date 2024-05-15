import React from 'react';
import { useState } from 'react';
const DisplayPosts = ({ posts, onDeletePost,onAddComment,onToggleLike}) => {
  const [text,setText] = useState('');
  const handleDelete = (index) => {
    onDeletePost(index); // Call the delete handler function with the index of the post to delete
  };
  const handleComment = (index, text) => {
    onAddComment(index, text);
    setText('');
  };
  const handleLike = (index) => {
    onToggleLike(index);
  };
  return (
    <div className="display-posts" style={{marginTop:'20px'}}>
      {posts.length >= 1 ? (
        posts.slice().reverse().map((post, index) => (
          <div key={index} className="post" style={{textAlign:'justify', maxWidth:'50%'}}>
            <p><b><i>Post:</i></b> {post.content}</p>
            <div className="row">
              <div className="col-6">
                <button style={{marginTop:'10px',background:'none',border:'none'}} onClick={() => handleLike(posts.length - 1 - index)}>
                  { !post.isLiked ? (
                    <img src="media/heart1.png" style={{width:'30px'}} alt="this is heart" srcSet="" />
                  ):
                  (<img src="media/heart2.png" style={{width:'30px'}} alt="this is heart" srcSet="" />)
                  }
                </button>
              </div>
              <div className="col-6">
                <button className='action-btn' onClick={() => handleDelete(posts.length - 1 - index)}>Delete</button>
              </div>
            </div>
            <div className="add-comment">
              <input type="text" placeholder="comment here..." value={text} onChange={(e) => setText(e.target.value)} />
              <button className='action-btn' onClick={() => handleComment(posts.length - 1 - index, text)}> Post Comment</button>
            </div>
            <div style={{marginLeft:'35%'}}>
              <b><i>Comments:</i></b>
              {post.comments && post.comments.slice().reverse().map((comment, commentIndex) => (
                <p key={commentIndex}> {commentIndex+1}: {comment}</p>
              ))}
            </div>
            
          </div>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
};

export default DisplayPosts;
