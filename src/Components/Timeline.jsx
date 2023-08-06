import React from 'react'

const Timeline = () => {
  return (
<section id="education">
    <div class="bg-black text-white py-1">
    <div class="container mx-auto flex flex-col items-start md:flex-row mb-12">
      <div class="flex flex-col w-full mt-60 md:mt-70 lg:w-1/3 px-8">
        <p class="md:ml-10 text-3xl text-center md:text-left md:text-4xl leading-normal md:leading-relaxed mb-2 font-serif underline underline-offset-8">EDUCATIONAL QUALIFICATIONS</p>
      </div>
      <div class="ml-0 md:ml-12 lg:w-2/3 sticky">
        <div class="container mx-auto w-full h-full">
          <div class="relative wrap overflow-hidden p-10 h-full">
            <div class="border-2-2 border-yellow-555 absolute h-full border"
              style={{right: "50%", border: "2px solid #FFC100", borderRadius: "1%"}}></div>
            <div class="border-2-2 border-yellow-555 absolute h-full border"
              style={{left: "50%", border: "2px solid #FFC100", borderRadius: "1%"}}></div>
            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="order-1 w-5/12 px-1 py-4 text-right">
                <p class="mb-3 text-base text-yellow-300">9 CGPA</p>
                <h4 class="mb-3 font-bold text-lg md:text-2xl">Vellore Institute of Technology</h4>
                <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                  Master of Computer Applications
                </p>
                <p class="mb-3 text-base text-yellow-300">2022-2024</p>
              </div>
            </div>
            <div class="mb-8 flex justify-between items-center w-full right-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="order-1  w-5/12 px-1 py-4 text-left">
                <p class="mb-3 text-base text-yellow-300">9 CGPA</p>
                <h4 class="mb-3 font-bold text-lg md:text-2xl">University of Delhi (Keshav Mahavidyalaya)</h4>
                <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                  Bachelor of Science (Hons.) Computer Science
                </p>
                <p class="mb-3 text-base text-yellow-300">2019-2022</p>
              </div>
            </div>
            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="order-1 w-5/12 px-1 py-4 text-right">
                <h4 class="mb-3 font-bold text-lg md:text-2xl">St. Gregorios School, Delhi</h4>
                <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                  Class XII(Science) - 93.2% <br></br>
                  Class X - 10 CGPA
                </p>
                <p class="mb-3 text-base text-yellow-300">2007-2019</p>
              </div>
            </div>
          </div>
          </div>
      </div>
    </div>
  </div>
  </section>
  )
}

export default Timeline