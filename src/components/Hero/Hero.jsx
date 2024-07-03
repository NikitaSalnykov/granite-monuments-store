import photo from '../../assets/bg-monuments.jpg';
import { Button } from '../Button/Button';

export const Hero = () => {
  return (
    <div className="flex items-center justify-center bg-hero overflow-hidden">
      <div className="flex flex-col  gap-6 md:flex-row items-center max-w-8xl">
        <div className="w-full flex flex-col md:w-1/2 px-8 justify-center">
          <h2 className="text-4xl lg:text-5xl text-center  text-blue-900 leading-tight font-medium ">
            There’s a better way to talk with your customers.
          </h2>
          <p className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
            Help Scout is designed with your customers in mind. Provide email
            and live chat with a personal touch, and deliver help content right
            where your customers need it, all in one place, all for one low
            price.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button bg={false}>Get started</Button>
            <Button>Watch a Demo</Button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center grayscale-[100%] rounded-lg overflow-hidden">
          <img src={photo} />
        </div>
      </div>
    </div>
  );
};
