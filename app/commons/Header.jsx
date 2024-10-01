import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Logo from "@/images/logo.png"
import ThemeBtn from '../../components/ThemeBtn'
import Link from 'next/link'
import { redirect } from 'next/navigation'


const navigation = [
    { name: 'Home', href: '/', current: false },
    // { name: 'Sample Reports', href: '/sample-report', current: false },
    { name: 'About Us', href: '/about-us', current: false },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const Header = () => {
  return (
    <Disclosure as="nav" className="bg-[#EEF8FC] pt-4 my-header">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 sm:items-center justify-center items-stretch sm:justify-end">
            <div className="flex md:flex-1 sm:flex-grow-0 items-center">
              <Link href='/'>
                <Image
                  alt="Your Company"
                  src={Logo}
                  className="h-[58px] w-auto"
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-transparent text-[#222]' : 'text-[#222] hover:text-themeColor',
                      'transition-colors rounded-md md:px-3 sm:px-2 px-1 py-2 font-medium md:text-[20px] sm:text-[16px]',
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden absolute inset-y-0 right-0 md:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <ThemeBtn text="Contact Us" redirect="/contact-us" size="small"/>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-transparent text-[#222]' : 'text-[#222] hover:text-themeColor',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}

export default Header