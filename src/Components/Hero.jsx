import React from 'react'
import resume from './Tushti_Resume.pdf'

const Hero = () => {
  return (
    <>
<section id="home">
	<div className="bg-black text-white py-20">
		<div className="container mx-auto flex flex-col md:flex-row items-center my-6 md:my-18 justify-around">
			<div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
				<h1 className="sm:text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose font-serif ">Tushti Adlakha</h1>
				<h3 className="sm:text-2xl ml-4 md:text-3xl leading-relaxed md:leading-snug mb-2 ">A Software Developer</h3>
				<p className="text-sm mt-4 ml-4 md:text-base text-gray-50 mb-4">I am eager to leverage my skills and knowledge to contribute to innovative projects and make a positive impact in the tech industry.</p>
				
				<div class="ml-4 text-yellow-300 home_social mt-5 gap-4 container flex flex-row text-2xl items-center">
                    <a href="https://www.linkedin.com/in/tushtiadlakha" target="_blank" rel="noopener noreferrer" class="home__social-icon"><i class='bx bxl-linkedin'></i></a>
                    <a href="https://twitter.com/Tushti_adlakha" target="_blank" rel="noopener noreferrer" class="home__social-icon"><i class='bx bxl-twitter' ></i></a>
                    <a href="https://github.com/Tushtiadlakha" target="_blank" rel="noopener noreferrer" class="home__social-icon"><i class='bx bxl-github' ></i></a>
					<a href={resume} class="addMore" title="Resume" target="_blank" rel="noopener noreferrer" download="Tushti-Resume-document"><i class='bx bx-download' ></i></a>
				</div>
				
			</div>
				<img className='animate__animated animate__zoomInDown h-2/3 ' alt="tushti" src="./images/ProjectImages/me2.png"/>
		</div>
	</div>
	
			
</section>
    </>
  )
}

export default Hero