import React from 'react';
import CardTicket from '../../components/CardTicket';
import Category from '../../components/Category';
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
            <Category />
        </div>
    )
}

export default Home;