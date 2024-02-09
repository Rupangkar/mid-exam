import React from 'react';
import './Faq.css'

const Faq = () => {
    return (
        <div className='bg-[#5d4eff] my-10 py-11'>
        <div className='container mx-auto'>
        <div className=''>
            <div className="dropdown">
  <div tabIndex={0} role="button" className="btn m-1 w-full hover:bg-[#41b31d] hover:text-white italic"> W E B  + </div>
  <div tabIndex={0} className="dropdown-content z-[1] card card-compact w-64 p-2 shadow bg-primary text-primary-content">
    <div className="card-body">
      <h3 className="card-title">Web Tatile!</h3>
      <p>"WebTitle Agency goes above and beyond to provide our firm’s default services operations thorough and accurate search work and services.</p>
    </div>
  </div>
</div> 


<div className="dropdown">
  <div tabIndex={0} role="button" className="btn m-1 w-full hover:bg-[#41b31d] hover:text-white italic">H T M + </div>
  <div tabIndex={0} className="dropdown-content z-[1] card card-compact w-90 p-2 shadow bg-primary text-primary-content">
    <div className="card-body">
      <h3 className="card-title">Html Taitle!</h3>
      <p>The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.</p>
    </div>
  </div>
</div> 


<div className="dropdown">
  <div tabIndex={0} role="button" className="btn m-1 w-full hover:bg-[#41b31d] hover:text-white italic">C S S+ </div>
  <div tabIndex={0} className="dropdown-content z-[1] card card-compact w-64 p-2 shadow bg-primary text-primary-content">
    <div className="card-body">
      <h3 className="card-title">Css Taitle!</h3>
      <p>JavaScript, often abbreviated as JS, is a programming language and core technology of the World Wide Web, alongside HTML and CSS..</p>
    </div>
  </div>
</div> 

<div className="dropdown">
  <div tabIndex={0} role="button" className="btn m-1 w-full hover:bg-[#41b31d] hover:text-white italic">R E A C T + </div>
  <div tabIndex={0} className="dropdown-content z-[1] card card-compact w-64 p-2 shadow bg-primary text-primary-content">
    <div className="card-body">
      <h3 className="card-title">React Title!</h3>
      <p>React is a free and open-source front-end JavaScript library for building user interfaces based on components.</p>
    </div>
  </div>
</div>






        </div>
        </div>


        </div>
    );
};

export default Faq;