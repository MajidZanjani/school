export const Info = () => {

  function hideInfo() {
    const infoBox = document.getElementById("infoBox");
    infoBox.classList.add("invisible");
  }

  return (
    <div id="infoBox" onClick={hideInfo} tabIndex="-1" aria-hidden="true" className="invisible absolute m-5 bg-slate-900 opacity-80  rounded-lg shadow dark:bg-gray-700 h-full">
      <p id="info" className="p-8 text-white">
        test information
      </p>
    </div>
  )
}
