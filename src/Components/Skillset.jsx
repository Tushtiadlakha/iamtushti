import React from 'react'
import {Skills,Familiar} from '../data/Skillset'

const Skillset = () => {
  return (
    <>
        <section id="skills" className='container mx-auto lg:px-20 my-28'>
        <h3 class="text-3xl text-center md:text-left md:text-4xl leading-normal md:leading-relaxed mb-2 font-serif underline underline-offset-8">Skill Set</h3>
        {Skills?.length > 0 &&
        <div className='pl-3'>
          <div className='my-7 grid gap-5 grid-cols-3 md:grid-cols-6 content-center'>
            {Skills.map((x, index) =>
              <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label={x.skill} key={index}>
                <img src={x.logo} alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
                {x.skill}
              </div>
            )}
          </div>
        </div>
      }
      {Familiar?.length > 0 &&
        <div className='pl-3'>
          <h4 class="text-lg p-2 text-white tracking-loose"> Also familiar with: </h4>
        <div className='my-7 grid gap-5 grid-cols-3 md:grid-cols-6 content-center'>
          {Familiar.map((x, index) =>
            <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label={x.skill} key={index}>
              <img src={x.logo} alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
              {x.skill}
            </div>
          )}


        </div>

        </div>
      }
      </section>

    </>
  )
}

export default Skillset