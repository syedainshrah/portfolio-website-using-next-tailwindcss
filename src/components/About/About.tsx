import React from 'react'
import './About.css'

function About() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center py-12 px-6 md:px-16 bg-white rounded-md">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="about-img w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full border-2 border-t-slate-400 border-b-[#04AF70] border-r-[#04AF70] border-l-[#04AF70] shadow-black shadow-inner"></div>
      </div>

      {/* Text and Skill Bars Section */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-10 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-black">About Me</h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra.
        </p>

        {/* Skills List */}
        <div className="space-y-4">
          {/* Skill Bar 1 */}
          <div className="flex items-center justify-between">
            <span className="font-semibold text-sm sm:text-base text-black">UX</span>
            <div className="w-3/5 sm:w-4/5 relative">
              <div className="h-1 bg-gray-300 rounded-full">
                <div className="h-1 bg-[#04AF70] rounded-full w-4/5"></div>
              </div>
            </div>
          </div>

          {/* Skill Bar 2 */}
          <div className="flex items-center justify-between">
            <span className="font-semibold text-sm sm:text-base text-black">Website Design</span>
            <div className="w-3/5 sm:w-4/5 relative">
              <div className="h-1 bg-gray-300 rounded-full">
                <div className="h-1 bg-[#04AF70] rounded-full w-3/5"></div>
              </div>
            </div>
          </div>

          {/* Skill Bar 3 */}
          <div className="flex items-center justify-between">
            <span className="font-semibold text-sm sm:text-base text-black">App Design</span>
            <div className="w-3/5 sm:w-4/5 relative">
              <div className="h-1 bg-gray-300 rounded-full">
                <div className="h-1 bg-[#04AF70] rounded-full w-2/5"></div>
              </div>
            </div>
          </div>

          {/* Skill Bar 4 */}
          <div className="flex items-center justify-between">
            <span className="font-semibold text-sm sm:text-base text-black">Graphic Design</span>
            <div className="w-3/5 sm:w-4/5 relative">
              <div className="h-1 bg-gray-300 rounded-full">
                <div className="h-1 bg-[#04AF70] rounded-full w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About