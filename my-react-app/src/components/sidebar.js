import React from "react";

const SideBar=()=>{
    return (
        <div className='nav bg-black h-screen w-28 '>
        <div className='img px-4 py-8'>
          <img src='https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg' className=''></img>
          <button type="button" className='text-yellow-400 bg-zinc-800 rounded-full text-xs mt-3  px-2 items-center'>Subscribe - </button>
        </div>
        <br></br>
        <div className='nav-item flex flex-col justify-center items-center gap-10'>
          <div className='text-white  hover:scale-110'>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path fill='grey' d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" /></svg>
            <p className='hidden  hover:block'>My Space</p>
          </div>
 
          <div className='text-white hover:scale-110'>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path fill="grey" d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
            <p className='hidden  hover:block'>Search</p>
          </div>
 
          <div className='text-white hover:scale-110'>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path fill="grey" d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" /></svg>
            <p className='hidden  hover:block'>Home</p>
          </div>
 
          <div className='text-white hover:scale-110'>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path fill="grey" d="M320-120v-80H160q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v480q0 33-23.5 56.5T800-200H640v80H320ZM160-280h640v-480H160v480Zm0 0v-480 480Z" /></svg>
            <p className='hidden  hover:block'>T V</p>
          </div>
 
 
          <div className='text-white hover:scale-110'>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path fill="grey" d="m160-800 80 160h120l-80-160h80l80 160h120l-80-160h80l80 160h120l-80-160h120q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800Zm0 240v320h640v-320H160Zm0 0v320-320Z" /></svg>
            <p className='hidden  hover:block'>Movies</p>
          </div>
 
 
          <div className='text-white hover:scale-110'>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path fill="grey" d="M224-288q45-35 70.5-85T320-480q0-57-25.5-107T224-672q-31 42-47.5 91T160-480q0 52 16.5 101t47.5 91Zm256 128q55 0 106.5-17.5T680-230q-57-46-88.5-111.5T560-480q0-73 31.5-138.5T680-730q-42-35-93.5-52.5T480-800q-55 0-106.5 17.5T280-730q57 46 88.5 111.5T400-480q0 73-31.5 138.5T280-230q42 35 93.5 52.5T480-160Zm256-128q31-42 47.5-91T800-480q0-52-16.5-101T736-672q-45 35-70.5 85T640-480q0 57 25.5 107t70.5 85ZM480-480Zm0 400q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" /></svg>
            <p className='hidden  hover:block'>Sports</p>
          </div>
 
          <div className='text-white hover:scale-110'>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path fill="grey" d="m260-520 220-360 220 360H260ZM700-80q-75 0-127.5-52.5T520-260q0-75 52.5-127.5T700-440q75 0 127.5 52.5T880-260q0 75-52.5 127.5T700-80Zm-580-20v-320h320v320H120Zm580-60q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm-500-20h160v-160H200v160Zm202-420h156l-78-126-78 126Zm78 0ZM360-340Zm340 80Z" /></svg>
            <p className='hidden  hover:block'>Categories</p>
          
  
          </div>
        </div>
      </div>
    );
}

export default SideBar;