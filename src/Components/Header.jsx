import React from 'react'

const Header = () => {
  return (
    <>
<div class="fixed bottom-4 left-1/2 transform -translate-x-1/2 inline-flex left-0 mx-auto justify-between bg-[#ffffff] bg-opacity-10 md:w-11/12 rounded-3xl">
      <a
        aria-current="page"
        class="inline-flex flex-col items-center text-xs font-medium py-3 px-4 text-blue-400 flex-grow"
        href="#home"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12.71 2.29a1 1 0 0 0-1.42 0l-9 9a1 1 0 0 0 0 1.42A1 1 0 0 0 3 13h1v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7h1a1 1 0 0 0 1-1a1 1 0 0 0-.29-.71zM6 20v-9.59l6-6l6 6V20z"/></svg>
        <span class="sr-only">Home</span>
      </a>
      <a
        class="inline-flex flex-col items-center text-xs font-medium text-blue-400 py-3 px-4 flex-grow"
        href="#education"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 2.01H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.998 5 19.815 5 19.01c0-.101.009-.191.024-.273c.112-.575.583-.717.987-.727H20c.018 0 .031-.009.049-.01H21V4.01c0-1.103-.897-2-2-2zm0 14H5v-11c0-.806.55-.988 1-1h7v7l2-1l2 1v-7h2v12z"/></svg>
      </a>
      <span class="sr-only">Education</span>
      {/* <button class="relative inline-flex flex-col items-center text-xs font-medium text-white py-3 px-6 flex-grow">
        <div class="absolute bottom-5 p-3 rounded-full border-4 border-white bg-blue-600">
          <svg
            class="w-8 h-8"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <span class="sr-only">Chat</span>
      </button> */}
      <a
        class="inline-flex flex-col items-center text-xs font-medium text-blue-400 py-3 px-4 flex-grow"
        href="#projects"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2.165 19.551c.186.28.499.449.835.449h15c.4 0 .762-.238.919-.606l3-7A.998.998 0 0 0 21 11h-1V7c0-1.103-.897-2-2-2h-6.1L9.616 3.213A.997.997 0 0 0 9 3H4c-1.103 0-2 .897-2 2v14h.007a1 1 0 0 0 .158.551zM17.341 18H4.517l2.143-5h12.824l-2.143 5zM18 7v4H6c-.4 0-.762.238-.919.606L4 14.129V7h14z"/></svg>
        <span class="sr-only">Projects</span>
      </a>
      <a
        class="inline-flex flex-col items-center text-xs font-medium text-blue-400 py-3 px-4 flex-grow"
        href="#skills"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-3V2h-2v2h-4V2H8v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM5 20V7h14V6l.002 14H5z"/><path fill="currentColor" d="M7 9h10v2H7zm0 4h5v2H7z"/></svg>
        <span class="sr-only">skills</span>
      </a>
      
      <a
        class="inline-flex flex-col items-center text-xs font-medium text-blue-400 py-3 px-4 flex-grow"
        href="#achievements"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21 4h-3V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1H3a1 1 0 0 0-1 1v3c0 4.31 1.799 6.91 4.819 7.012A6.001 6.001 0 0 0 11 17.91V20H9v2h6v-2h-2v-2.09a6.01 6.01 0 0 0 4.181-2.898C20.201 14.91 22 12.31 22 8V5a1 1 0 0 0-1-1zM4 8V6h2v6.83C4.216 12.078 4 9.299 4 8zm8 8c-2.206 0-4-1.794-4-4V4h8v8c0 2.206-1.794 4-4 4zm6-3.17V6h2v2c0 1.299-.216 4.078-2 4.83z"/></svg>
        <span class="sr-only">Achievements</span>
      </a>
    </div>
    </>
  )
}

export default Header