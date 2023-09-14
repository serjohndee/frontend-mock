import React, { Fragment, useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import Link from 'next/link';
import styles from './mockOverlay.module.css';

export default function MockOverlay() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Simulate a loading delay (you can replace this with actual loading logic)
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timer); // Clear the timeout on component unmount
  }, []);

  return (
    <Transition.Root show={isOpen}>
    <div>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-800"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <div className="fixed inset-0 mock-overlay_backdrop_gradient transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full min-w-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-800"
              enterFrom="opacity-0 translate-y-100 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
            >
              <div className="mock-overlay_modal transform overflow-hidden rounded-md bg-grey-950 border border-b-0 border-grey-800 px-3 pb-4 pt-5 text-left shadow-xl transition-all w-full sm:p-6 sm:max-w-screen-xs md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg flex flex-col items-center justify-center">
                <div className="mb-5">
                    <div className="mt-3 text-center flex flex-col items-center justify-center sm:mt-5">
                      <h1 className="text-grey-50 font-semibold text-4xl md:text-5xl pb-3">Coming soon</h1>
                      <div className="mt-2 mb-8">
                          <p className="text-md text-grey-500">
                            Connect with us on Telegram and X to learn more!
                          </p>
                      </div>
                      <div>
                          <div className="flex flex-row gap-5 justify-center">
                            <Link href="https://twitter.com/Uranium3o8" className="flex gap-3 md:gap-4 items-center bg-grey-900 hover:bg-black transition border border-grey-700 px-4 md:px-5 py-3 rounded-full">
                              <svg className="fill-white w-6" viewBox="0 0 24 24" aria-hidden="true"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
                              <span className="text-grey-50">Follow @Uranium3o8</span>
                            </Link>
                            <Link href="https://t.me/Uranium3o8" className="flex gap-3 md:gap-4 items-center bg-[#0088cc] border-grey-600 px-4 md:px-5 py-3 rounded-full">
                            <svg className="fill-white w-6" viewBox="0 0 131 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.11569 46.7487C44.1157 31.5487 67.4157 21.4487 79.1157 16.5487C112.416 2.64868 119.416 0.248682 123.916 0.148682C124.916 0.148682 127.116 0.348683 128.616 1.54868C129.816 2.54868 130.116 3.84869 130.316 4.84869C130.516 5.84869 130.716 7.94868 130.516 9.54868C128.716 28.5487 120.916 74.6487 116.916 95.8487C115.216 104.849 111.916 107.849 108.716 108.149C101.716 108.749 96.4157 103.549 89.7157 99.1487C79.1157 92.2487 73.2157 87.9487 62.9157 81.1487C51.0157 73.3487 58.7157 69.0487 65.5157 62.0487C67.3157 60.2487 98.0157 32.2487 98.6157 29.7487C98.7157 29.4487 98.7157 28.2487 98.0157 27.6487C97.3157 27.0487 96.3157 27.2487 95.5157 27.4487C94.4157 27.6487 77.6157 38.8487 44.9157 60.9487C40.1157 64.2487 35.8157 65.8487 31.9157 65.7487C27.6157 65.6487 19.4157 63.3487 13.2157 61.3487C5.71569 58.9487 -0.284309 57.6487 0.215691 53.4487C0.515691 51.2487 3.51569 49.0487 9.11569 46.7487Z" fill="white"/>
                            </svg>
                              <span className="text-grey-50">Join our Telegram</span>
                            </Link>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </div>
    </Transition.Root>
  );
}