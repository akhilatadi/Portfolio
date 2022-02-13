import React from 'react';
import "./About.css";

function about() {
  return <div className='about'>

<div className='about_left'>
  <img  className='about_image' src= "https://ayumitanaka.net/static/media/face.e005b333.gif" alt="face"></img>
</div>

<div className='about_right'>
<div className='about_title'>Hi, I'm Akhila</div>
<div className='about_description'>
  <h4>A Front-end Developer based in Montreal</h4>
</div>
<div className='about_intro'>
A front-end developer who loves building creative websites and applications that make life easier. A hard worker who combines a passion for web development with expertise in web design. Have developed several websites and applications using HTML, CSS, Sass, JavaScript, React, TypeScript and Python.
</div>
</div>

  </div>;
}

export default about;
