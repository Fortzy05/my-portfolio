import React,{useState} from "react";
import {BsFillMoonStarsFill} from "react-icons/bs";
import {AiFillLinkedin, AiFillYoutube, AiFillTwitterCircle} from "react-icons/ai";
import deved from "../public/dev-ed-wave.png"
import design from "../public/design.png"
import code from "../public/code.png"
import consulting from "../public/consulting.png"
import web1 from "../public/web1.png"
import web2 from "../public/web2.png"
import web3 from "../public/web3.png"
import web4 from "../public/web4.png"
import web5 from "../public/web5.png"
import web6 from "../public/web6.png"

const App = () => {
const [darkMode, setDarkMode] = useState(false)

  return(
    <div className={darkMode ? "dark" : ""}>
  <main className=" bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900" >

    <section className="min-h-screen">
<nav className="py-10 mb-12 flex justify-between">
  <h1 className="text-xl font-burtons">devfortune</h1>
  <ul className="flex items-center">
    <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl"/></li>
    <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a></li>
  </ul>
</nav>
<div className="text-center p-10">
  <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl"> Fortune Omorodion</h2>
  <h3 className=" text-2xl py-2 md:text-3xl ">Software Developer</h3>
  <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
In my role as a frontend developer, I specialize in creating engaging and intuitive user interfaces for web applications. I am proficient in HTML, CSS, and JavaScript, utilizing these technologies to craft visually appealing designs that prioritize user experience. Through responsive design techniques, I ensure that the applications I work on seamlessly adapt to different devices and screen sizes. By collaborating closely with designers and backend developers, I bring static designs to life and enable seamless interactions. I also stay updated on the latest frontend technologies and best practices, incorporating them into my work to deliver optimal performance and aesthetics.
</p>
</div>
<div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
<AiFillTwitterCircle />
<AiFillLinkedin />
<AiFillYoutube />
</div>
<div className="relative pb-[56.25%] overflow-hidden bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto md:h-96 md:w-96 lg:w-[700px] lg:h-[500px]">
  <img className="absolute w-full h-full object-cover" src={deved} alt="" />
  </div>
    </section>
<section>
  <div>
  <h3 className="text-3xl py-1">Services I offer</h3>
  <p className="text-md py-2 leading-8 text-gray-800">Since the begining of my journey as a frontend developer, I've done remote work for <span className="text-teal-500">agencies</span> consulted for <span className="text-teal-500">startups</span> and collaborated with talented people to create digital products for both business and consumer use. </p>
  <p className="text-base py-2 leading-8 text-gray-800">I offer from a wide range of services, including programming and teaching. </p>
  </div>
  <div className="lg:flex gap-10">
    <div className="text-center  shadow-lg p-10 rounded-xl my-10">
      <img className="w-[100px] h-[100px] mx-auto" src={design} alt="" />
      <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
      <p className="py-2">Creating elegant designs suited for your needs following core design theory</p>
      <h4 className="py-4 text-teal-600">Design tools I use</h4>
      <p className="text-gray-800 py-1">Photoshop</p>
      <p className="text-gray-800 py-1">Illustrator</p>
      <p className="text-gray-800 py-1">Figma</p>
    </div>
    <div className="text-center  shadow-lg p-10 rounded-xl my-10">
      <img className="w-[100px] h-[100px] mx-auto" src={code} alt="" />
      <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
      <p className="py-2">Creating elegant designs suited for your needs following core design theory</p>
      <h4 className="py-4 text-teal-600">Design tools I use</h4>
      <p className="text-gray-800 py-1">Photoshop</p>
      <p className="text-gray-800 py-1">Illustrator</p>
      <p className="text-gray-800 py-1">Figma</p>
    </div>
    <div className="text-center  shadow-lg p-10 rounded-xl my-10">
      <img className="w-[100px] h-[100px] mx-auto" src={consulting} alt="" />
      <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
      <p className="py-2">Creating elegant designs suited for your needs following core design theory</p>
      <h4 className="py-4 text-teal-600">Design tools I use</h4>
      <p className="text-gray-800 py-1">Photoshop</p>
      <p className="text-gray-800 py-1">Illustrator</p>
      <p className="text-gray-800 py-1">Figma</p>
    </div>
  </div>
  </section>
  <section>
    <div>
      <h3 className="text-3xl py-1">Portfolio</h3>
      <p className="text-sm py-5 leading-8 text-gray-800">
As a frontend developer, I specialize in creating engaging and intuitive user interfaces for web applications. I am proficient in HTML, CSS, and JavaScript, utilizing these technologies to craft visually appealing designs that prioritize user experience. Through responsive design techniques, I ensure that the applications I work on seamlessly adapt to different devices and screen sizes. By collaborating closely with designers and backend developers, I bring static designs to life and enable seamless interactions. I also stay updated on the latest frontend technologies and best practices, incorporating them into my work to deliver optimal performance and aesthetics.
</p>
    </div>
    <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
      <div className="basis-1/3 flex-1">
        <img className="rounded-lg object-cover w-full h-full" src={web1} alt="" />
      </div>
      <div className="basis-1/3 flex-1">
        <img className="rounded-lg object-cover w-full h-full" src={web2} alt="" />
      </div>
      <div className="basis-1/3 flex-1">
        <img className="rounded-lg object-cover w-full h-full" src={web3} alt="" />
      </div>
      <div className="basis-1/3 flex-1">
        <img className="rounded-lg object-cover w-full h-full" src={web4} alt="" />
      </div>
      <div className="basis-1/3 flex-1">
        <img className="rounded-lg object-cover w-full h-full" src={web5} alt="" />
      </div>
      <div className="basis-1/3 flex-1">
        <img className="rounded-lg object-cover w-full h-full" src={web6} alt="" />
      </div>
    </div>
  </section>
  </main>
  </div>
  )
};

export default App;

