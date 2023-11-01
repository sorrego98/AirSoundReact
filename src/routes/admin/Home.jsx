import React from 'react';
import CardTicket from '../../components/CardTicket';
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const Home = () => {
    return (
        <div>
            <div className='flex items-center justify-between mb-8'>
                <h1 className='text-3xl'>Good Morning, Marciano!</h1>
                <div className='flex items-center gap-2 text-2xl'>
                    <RiArrowLeftSLine className='hover:cursor-pointer' />
                    <RiArrowRightSLine className='hover:cursor-pointer' />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                {/* Card */}
                <CardTicket
                    ticket="total"
                    totalTickets="175000"
                    text="Total Tickets"
                />
                <CardTicket
                    ticket="pending"
                    totalTickets="75000"
                    text="Pending Tickets"
                />
                <CardTicket
                    ticket="inProcess"
                    totalTickets="115000"
                    text="Tickets in Process"
                />
                <CardTicket
                    ticket="close"
                    totalTickets="55000"
                    text="Closed Tickets"
                />
            </div>
            <div>
                <h1 className='text-2xl mt-2 mb-3'>Tickets más recientes</h1>
            </div>
            <div className='bg-secondary-100 p-6 rounded-xl mb-2'>
                <div className='grid grid-cols-1 md:grid-cols-5 gap-4 mb-2'>
                    <h5>ID</h5>
                    <h5>Description</h5>
                    <h5>Status</h5>
                    <h5>Date</h5>
                    <h5>Doings</h5>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-5 gap-4 items-center bg-secondary-200 p-2 rounded-lg mb-2'>
                    <div>
                        <span>#123123</span>
                    </div>
                    <div>
                        <span>My pc doesn't work</span>
                    </div>
                    <div>
                        <span className='py-1 px-2 rounded-lg text-red-700 bg-red-300/60'>
                            Open
                        </span>
                    </div>
                    <div>
                        <span>30/10/2023</span>
                    </div>
                    <div>
                        <span>Without doings</span>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-5 gap-4 items-center bg-secondary-200 p-2 rounded-lg mb-2'>
                    <div>
                        <span>#123123</span>
                    </div>
                    <div>
                        <span>My pc doesn't work</span>
                    </div>
                    <div>
                        <span className='py-1 px-2 rounded-lg text-green-700 bg-green-300/60'>
                            Close
                        </span>
                    </div>
                    <div>
                        <span>30/10/2023</span>
                    </div>
                    <div>
                        <span>Without doings</span>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-5 gap-4 items-center bg-secondary-200 p-2 rounded-lg mb-2'>
                    <div>
                        <span>#123123</span>
                    </div>
                    <div>
                        <span>My pc doesn't work</span>
                    </div>
                    <div>
                        <span className='py-1 px-2 rounded-lg text-purple-700 bg-purple-300/60'>
                            Pending
                        </span>
                    </div>
                    <div>
                        <span>30/10/2023</span>
                    </div>
                    <div>
                        <span>Without doings</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;