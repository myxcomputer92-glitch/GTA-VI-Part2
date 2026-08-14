import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React,{useRef} from 'react'

const Film = () => {

   gsap.registerPlugin(ScrollTrigger)

   const vidoe3_ref = useRef()
   
   useGSAP(()=>{

        //  const video3=document.querySelector(".rd-video")
        
        vidoe3_ref.current.onloadedmetadata=()=>{

           const tl5= gsap.timeline({scrollTrigger:{
                    markers:true,
                    trigger:vidoe3_ref.current,
                    start:"7% 30%",
                    end:"45% 30%",
                    scrub:true
           }})

      tl5.fromTo(vidoe3_ref.current,{
             currentTime:0,
             opacity:0
             // delay:5
           },{
            currentTime:vidoe3_ref.current.duration,
            opacity:1,
            duration:1,
           })
           .to(vidoe3_ref.current,{
            opacity:0
           })

      // scrollTrigger.refresh()

         }
   
       })

  return (
    <div className='cont-4 w-full h-auto flex flex-col items-center gap-40 bg-black'>
      <div className="contain-2-things relative pt-[9vh]">
      <img className='absolute' src="/images/overlay.webp" alt="" />
      <button className='cursor-pointer bg-white text-black w-44 h-14 border-2 border-transparent rounded-4xl absolute inset-y-[48vw] inset-x-[41vw] transition-all hover:border-2 hover:border-black'>Explore Leonida Keys</button>
      <video className='w-full h-screen' muted playsInline autoPlay loop src="/videos/postcard-vd.mp4"></video>
      </div>
      <video ref={vidoe3_ref} className='rd-video w-full h-auto'  muted playsInline preload='auto' src="/videos/output3.mp4"></video>
    </div>
  )
}
// public/images/overlay.webp
export default Film
