import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Jason = () => {

 gsap.registerPlugin(ScrollTrigger)
  useGSAP(()=>{
    const video=document.querySelector(".st-video")
 
    
    video.onloadedmetadata=()=>{
        
        const tl=gsap.timeline({scrollTrigger:{
                  // markers:true,
                  trigger:".st-video",
                  start:"top 20%",
                  end:"bottom 20%",
                  scrub:true,
                }})
      tl.fromTo('.st-video',
        {   
          opacity:0,
          currentTime:0,
         },
         {
          opacity:1,
          duration:1,
         currentTime:video.duration,
         }
        )
      tl.to(video,{
        opacity:0,
        duration:0.3
      })
      scrollTrigger.refresh()
      }

// const tl2=gsap.timeline({scrollTrigger:{
//     // markers:true,
//     trigger:'.st-video',
//     start:"380% 50%",
//     end:"440% 50%",
//     scrub:true
// }})

// tl2.to(".left-1-3,.right-1-3",{
//   y:"-40%"
// })


})

  return ( 

 <div className='cont-3 bg-black h-auto w-full'>
      <video className='st-video w-full h-auto' muted playsInline preload='auto' src="/videos/output1.mp4"></video>
    <div className="contain-2-childrens w-full flex justify-between">
      <div className="left-1-3 flex flex-col items-end gap-4 w-[50%]">
        <h1 className='text-yellow-300 text-7xl font-medium pt-[5vw] uppercase mr-[11vw]'>Jason <br /> Duval</h1>
        <h2 className='w-[46%] text-pink-300 text-4xl mr-[3vw] pt-5'>Jason wants an easy life, but things just keep getting <br /> harder.</h2>
        <p className='w-[50%] text-white text-lg pt-10 mr-[1.2vw]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
           Consectetur sit ducimus obcaecati porro,
            modi quos atque ipsa, nesciunt eius suscipit
             quis doloribus doloremque at numquam praesentium sunt iste
              voluptatum maiores?</p>
              <img className='w-[55%] h-[45vh] object-cover transition-all duration-100 hover:cursor-pointer hover:border-4 border-yellow-300 ml-[10vw] mt-[10vh]' src="/images/jason-2.webp" alt="" />
      </div>
      <div className="right-1-3 flex flex-col w-[50%]">
        <img className='w-[75%] h-[50vh] object-cover transition-all duration-100 hover:cursor-pointer hover:border-4 border-yellow-300 ml-[10vw] mt-4' src="/images/jason-1.webp" alt="" srcset="" />
        <img className='w-[50%] h-[40vh] object-cover transition-all duration-100 hover:cursor-pointer hover:border-4 border-yellow-300 ml-[10vw] mt-4' src="/images/jason-3.webp" alt="" srcset="" />
      </div>
    </div>

    </div>
  )
}

export default Jason
