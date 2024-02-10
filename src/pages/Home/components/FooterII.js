import { Link } from 'react-router-dom';

export const FooterII = () => {
  return (
    <div className='flex place-content-center	'>
      <Link to="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg m-2 shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/assets/images/DIS.png" alt="DIS" />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Deutsche Internationale Schule</h5>
        </div>
      </Link>
      <Link to="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg m-2 shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/assets/images/EIS.png" alt="EIS" />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Français Internationale École</h5>
        </div>
      </Link>
      <Link to="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg m-2 shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/assets/images/FIS.png" alt="FIS" />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">English International School</h5>
        </div>
      </Link>
    </div >
  );
};
