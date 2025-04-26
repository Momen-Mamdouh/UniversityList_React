
import { Link } from 'react-router-dom';
import emptySearchImg from '../../assets/EmptyComp/empty.svg';

const EmptyComponent = () => {
  return (
    <div className='flex items-center flex-col'>
     
        <img
          src={emptySearchImg}
          height={500}
          width={500}
          alt="No result found"
        />
      

      <h2 className="mb-[14px] mt-5 text-xl text-black font-semibold">
        Sorry, No result found!
      </h2>

      <p className="mb-8 text-lg w-1/2 text-center ">
        Please Enter A vaild Country Name from country list provided: (United Kingdom, 
        United States, Turkey, Kuwait, Jordan, Egypt, any middle East Country, ... )
      </p>

      <Link to="/" className={`bg-blue-600  p-2.5 hover:bg-yellow-400 duration-300 rounded-md` }>
        Go to home
      </Link>
    </div>
  );
};

export default EmptyComponent;
