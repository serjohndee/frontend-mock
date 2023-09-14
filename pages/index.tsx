import { IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import Navbar from './components/navbar';
import Purchase from './_purchase';

export const plex = IBM_Plex_Sans({
  weight: ['400','600','700'],
  subsets: ['latin'],
});

export const mono = IBM_Plex_Mono({
  weight: ['500'],
  subsets: ['latin'],
});

const Home: React.FC = () => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center bg-black dark:bg-grey-50 ${plex.className}`}
    >
      <Navbar />
      <div className="z-10 w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
        <Purchase />
      </div>
      <div className="eclipse left-3 bg-turquoise-500 z-1 hidden md:block"></div>
      {/* <div className="eclipse right-3 bg-lime-500 z-0"></div> */}
      <img className="absolute right-0 md:right-3 w-2/3 md:w-1/3 z-0" src="/img/image-1.jpeg"/>
    </main>
  );
}

export default Home;