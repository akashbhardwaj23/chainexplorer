import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {animate, motion} from "motion/react"

export default function Videocard(){
    const [hovered, setHovered] = useState(false)
    const videoRef = useRef<HTMLVideoElement | null>(null)

    const handleMouseEnter = async () => {
        console.log("here ")
        if (videoRef.current){
            console.log("playing....")
            document.addEventListener("mouseenter", () => {
                videoRef.current?.play()
            })
            // await videoRef.current.play()
        }
    }
    
    useEffect(() => {
        if(videoRef.current){
            const video = videoRef.current
            videoRef.current.addEventListener("mouseenter", () => {
                video.play()
            })

             videoRef.current.addEventListener("mouseleave", () => {
                video.pause()
            })
            
        }

    }, [videoRef.current])

    const handleMouseLeave = async () => {
        if(videoRef.current){
            console.log("Pause....")
            videoRef.current.pause()
        }
    }

    return (
        <div className="min-h-screen max-w-4xl mx-auto mt-96">
            {/* <div className="flex items-center mb-4">
                <h1 className="text-5xl">Made for All</h1>
            </div> */}
                <motion.div className="shadow-[10px_12px_0px_0px_rgba(0,_0,_0,_0.8)]" initial={{
                    z: 0
                }} whileInView={{
                    z:100
                }}>
                    {/* <Image src={'/hero.png'} width={600} height={600} alt="hero" className="h-full w-full object-cover rounded-[10px]" /> */}
                    <motion.video src="/hero2.mp4" ref={videoRef} autoPlay className="h-full w-full object-cover" muted></motion.video>
                </motion.div>
        </div>
    )
}