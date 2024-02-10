import { Link } from "react-router-dom"

export const Hero = () => {
  return (
    <section className="bg-cover bg-no-repeat bg-[url('https://i0.wp.com/thesummerstudy.com/wp-content/uploads/2021/03/IMG_2425.jpg?resize=1100%2C1467&ssl=1')]">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl">School Time</h1>
        <p className="mb-8 text-lg font-normal text-gray-800 lg:text-xl sm:px-16 lg:px-48">We are here to make the School Time much more enjoyable. Let's make a different educational journey.</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <Link to="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Enroll now!
            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </Link>
          <Link to="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-gray-800 rounded-lg border border-gray-800 hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
            Learn more
          </Link>
        </div>
      </div>
    </section>
  )
}



