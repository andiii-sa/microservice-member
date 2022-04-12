import React from "react";

export default function EmptyState() {
  return (
    <>
      <section className="h-screen flex justify-center flex-col items-center relative z-50 bg-white">
        <div className="w-full md:w-5/12 text-center py-12 mx-auto">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/illustration-myclass-empty.jpg`}
            alt="Success Join Premium Class"
          />
          <h1 className="text-3xl text-gray-900 mt-12">Time to invest</h1>
          <p className="text-lg text-gray-600 mt-4 mb-8 mx-auto text-center">
            It seems you dont have any transation
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`${process.env.REACT_APP_FRONTPAGE_URL}/courses`}
            className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 mt-5"
          >
            Mulai Belajar
          </a>
        </div>
      </section>
    </>
  );
}
