import { Link, useLocation } from 'react-router-dom';
import { ContactList } from '../ContactsList/ContactList';

const Footer = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const isAboutPage = pathname.includes('about');

  return (
    <div className="flex flex-col items-center w-full mx-auto text-center text-surface bg-black border-t-[1px] border-neutral-600 border-t-solid">
      <div className="container pt-9">
        <ContactList color={'white'} small={true} />
      </div>

      {isAboutPage ? (
        <div className="w-full bg-black/5 p-4 text-center text-white">
          <Link to={'/admin'} className="hover:underline">
            © 2024 Memorial Service
          </Link>
        </div>
      ) : (
        <div className="w-full bg-black/5 p-4 text-center text-white">
          © 2024 Memorial Service
        </div>
      )}
    </div>
  );
};

export default Footer;
