import React from 'react'
import resume from './Tushti_Resume.pdf'

const Footer = () => {
  return (
    <footer class="bg-black">
        <hr class="mt-20 h-1 bg-yellow-300 border-0 mx-60"></hr>
  <div class="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="flex justify-center text-teal-600 dark:text-teal-300">
    
      <h3 className='text-xl p-2 text-yellow-300 tracking-loose font-serif'>TUSHTI ADLAKHA</h3>
    </div>

    {/* <p
      class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400"
    >
      A Web Developer...
    </p> */}

    <ul class="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
      <li>
        <a
          class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
          href="#home"
        >
          Home
        </a>
      </li>

      <li>
        <a
          class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
          href="#education"
        >
          Academic
        </a>
      </li>

      <li>
        <a
          class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
          href="#projects"
        >
          Projects
        </a>
      </li>

      <li>
        <a
          class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
          href="#skills"
        >
          SkillSet
        </a>
      </li>

      <li>
        <a
          class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
          href="#achievements"
        >
          Achievements
        </a>
      </li>

      <li>
      <a href={resume} class="addMore text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75" title="Resume" target="_blank" rel="noopener noreferrer" download="Tushti-Resume-document">Resume<i class=' ml-1 bx bx-download' ></i></a>
      </li>

      
    </ul>

    <ul class="mt-8 pb-12 flex justify-center gap-6 md:gap-8">
      

      <li>
      <a href="https://www.linkedin.com/in/tushtiadlakha" target="_blank" rel="noopener noreferrer" class="home__social-icon"><i class='bx bxl-linkedin'></i></a>     
      </li>

      <li>
      <a href="https://twitter.com/Tushti_adlakha" target="_blank" rel="noopener noreferrer" class="home__social-icon"><i class='bx bxl-twitter' ></i></a>
      </li>

      <li>
      <a href="https://github.com/Tushtiadlakha" target="_blank" rel="noopener noreferrer" class="home__social-icon"><i class='bx bxl-github' ></i></a>
      </li>
    </ul>
  </div>
</footer>

  )
}

export default Footer