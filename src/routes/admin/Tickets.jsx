import React from 'react'
import { Link } from 'react-router-dom';
import { Tab } from '@headlessui/react';
import { Disclosure } from '@headlessui/react'
import { RiFilterFill, RiSearchLine, RiArrowRightFill, RiArrowRightSLine, RiTicketLine, RiArrowLeftSLine, RiFileTextLine, RiWechatLine, RiTwitterLine, RiGithubFill } from "react-icons/ri";

const Tickets = () => {
    return (
        <div className='mb-4'>
            {/* Title */}
            <div className='flex items-center justify-between gap-y-4 mb-2'>
                <div>
                    <h1 className='font-bold text-gray-800 text-xl'>Overview</h1>
                    <div className='flex items-center gap-2 text-sm text-gray-600'>
                        <Link to="/" className='hover:text-gray-800 transition-colors'>Home</Link>
                        <span>-</span>
                        <span>Support Center</span>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <button className='bg-secondary-100/60 hover:bg-secondary-100 flex items-center gap-4 py-2 px-4 rounded-lg'>
                        <RiFilterFill /> Filter
                    </button>
                    <button className='bg-secondary-100/60 hover:bg-secondary-100 flex items-center gap-4 py-2 px-4 rounded-lg'>
                        Create
                    </button>
                </div>
            </div>
            {/* Portada */}
            <div className='bg-secondary-100 p-8 rounded-tl-lg rounded-tr-lg grid grid-cols-1 md:grid-cols-2 items-center '>
                <div className='p-8 flex flex-col items-center'>
                    <h1 className='text-2xl mb-4 p-6'>HOW WE CAN HELP YOU?</h1>
                    <form>
                        <div className='relative'>
                            <RiSearchLine className='absolute top-1/4 -traslate-y-1/2 left-2' />
                            <input type="text" className='bg-secondary-200 rounded-lg placeholder-gray-600 outline-none py-1 pr-4 pl-10 w-full' placeholder='Search for anything' />
                        </div>
                    </form>
                </div>
                <div className='flex justify-center'>
                    <img src="support.svg" alt="support" className='w-72 h-72 object-cover' />
                </div>
            </div>
            <Tab.Group>
                <div className='bg-secondary-100 p-8 rounded-bl-lg rounded-br-lg '>
                    <Tab.List className="flex item-center justify-between gap-2 bg-secondary-300/20 py-2 px-4 rounded-lg">
                        <div className='flex items-center gap-2'>
                            <Tab className="hover:bg-secondary-200 py-2 px-4 rounded-lg transition-colors outline-none ui-selected:bg-secondary-200 ui-selected:text-gray-900">Overview</Tab>
                            <Tab className="hover:bg-secondary-200 py-2 px-4 rounded-lg transition-colors outline-none  ui-selected:bg-secondary-200 ui-selected:text-gray-900">Tickets</Tab>
                            <Tab className="hover:bg-secondary-200 py-2 px-4 rounded-lg transition-colors outline-none  ui-selected:bg-secondary-200 ui-selected:text-gray-900">FAQ's</Tab>
                        </div>
                        <div>
                            <button className='bg-secondary-200/60 hover:bg-secondary-200 flex items-center gap-4 py-2 px-4 rounded-lg '>
                                Create
                            </button>
                        </div>
                    </Tab.List>
                </div>
                <Tab.Panels className="mt-4">
                    <Tab.Panel>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                            <div className='bg-secondary-100 p-8 rounded-lg'>
                                {/* Title card */}
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-xl'>Popular Tickets</h1>
                                    <Link to="" className='flex items-center gap-2'>Support <RiArrowRightFill /></Link>
                                </div>
                                {/* Content card */}
                                <div>
                                    <Disclosure>
                                        <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                                            <RiArrowRightSLine className="ui-open:rotate-90 ui-open:transform transition-all" /> What admin team does?
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="text-gray-700 text-sm px-8">
                                            By keenthemes to save tons  and more time money projects are listed and outstanding <Link to="" className='text-secondary-900'>Learn More</Link>
                                        </Disclosure.Panel>
                                    </Disclosure>
                                    <Disclosure>
                                        <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                                            <RiArrowRightSLine className="ui-open:rotate-90 ui-open:transform transition-all" /> How extended license work?
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="text-gray-700 text-sm px-8">
                                            By keenthemes to save tons  and more time money projects are listed and outstanding <Link to="" className='text-secondary-900'>Learn More</Link>
                                        </Disclosure.Panel>
                                    </Disclosure>
                                    <Disclosure>
                                        <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                                            <RiArrowRightSLine className="ui-open:rotate-90 ui-open:transform transition-all" /> How to install on a local machine?
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="text-gray-700 text-sm px-8">
                                            By keenthemes to save tons  and more time money projects are listed and outstanding <Link to="" className='text-secondary-900'>Learn More</Link>
                                        </Disclosure.Panel>
                                    </Disclosure>
                                    <Disclosure>
                                        <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                                            <RiArrowRightSLine className="ui-open:rotate-90 ui-open:transform transition-all" /> How to install google fonts?
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="text-gray-700 text-sm px-8">
                                            By keenthemes to save tons  and more time money projects are listed and outstanding <Link to="" className='text-secondary-900'>Learn More</Link>
                                        </Disclosure.Panel>
                                    </Disclosure>
                                </div>
                            </div>
                            <div className='bg-secondary-100 p-8 rounded-lg'>
                                {/* Title card */}
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-xl'>FAQ's</h1>
                                    <Link to="" className='flex items-center gap-2'>All FAQ's <RiArrowRightFill /></Link>
                                </div>
                                {/* Content card */}
                                <div>
                                    <Disclosure>
                                        <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                                            <RiArrowRightSLine className="ui-open:rotate-90 ui-open:transform transition-all" /> What admin team does?
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="text-gray-700 text-sm px-8">
                                            By keenthemes to save tons  and more time money projects are listed and outstanding <Link to="" className='text-secondary-900'>Learn More</Link>
                                        </Disclosure.Panel>
                                    </Disclosure>
                                    <Disclosure>
                                        <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                                            <RiArrowRightSLine className="ui-open:rotate-90 ui-open:transform transition-all" /> How extended license work?
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="text-gray-700 text-sm px-8">
                                            By keenthemes to save tons  and more time money projects are listed and outstanding <Link to="" className='text-secondary-900'>Learn More</Link>
                                        </Disclosure.Panel>
                                    </Disclosure>
                                    <Disclosure>
                                        <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                                            <RiArrowRightSLine className="ui-open:rotate-90 ui-open:transform transition-all" /> How to install on a local machine?
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="text-gray-700 text-sm px-8">
                                            By keenthemes to save tons  and more time money projects are listed and outstanding <Link to="" className='text-secondary-900'>Learn More</Link>
                                        </Disclosure.Panel>
                                    </Disclosure>
                                    <Disclosure>
                                        <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                                            <RiArrowRightSLine className="ui-open:rotate-90 ui-open:transform transition-all" /> How to install google fonts?
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="text-gray-700 text-sm px-8">
                                            By keenthemes to save tons  and more time money projects are listed and outstanding <Link to="" className='text-secondary-900'>Learn More</Link>
                                        </Disclosure.Panel>
                                    </Disclosure>
                                </div>
                            </div>
                        </div>
                    </Tab.Panel>
                    <Tab.Panel>
                        <div className='bg-secondary-100 p-8 rounded-lg grid grid-cols-1 md:grid-cols-4 gap-8'>
                            {/* Section 1 */}
                            <div className='col-span-3 p-4'>
                                <form>
                                    <div className='relative'>
                                        <RiSearchLine className='absolute top-1/4 -traslate-y-1/2 left-2' />
                                        <input type="text" className='bg-secondary-200 rounded-lg placeholder-gray-600 outline-none py-1 pr-4 pl-10 w-full' placeholder='Search for anything' />
                                    </div>
                                </form>
                                <h1 className='text-2xl my-8'>Public Tickets</h1>
                                {/* Tickets */}
                                <div>
                                    {/* ticket */}
                                    <div className='flex flex-col gap-2 mb-4'>
                                        <div className='flex items-center gap-4'>
                                            <RiTicketLine className='text-2xl text-green-700' />
                                            <Link to="/" className='text-xl'>
                                                How to use Netronic with Django Framework?
                                            </Link>
                                        </div>
                                        <div className='px-10'>
                                            <p className='text-gray-700'>
                                                By Keenthemes to save tons and more to time money projects are listed amazing outstanding projects are listed.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-2 mb-4'>
                                        <div className='flex items-center gap-4'>
                                            <RiTicketLine className='text-2xl text-purple-700' />
                                            <Link to="/" className='text-xl'>
                                                How to use Netronic with Django Framework?
                                            </Link>
                                        </div>
                                        <div className='px-10'>
                                            <p className='text-gray-700'>
                                                By Keenthemes to save tons and more to time money projects are listed amazing outstanding projects are listed.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-2 mb-4'>
                                        <div className='flex items-center gap-4'>
                                            <RiTicketLine className='text-2xl text-red-700' />
                                            <Link to="/" className='text-xl'>
                                                How to use Netronic with Django Framework?
                                            </Link>
                                        </div>
                                        <div className='px-10'>
                                            <p className='text-gray-700'>
                                                By Keenthemes to save tons and more to time money projects are listed amazing outstanding projects are listed.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-2 mb-4'>
                                        <div className='flex items-center gap-4'>
                                            <RiTicketLine className='text-2xl text-purple-700' />
                                            <Link to="/" className='text-xl'>
                                                How to use Netronic with Django Framework?
                                            </Link>
                                        </div>
                                        <div className='px-10'>
                                            <p className='text-gray-700'>
                                                By Keenthemes to save tons and more to time money projects are listed amazing outstanding projects are listed.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-2 mb-4'>
                                        <div className='flex items-center gap-4'>
                                            <RiTicketLine className='text-2xl text-purple-700' />
                                            <Link to="/" className='text-xl'>
                                                How to use Netronic with Django Framework?
                                            </Link>
                                        </div>
                                        <div className='px-10'>
                                            <p className='text-gray-700'>
                                                By Keenthemes to save tons and more to time money projects are listed amazing outstanding projects are listed.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* pagination */}
                                <div className='p-8 flex justify-center'>
                                    <nav className='flex items-center gap-8'>
                                        <button className='p-2 hover:bg-secondary-200 rounded-lg transition-colors'>
                                            <RiArrowLeftSLine />
                                        </button>
                                        <div className='flex items-center'>
                                            <button className='py-2 px-4 hover:bg-secondary-200 rounded-lg transition-colors'>1</button>
                                            <button className='py-2 px-4 bg-secondary-200 rounded-lg'>2</button>
                                            <button className='py-2 px-4 hover:bg-secondary-200 rounded-lg transition-colors'>3</button>
                                            <button className='py-2 px-4 hover:bg-secondary-200 rounded-lg transition-colors'>4</button>
                                            <button className='py-2 px-4 hover:bg-secondary-200 rounded-lg transition-colors'>5</button>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                            {/* Section 2 */}
                            <div>
                                <div className='bg-secondary-200 p-8 rounded-lg'>
                                    <h1 className='text-2xl mb-8'>More Channels</h1>
                                    <div className='flex items-center gap-4 mb-4'>
                                        <RiFileTextLine className='text-4xl' />
                                        <div className='flex flex-col gal-1'>
                                            <h5>Project Briefing</h5>
                                            <p className='text-xs'>Check out our{" "}<Link to="/" className='text-red-700'>Support Policy</Link></p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-4 mb-4'>
                                        <RiWechatLine className='text-4xl' />
                                        <div className='flex flex-col gal-1'>
                                            <h5>More to discuss?</h5>
                                            <p className='text-xs'>Email us to{" "}<Link to="/" className='text-red-700'>mg@gmail.com</Link></p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-4 mb-4'>
                                        <RiTwitterLine className='text-4xl' />
                                        <div className='flex flex-col gal-1'>
                                            <h5>Latest News</h5>
                                            <p className='text-xs'>Follow us at{" "}<Link to="/" className='text-red-700'>@m-garcía</Link></p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-4 mb-4'>
                                        <RiGithubFill className='text-4xl' />
                                        <div className='flex flex-col gal-1'>
                                            <h5>Github Access</h5>
                                            <p className='text-xs'>Our github repo{" "}<Link to="/" className='text-red-700'>MG GitHub</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tab.Panel>
                    <Tab.Panel>
                        <div className='bg-secondary-100 p-8 rounded-lg gap-8'>
                            <div className='mb-8'>
                                <h1 className='text-2xl mb-2'>Frequesntly Asked Questions</h1>
                                <p className='text-gray-700'>
                                    First, a disclaimer – the entire process of writing a blog post often takes more than a couple of hours, even if you can type eighty words as per minute and your writing skills are sharp.
                                </p>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                                {/* Section 1 */}
                                <div>
                                    <h1 className='text-xl mb-4'>Buying Product </h1>
                                    <div>
                                        <Disclosure>
                                            <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                                                <RiArrowRightSLine className="ui-open:rotate-90 ui-open:transform transition-all" /> What admin team does?
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="text-gray-700 text-sm px-8">
                                                By keenthemes to save tons  and more time money projects are listed and outstanding <Link to="" className='text-secondary-900'>Learn More</Link>
                                            </Disclosure.Panel>
                                        </Disclosure>
                                    </div>
                                    <div>
                                        <Disclosure>
                                            <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                                                <RiArrowRightSLine className="ui-open:rotate-90 ui-open:transform transition-all" /> What admin team does?
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="text-gray-700 text-sm px-8">
                                                By keenthemes to save tons  and more time money projects are listed and outstanding <Link to="" className='text-secondary-900'>Learn More</Link>
                                            </Disclosure.Panel>
                                        </Disclosure>
                                    </div>
                                    <div>
                                        <Disclosure>
                                            <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                                                <RiArrowRightSLine className="ui-open:rotate-90 ui-open:transform transition-all" /> What admin team does?
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="text-gray-700 text-sm px-8">
                                                By keenthemes to save tons  and more time money projects are listed and outstanding <Link to="" className='text-secondary-900'>Learn More</Link>
                                            </Disclosure.Panel>
                                        </Disclosure>
                                    </div>
                                    <div>
                                        <Disclosure>
                                            <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                                                <RiArrowRightSLine className="ui-open:rotate-90 ui-open:transform transition-all" /> What admin team does?
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="text-gray-700 text-sm px-8">
                                                By keenthemes to save tons  and more time money projects are listed and outstanding <Link to="" className='text-secondary-900'>Learn More</Link>
                                            </Disclosure.Panel>
                                        </Disclosure>
                                    </div>
                                    <div>
                                        <Disclosure>
                                            <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                                                <RiArrowRightSLine className="ui-open:rotate-90 ui-open:transform transition-all" /> What admin team does?
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="text-gray-700 text-sm px-8">
                                                By keenthemes to save tons  and more time money projects are listed and outstanding <Link to="" className='text-secondary-900'>Learn More</Link>
                                            </Disclosure.Panel>
                                        </Disclosure>
                                    </div>
                                </div>
                                {/* Section 2 */}
                                <div>
                                    <h1 className='text-xl mb-4'>Installation</h1>
                                    <div>
                                        <Disclosure>
                                            <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                                                <RiArrowRightSLine className="ui-open:rotate-90 ui-open:transform transition-all" /> What admin team does?
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="text-gray-700 text-sm px-8">
                                                By keenthemes to save tons  and more time money projects are listed and outstanding <Link to="" className='text-secondary-900'>Learn More</Link>
                                            </Disclosure.Panel>
                                        </Disclosure>
                                    </div>
                                    <div>
                                        <Disclosure>
                                            <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                                                <RiArrowRightSLine className="ui-open:rotate-90 ui-open:transform transition-all" /> What admin team does?
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="text-gray-700 text-sm px-8">
                                                By keenthemes to save tons  and more time money projects are listed and outstanding <Link to="" className='text-secondary-900'>Learn More</Link>
                                            </Disclosure.Panel>
                                        </Disclosure>
                                    </div>
                                    <div>
                                        <Disclosure>
                                            <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                                                <RiArrowRightSLine className="ui-open:rotate-90 ui-open:transform transition-all" /> What admin team does?
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="text-gray-700 text-sm px-8">
                                                By keenthemes to save tons  and more time money projects are listed and outstanding <Link to="" className='text-secondary-900'>Learn More</Link>
                                            </Disclosure.Panel>
                                        </Disclosure>
                                    </div>
                                    <div>
                                        <Disclosure>
                                            <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                                                <RiArrowRightSLine className="ui-open:rotate-90 ui-open:transform transition-all" /> What admin team does?
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="text-gray-700 text-sm px-8">
                                                By keenthemes to save tons  and more time money projects are listed and outstanding <Link to="" className='text-secondary-900'>Learn More</Link>
                                            </Disclosure.Panel>
                                        </Disclosure>
                                    </div>
                                    <div>
                                        <Disclosure>
                                            <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                                                <RiArrowRightSLine className="ui-open:rotate-90 ui-open:transform transition-all" /> What admin team does?
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="text-gray-700 text-sm px-8">
                                                By keenthemes to save tons  and more time money projects are listed and outstanding <Link to="" className='text-secondary-900'>Learn More</Link>
                                            </Disclosure.Panel>
                                        </Disclosure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}

export default Tickets;