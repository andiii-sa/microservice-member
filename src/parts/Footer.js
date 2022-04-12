import { Link } from "react-router-dom";

export default function Footer() {
  function submit() {}

  return (
    <>
      <footer className="container px-4 mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/6">
            <h6 className="text-white">Company</h6>
            <ul className="mt-4">
              <li className="mt-2">
                <Link to="#">
                  <p className="text-indigo-500 hover:text-teal-500 hover:underline">
                    API Developer
                  </p>
                </Link>
              </li>
              <li className="mt-2">
                <Link to="#">
                  <p className="text-indigo-500 hover:text-teal-500 hover:underline">
                    Career
                  </p>
                </Link>
              </li>
              <li className="mt-2">
                <Link to="#">
                  <p className="text-indigo-500 hover:text-teal-500 hover:underline">
                    Our Story
                  </p>
                </Link>
              </li>
              <li className="mt-2">
                <Link to="#">
                  <p className="text-indigo-500 hover:text-teal-500 hover:underline">
                    New Soon
                  </p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/6">
            <h6 className="text-white">Student</h6>
            <ul className="mt-4">
              <li className="mt-2">
                <Link to="#">
                  <p className="text-indigo-500 hover:text-teal-500 hover:underline">
                    Get Schoolarship
                  </p>
                </Link>
              </li>
              <li className="mt-2">
                <Link to="#">
                  <p className="text-indigo-500 hover:text-teal-500 hover:underline">
                    Our Pathskills
                  </p>
                </Link>
              </li>
              <li className="mt-2">
                <Link to="#">
                  <p className="text-indigo-500 hover:text-teal-500 hover:underline">
                    All Features
                  </p>
                </Link>
              </li>
              <li className="mt-2">
                <Link to="#">
                  <p className="text-indigo-500 hover:text-teal-500 hover:underline">
                    Refund Policy
                  </p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/6">
            <h6 className="text-white">Touch Us</h6>
            <p className="mt-4 text-indigo-500 leading-loose">
              Micro Centre <br />
              Alleysi Block X No. 12 <br />
              Jakarta Selatan, Indonesia <br />
              +21 2020 5555
            </p>
          </div>
          <div className="w-full md:w-2/6">
            <h6 className="text-white">Promotions</h6>
            <p className="mt-4 text-indigo-500 ">
              Submit your email for new updates
            </p>
            <form onSubmit={submit} className="flex mt-6">
              <input
                type="text"
                className="bg-white focus:outline-none border-0 px-4 md:px-6 py-3 w-full md:w-1/2"
                placeholder="Your email address"
              />
              <button className="bg-orange-500 hover:bg-orang-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-4 md:px-6 py-3 whitespace-nowrap">
                Daftar Now
              </button>
            </form>
          </div>
        </div>
        <div className="border-t pt-8 mt-8 border-gray-800 text-center">
          <p className="text-indigo-500">
            2020 Copyright Flywe. All Rights Served
          </p>
        </div>
      </footer>
    </>
  );
}
