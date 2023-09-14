import React, { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';

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
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <div className="fixed inset-0 mock-overlay_backdrop_gradient transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full min-w-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
            >

              <div className="mock-overlay_modal transform overflow-hidden rounded-md bg-grey-950 border border-grey-800 px-4 pb-4 pt-5 text-left shadow-xl transition-all w-full sm:p-6 sm:max-w-screen-xs md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg flex flex-col items-center justify-center">
                <div className="mb-5">
                    <div className="mt-3 text-center flex flex-col items-center justify-center sm:mt-5">
                      <h1 className="text-grey-50 font-bold text-4xl md:text-5xl pb-3">Coming soon</h1>
                      <div className="mt-2">
                          <p className="text-md text-grey-500">
                            Follows us on Telegram and X to learn more about Uranium3o8!
                          </p>
                          <div className="flex">
                          <Link href="https://twitter.com/Uranium3o8" className="text-grey-50 flex">
                          <svg viewBox="0 0 24 24" aria-hidden="true" className="fill-white"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
                            Follow @TwitterDev
                          </Link>
                          </div>
                      </div>
                      <div>
                          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 496 512"><path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"/></svg>
                      </div>
                    </div>
                </div>
                https://twitter.com/Uranium3o8
              </div>
            </Transition.Child>
          </div>
        </div>
      </div>
    </Transition.Root>
  );
}