import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(()=>{
    const tl=gsap.timeline({scrollTrigger:{
       trigger:'.i-am-masked',
      // markers:true,
      start:'10% 8%',
      end:'30% top',
      // scrub:true,
      toggleActions:"play none none reverse",
      pin:true
    }})
    const tl2=gsap.timeline({scrollTrigger:{
      trigger:'.mask-svg',
      // markers:true,
      start:'-84% 3%',
      end:'29% top',
      scrub:1,
      // pin:true,
    }})
    const tl3=gsap.timeline({scrollTrigger:{
      // markers:true,
      trigger:".special-text-cont2",
      scrub:true,
      // toggleActions:"play none none reverse",
      // pin:true,
      // pinSpacing:'50%',
      start:"0% 30%",
      end:"center 30%",
    }})
 
    // tl.add('dad')

    tl.to('.hero-text-img',{
     opacity:0,
    //  duration:0.5,
    },0)
   
    tl.to('.contain-play-btn',{
     opacity:0,
    //  duration:0.5,
    },0.2)

    tl.to('.last-img',{
     opacity:0,
    //  duration:0.5,
    },0.3)


    // tl2.to(".mask-svg",{
    //   y:200
    // })
    tl2.to('.i-am-masked',{
  maskSize:'30vw 30vh',
  duration:1.6,
 },0)
    tl2.to('.i-am-masked',{
opacity:0,
duration:1.6
 },2)

tl3.add("sad")

tl3.fromTo(".special-text-cont2",{
  opacity:0,
  borderRadius:'0%'
  // delay:3
},{
opacity:1,
duration:1,
borderRadius:'50%'
},'sad')

tl3.to(".mask-svg",{
  y:-250,
  duration:1
},'sad')


//  tl3.fromTo(".special-text-cont2",{
//   opacity:0,
//   delay:5,
// },{
//   opacity:1,
//   duration:1
//  })

 

  })
  return (
    <>
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <img className='mask-svg absolute top-[30%] ml-54 z-100 w-64' src="public/images/mask.svg" alt="" />
      <div className="contain-bg-image">
      <img className='i-am-masked w-full h-screen object-cover absolute top-0 left-0 z-0' src="/images/hero-bg.webp" alt="" />
      </div>
      <img className='hero-text-img absolute top-0' src="/images/hero-text.webp" alt="" />
      
      <div className="contain-play-btn cursor-pointer flex items-center justify-center absolute inset-x-[47.4%] inset-y-[50%] w-20 h-20 bg-white  border-2 border-transparent rounded-[140px] z-400">
      <img className='w-18 p-4 ml-1 cursor-pointer' src="public/images/play.png" alt="" />
      </div>
      <img className='last-img relative top-[34vw]' src="public/images/watch-trailer.png " alt="" />
      {/* <img src=" public/images/x-logo.svg" alt="" /> */}


<div className="special-text-cont2 flex flex-col items-center opacity-0 h-screen transition translate-y-44">
 <img className='w-74' src="/images/logo.webp" alt="" />
  <h1 className='text-9xl text-center font-black bg-linear-to-r from-pink-500 via-red-400 to-orange-500 bg-clip-text text-transparent'>Coming <br /> In November <br /> 2026</h1>
  <div className="contain-2-big-companys flex justify-center gap-20 mt-5">
  <img className='w-28' src="/images/ps-logo.svg" alt="" srcset="" />
  <img className='w-44' src="/images/x-logo.svg" alt="" srcset="" />
  </div>
</div>

    </div>
      {/* <img className='absolute cursor-pointer inset-x-[50%] inset-y-[50%] bg-white border-2 border-transparent rounded-4xl' src="public/images/play.svg" alt="" /> */}
      {/* <img src="public/images/overlay.webp" alt="" /> */}
    </>
  )
}

export default Hero
