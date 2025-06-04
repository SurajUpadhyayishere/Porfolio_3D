import {motion} from "framer-motion";
import Spline from "@splinetool/react-spline";

const  HeroSection = () =>{
    return (
      <section
        className="h-screen bg-gradient-to-b from-violet-900 to-black flex xl:flex-row
        flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden"
      >
        {/* Left Section */}

        <div className="z-40 xl:mb-0 mb-[20%]">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              stiffness: 40,
              type: "spring",
              damping: 25,
              delay: 1.3,
              duration: 1.5,
            }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6"
          >
            Building Fast <br />
            Reliable Results
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              stiffness: 40,
              type: "spring",
              damping: 25,
              delay: 1.8,
              duration: 1.5,
            }}
            className="text-xl md:text-1x1 lg:text-2xl text-purple-200 max-w-2xl"
          >
            I’m an AI Engineer passionate about building intelligent, ethical
            systems that solve real-world challenges. From machine learning to
            deep learning, I thrive on turning data into impactful solutions. I
            blend creativity with technical expertise to push AI forward—driven
            by curiosity, purpose, and a vision for a smarter, more
            human-centered future
          </motion.p>
        </div>

        {/* Right Section */}

        <Spline className="absolute xl:right-[-28%] right-0 top-[-28%] lg:top-0" scene="https://prod.spline.design/Xa3XiEUL8rExHGhM/scene.splinecode" />
      </section>
    );
}







export default HeroSection