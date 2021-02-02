import React from 'react';
import "./App.css";
import "./index.css";
import BlogCarousel from './BlogCarousel'

const Blog = () => {
  return (
    <div className='homePage projectHome'>
      <div style={{ padding: '10px', justify_content: 'center', align_item: 'center' }}>
        <h4>Here are my recently challenges: </h4>
      </div>
      <BlogCarousel />
    </div>
  )
}

export default Blog;
