
export const TeamCard = ({ id, name, photo, position, joiningDate, info }) => {

  const information = document.getElementById('infoBox');

  const idStr = id.toString()

  function showHideInfo() {
    if (information.classList.contains("invisible")) {
      const p = document.getElementById('info');
      p.innerHTML = info;
      information.classList.remove("invisible");
    } else {
      information.classList.add("invisible");
    }
  }


  return (
    <div id={idStr} className="w-full m-auto p-6 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center pb-10">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={photo} alt={name} />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{position}</span>
        <span className="text-sm text-center text-gray-500 dark:text-gray-400">Joined our School from {joiningDate}</span>
        <div className="flex flex-wrap mt-4 md:mt-6">
          <button onClick={showHideInfo} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More info</button>
          <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3">Message</button>
        </div>
      </div>
    </div>
  )
}



