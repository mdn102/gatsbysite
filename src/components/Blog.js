import React from 'react';
import "./App.css";
import "./index.css";
import BlogCarousel from './BlogCarousel'

const Blog = () => {
  return (
    <section id="blog" className="section">
      <h2 className="text-center">BLOG</h2>
      <div className='homePage projectHome'>
        <div style={{ padding: '10px', justify_content: 'center', align_item: 'center' }}>
          <h4>Here are my recently challenges: </h4>
        </div>
        <BlogCarousel />
      </div>
    </section>
  )
}

export default Blog;
