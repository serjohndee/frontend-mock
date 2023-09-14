import { Disclosure } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import ConnectWallet from '../../components/connectWallet'

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}

const Navbar: React.FC = () => {
  return (
    <Disclosure as="nav" className="bg-grey-950 w-full z-20">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 md:h-20 justify-between">
              <div className="flex w-full">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  {/* <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 bg-grey-800 hover:bg-grey-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button> */}
                </div>
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-12 w-auto"
                    src="/img/logo.png"
                    alt="Your Company"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 z-30">
                    <ConnectWallet />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar;