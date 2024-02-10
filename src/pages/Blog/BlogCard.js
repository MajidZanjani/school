import { Link } from "react-router-dom"

export const BlogCard = ({ id, date, title, desc, poster, author }) => {

  const styles = [
    "bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl"
    , "bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl"
    , "bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-l"
    , "bg-gradient-to-r from-purple-300 to-pink-500 hover:bg-gradient-to-bl"
    , "bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl"
    , "bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l"
  ];

  const style = `inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg ${styles[id]}`;

  return (
    <div className="p-2 mb-2 mx-2 border h-1/2 bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {(date) && (
        <>
          <div className="p2 flex place-content-between	">
            <div>Date:{date}</div>
            <div>Author:{author}</div>
          </div>
          <img className="rounded-t-lg h-60 w-auto" src={poster} alt="" />
        </>
      )}
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{desc.slice(0, 60)}..</p>
        <Link to="#" className={style}>
          Read more
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </Link>
      </div>
    </div>
  )
}



