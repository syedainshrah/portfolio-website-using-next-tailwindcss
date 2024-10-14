import React from "react";

function Services() {
  return (
    <section
      id="section"
      className="min-h-screen flex flex-col items-center py-16 px-4 md:px-16 bg-white"
    >
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-black">Services</h2>
        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full max-w-screen-lg">
        {/* Service Card 1 - UI/UX */}
        <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-[#04af7085]"
              fill="#04AF70"
              viewBox="0 0 24 20"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c2.21 0 4-1.79 4-4S14.21 0 12 0 8 1.79 8 4s1.79 4 4 4zM4.8 10a3 3 0 00-2.8 2c-1 1.5 0 4 0 6h20c0-2 1-4.5 0-6a3 3 0 00-2.8-2H4.8z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-center mb-2 text-black">
            UI/UX
          </h3>
          <p className="text-gray-600 text-center">
            Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
            interdum.
          </p>
        </div>

        {/* Service Card 2 - Web Design */}
        <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="flex justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-[#04af7085]"
              fill="#04AF70"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4h16v16H4z M4 4L12 12l8-8"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-center mb-2 text-black">
            Web Design
          </h3>
          <p className="text-gray-600 text-center">
            Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
            interdum.
          </p>
        </div>

        {/* Service Card 3 - App Design */}
        <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="flex justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-[#04af7085]"
              fill="#04AF70"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 2H17M7 2v2h10V2M7 22h10v-2H7v2zM2 6h20v12H2z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-center mb-2 text-black">
            App Design
          </h3>
          <p className="text-gray-600 text-center">
            Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
            interdum.
          </p>
        </div>

        {/* Service Card 4 - Graphic Design */}
        <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="flex justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-[#04af7085]"
              fill="#04AF70"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 2L2 22h20L12 2z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-center mb-2 text-black">
            Graphic Design
          </h3>
          <p className="text-gray-600 text-center">
            Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
            interdum.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;