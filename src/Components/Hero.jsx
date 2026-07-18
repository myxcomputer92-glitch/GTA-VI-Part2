import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(()=>{
    const tl=gsap.timeline({scrollTrigger:{
       trigger:'.i-am-masked',
      markers:true,
      start:'2% top',
      end:'12% top',
      scrub:true,
    }})
    const tl2=gsap.timeline({scrollTrigger:{
      trigger:'.i-am-masked',
      markers:true,
      start:'5% top',
      end:'12% top',
      scrub:1,
    }})
 
    // tl.add('dad')

    tl.to('.hero-text-img',{
     opacity:0,
     duration:2,
    })
   
    tl.to('.contain-play-btn',{
     opacity:0,
     duration:1.6,
    })

    tl.to('.last-img',{
     opacity:0,
     duration:1.6,
    })

    tl2.to('.i-am-masked',{
  maskSize:'30vw 30vh',
  duration:1.6,
 })

 

  })
  return (
    <>
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <img className='absolute top-[30%] ml-54 z-100 w-64' src="public/images/mask.svg" alt="" />
      <div className="contain-bg-image">
      <img className='i-am-masked w-full h-screen object-cover absolute top-0 left-0 z-0' src="/images/hero-bg.webp" alt="" />
      </div>
      <img className='hero-text-img absolute top-0' src="/images/hero-text.webp" alt="" />
      
      <div className="contain-play-btn cursor-pointer flex items-center justify-center absolute inset-x-[50%] inset-y-[50%] w-16 h-16 bg-white  border-2 border-transparent rounded-[40px]">
      <img className='w-12 p-4' src="public/images/play.png" alt="" />
      </div>
      <img className='last-img relative top-[27vw]' src="public/images/watch-trailer.png " alt="" />
      {/* <img src=" public/images/x-logo.svg" alt="" /> */}
    </div>
      {/* <img className='absolute cursor-pointer inset-x-[50%] inset-y-[50%] bg-white border-2 border-transparent rounded-4xl' src="public/images/play.svg" alt="" /> */}
      {/* <img src="public/images/overlay.webp" alt="" /> */}
    </>
  )
}

export default Hero
