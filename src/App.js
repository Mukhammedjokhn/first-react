import './App.css';
import React, { useState } from 'react';
import TableList from './components/TableList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', stack: 'Full-Stack' },
    { id: 2, title: 'Python', stack: 'MERN-Stack' },
    { id: 3, title: 'C++', stack: 'Cyber' },
    { id: 4, title: 'Ruby', stack: 'Back-End' }
  ])
  return (
    <div className='app w-50 mx-auto'>
      <form>
        <h4 className='text-center'>Create Your First Post</h4>
        <MyInput
          type="text"
          className='form-control'
          placeholder='Programming Language'
        />
        <MyInput
          type="text"
          className='form-control my-4'
          placeholder='Enter Your Favorite Stack'
        />
        <MyButton>
          Add Post
        </MyButton>
      </form>
      <TableList posts={posts} title="Programming Language" />
    </div>
  );
}

export default App;
