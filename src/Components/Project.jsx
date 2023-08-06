import React from 'react'
import Projects from '../data/ProjectInfo'

const Project = () => {
  return (
    <>            
    <div id="projects" class="h-full">
      {Projects?.length > 0 &&
        <div class="pt-20 container mx-auto lg:px-20" >
          <h2 class="text-3xl text-center md:text-left md:text-4xl leading-normal md:leading-relaxed mb-2 font-serif underline underline-offset-8 ">Projects</h2>
          <div class='flex-wrap grid sm:grid-cols-1 md:grid-cols-3 gap-7 pb-10'>
          {Projects.map((x, index) =>
            
                <div >
                    <div class={`py-3 px-3 mt-20 bg-[${x.cardbg}] group hover:bg-[#F9F5F6] cursor-pointer transition ease-out duration-300`}> 
                        {/* <div>
                            <div class="w-4 h-1/5 bg-red-50	absolute right-0 -top-48 bg-purple-100 group-hover:bg-[#F9F5F6]"></div>
                            <img src={x.img} alt="https://www.pngegg.com/en/png-nllal/download"/>
                       </div> */}
                        <div class={`px-7 mt-10 mb-5 text-[${x.textcol}] `}>
                            {/* <h1 class="text-3xl font-bold group-hover:text-purple-300 transition ease-out duration-300">{index+1}</h1> */}
                            <h2  class="text-1xl mt-4 font-bold">{x.title}<span class="ml-2 text-1xl font-semibold">({x.text})</span></h2>
                            <p class="mt-2 line-clamp-2 opacity-80 group-hover:opacity-70 ">{x.about}</p>
                            <div class="mt-7">
                            <a href={x.link} target="_blank" rel="noopener noreferrer" class="mt-5 hover:shadow-md hover:shadow-slate-500 bg-[#20262E] font-semibold text-white py-2 px-4 border  border-transparent rounded">Go To Project</a>
                            </div>
                        </div>
                    </div>
                </div>
                )} 
            </div>        
  </div>
  }
</div>


    </>
  )
}

export default Project