import React from 'react';
import MenuBar from './MenuBar';
import DisplayPosts from './DisplayPosts';
import StickyDiv from './StickyDiv';
import "./Home.css";
import { useState } from 'react';
const Home = ({posts,setPosts,messages,setMessages}) => {
    const [text, setText] = useState('');
    const handlePost = () => {
        if (text.trim() !== '') {
            const newPost = { 
                content: text,
                isLiked:false,
                comments: [],    
            };
            setPosts([...posts, newPost])
            console.log(text);
            setText('');
        }
        else{
            console.log("can not add empty post");
        }
    };
    const handleDeletePost = (index) => {
        const updatedPosts = [...posts];
        updatedPosts.splice(index, 1); // Remove the post at the specified index
        setPosts(updatedPosts); // Update the posts state
      };
      const handleAddComment = (index, text) => {
        if (text.trim() !== '') {
        const updatedPosts = [...posts];
        updatedPosts[index].comments.push(text);
        setPosts(updatedPosts);
        }
        else{
            console.log("You have not commented.");
        }
      };
      const handleToggleLike = (index) =>{
        const updatedPosts = [...posts];
        updatedPosts[index].isLiked = !updatedPosts[index].isLiked;
        setPosts(updatedPosts);
      }
  return (
    <div>
        <MenuBar/>
       
        <div style={{marginLeft:'20px', margin:'10px'}}>
            <div className="add-post">
                <div>
                    <input type="text" placeholder="Write something..." style={{height:'100px', width:'400px'}} value={text} onChange={(e) => setText(e.target.value)} />
                </div>
                <div>
                    <button className='action-btn' onClick={handlePost}> Post</button>
                </div>
            </div>
            <div className='template' style={{ maxHeight: '60vh', overflowY: 'auto' }}>
            <DisplayPosts posts={posts} onDeletePost={handleDeletePost} onAddComment={handleAddComment} onToggleLike={handleToggleLike}/>
            <StickyDiv messages={messages} setMessages={setMessages}/>
            </div>
        </div>
    </div>

  );
}

export default Home;
