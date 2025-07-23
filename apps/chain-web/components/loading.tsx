import {motion} from "motion/react"

export function Loading(){
    
    return (
       <div className="flex flex-col justify-center items-center h-full gap-4">
         <div className="flex justify-center items-center gap-2">
            <motion.div
            initial={{
                y : 0
            }}
            animate={{
                y: [0,10,0]
            }}
            transition={{
                duration : 1,
                delay : 0,
                ease : "easeInOut",
                repeat : Infinity,
                repeatType:"loop",
            }}
            className="w-4 h-4 rounded-full bg-gradient-to-b from-border to-border/80">

            </motion.div>
            <motion.div 
            initial={{
                y : 0
            }}
            animate={{
                y: [0,10,0]
            }}
             transition={{
                duration : 1,
                delay : 0.2,
                ease : "easeInOut",
                repeat : Infinity,
                repeatType:"loop",
            }}
            className="w-4 h-4 rounded-full bg-gradient-to-b from-border to-border/80">

            </motion.div>
            <motion.div
             initial={{
                y : 0
            }}
            animate={{
                y: [0,10,0]
            }}
             transition={{
                duration : 1,
                delay : 0.4,
                ease : "easeInOut",
                repeat : Infinity,
                repeatType:"loop",
            }}
            className="w-4 h-4 rounded-full bg-gradient-to-b from-border to-border/80">

            </motion.div>
           
        </div>
         <p>Loading...</p>
       </div>
    )
}