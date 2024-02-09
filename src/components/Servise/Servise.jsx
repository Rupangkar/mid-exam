import React from 'react';
import './Servise.css'
import word from '../../assets/imges/word.png'
import excel from '../../assets/imges/excel.png'
import powerpoint from '../../assets/imges/powerpoint.png'
/* import exces from '../../assets/imges/microsoft execs.png' */
import exces from '../../assets/imges/microsoft execs .png'



const Servise = () => {
    return (
        <div className='service pb-7'>
            <div className='container mx-auto'>
                <h1 className=' font-bold text-6xl text-center pt-10 text-white'>What We Do</h1>
                <div className=' boy flex gap-5 justify-between items-center text-justify my-10 bg-white p-10'>
                <div className='cart gap-5'>
                    <img className='w-1/5 ms-28 ' src={word} alt="" />
                    <h1 className='text-2xl font-semibold my-4 text-[]'> WEB HTML</h1>
                    <p>
                    The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript</p>
<button className='botton border rounded my-5 p-3'>CLICK ME</button>

                   
                </div>
                <div>
                <img className='w-1/5 ms-28' src={excel} alt="" />
                    <h1 className='text-2xl font-semibold my-4'> WEB CSS</h1>
                    <p>
                    Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</p>
<button className='botton border rounded my-5 p-3'>CLICK ME</button>
                </div>
                <div>
                <img className='w-1/5 ms-28' src={powerpoint} alt="" />
                    <h1 className='text-2xl font-semibold my-4'>JAVA SCRIPT</h1>
                    <p>
                    JavaScript, often abbreviated as JS, is a programming language and core technology of the World Wide Web, alongside HTML and CSS. As of 2024, 98.9% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.</p>
<button className='botton border rounded my-5 p-3'>CLICK ME</button>
                </div>
                <div>
                 <img className='w-1/5 ms-28' src={exces} alt="" /> 
                    <h1 className='text-2xl font-semibold my-4'>WEB REACT</h1>
                    <p>
                    React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.</p>
<button className='botton border rounded my-5 p-3'>CLICK ME</button>
                </div>
                </div>
        
            </div>
        </div>
    );
};

export default Servise;