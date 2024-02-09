import React from 'react';
import contactimg from '../../assets/imges/busnestratigy.jpg'
import mittingRom from '../../assets/imges/mittingrom.jpg'
import callimage from '../../assets/imges/low-angle-businessmen-shaking-hands.jpg'

const Contact = () => {
    return (
        <div className='bg-[#5d4eff]'>


           <div className=' my-10 py-11 container mx-auto flex justify-between text-white'>

           <div className='w-full text-black pr-8'>
               <img src={callimage} alt="" />
            </div>


            <div className='w-full text-white'>
                <h1 className='font-bold text-4xl'> Contact || us</h1>

               <div>
                <h1>Name</h1>
               <input type="text" placeholder='name' />
               </div>
               <div>
                <h1>Name</h1>
               <input type="text" placeholder='email' />
               </div>
               <div>
                <h1>Description</h1>
               <input type="text" placeholder='name' className='w-full' />
               </div>
            </div>

           </div>


           <div className='container mx-auto'>
           <div className=" pb-10 diff aspect-[16/9]">
  <div className="diff-item-1">
    <img alt="daisy" src="https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZmaWNlJTIwd29ya3xlbnwwfHwwfHx8MA%3D%3D" />
  </div>
  <div className="diff-item-2">
    <img alt="daisy" src="https://cdn.pixabay.com/photo/2015/01/08/18/26/man-593333_1280.jpg" />
  </div>
  <div className="diff-resizer"></div>
</div>
           </div>
           
          
        </div>
    );
};

export default Contact;