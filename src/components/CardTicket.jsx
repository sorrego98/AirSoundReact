import React from 'react';
import { Link } from 'react-router-dom';
import { RiTicketLine, RiMore2Fill, RiAddFill } from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

const CardTicket = (props) => {

    const { ticket, totalTickets, text } = props;

    let status = "";
    let textColor = "";
    switch (ticket) {
        case "pending":
            status = "text-purple-600 bg-purple-300/60";
            textColor = "text-purple-700";
            break;
        case "inProcess":
            status = "text-red-600 bg-red-300/60";
            textColor = "text-red-700";
            break;
        case "close":
            status = "text-green-600 bg-green-300/60";
            textColor = "text-green-700";
            break;
        case "total":
            status = "text-orange-600 bg-orange-300/60";
            textColor = "text-orange-700";
            break;
    }

    return (
        <div className='bg-secondary-100 p-8 rounded-xl'>
            <div className='flex items-center justify-between mb-4'>
                <div>
                    <RiTicketLine className={`text-4xl ${status} p-2 box-content rounded-xl`} />
                </div>
                <div>
                    <Menu menuButton={
                        <MenuButton className='flex items-center gap-x-2 hover:bg-secondary-100 py-2 px-4 rounded-lg transition-colors'>
                            <RiMore2Fill />
                        </MenuButton>
                    } transition menuClassName="bg-secondary-300">
                        <MenuItem className="p-0 hover:bg-transparent">
                            <Link to="/" className='rounded-lg transition-colors hover:bg-secondary-100 flex items-center gap-x-4 py-2 px-6 flex-1'>
                                Show Tickets
                            </Link>
                        </MenuItem>
                        <MenuItem className="p-0 hover:bg-transparent">
                            <Link to="/" className='rounded-lg transition-colors hover:bg-secondary-100 flex items-center gap-x-4 py-2 px-6 flex-1'>
                                Information
                            </Link>
                        </MenuItem>
                    </Menu>
                </div>
            </div>
            {/* Number of TIckets */}
            <div>
                <h1 className='mb-2 text-2xl font-bold'>{totalTickets}</h1>
                <p className={textColor}>{text}</p>
            </div>
            <hr className='border border-dashed border-secondary-300/60' />
            <div>
                <Link to="/" className='flex items-center gap-2 hover:underline'>
                    <RiAddFill /> Agregar nuevo ticket
                </Link>
            </div>
        </div>
    )
}

export default CardTicket;