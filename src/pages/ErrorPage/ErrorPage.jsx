import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ErrorPage = ({ text, buttonName, link }) => {
  const { t } = useTranslation();

  return (
    <div className="grid pt-[10%] pb-[30%] place-content-center px-4 font-viola tracking-widest">
      <div className="text-center">
        <h1 className="text-9xl font-black">404</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Ой-йой!
        </p>

        {!text ? (
          <p className="mt-4 text-gray-900 font-manrope">
            {t('not_found_page')}
          </p>
        ) : (
          <p className="mt-4 text-2xl text-gray-900">{text}</p>
        )}

        {!link && !buttonName ? (
          <Link
            to="/"
            className="mt-6 inline-block rounded bg-black text-white px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
          >
            На главную
          </Link>
        ) : (
          <Link
            to={link}
            className="mt-6 inline-block rounded bg-black text-white px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
          >
            {buttonName}
          </Link>
        )}
      </div>
    </div>
  );
};

export default ErrorPage;
