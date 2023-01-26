import React from 'react'
import postIt from './assets/post-it.png';
import './index.css'
const Header = () => {
   return (
     <>
       <div id="titleHeader" className="h-[70px] flex justify-start header pl-8 items-center max-w-full border-b-[2px] shadow-lg text-[#818181] border-[#9bc3eb]">
         <img src={postIt} className="h-[35px] mr-5"></img>
         <p className="text-3xl font-bold text-[30px] text-[#e9bf33]">Keep Notes</p>
       </div>
     </>
   );
}
export default Header;
