import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { RiNotification2Line, RiArrowDownCircleLine, RiSettings4Fill, RiLogoutBoxRLine } from "react-icons/ri";

const Header = () => {
  return (
    <header className='xl:h-[7vh] md:h-[10vh] border-b border-secondary-100 p-8 flex items-center justify-end'>
      <nav className='flex items-center gap-x-1'>
        <Menu menuButton={
          <MenuButton className='relative hover:bg-secondary-100 py-2 px-4 rounded-lg transition-colors'>
            <RiNotification2Line />
            <span className='absolute bg-secondary-100 -top-0 right-2 py-0.5 px-[5px] box-content rounded-full text-[8px] font-bold'>
              2
            </span>
          </MenuButton>
        } transition menuClassName="bg-secondary-300" >
          <h1 className='text-center font-medium'>Notifications</h1>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link to="/" className='rounded-lg transition-colors hover:bg-secondary-100 flex items-center gap-x-4 py-2 px-6 flex-1'>
            </Link>
          </MenuItem>
        </Menu>
        <Menu menuButton={
          <MenuButton className='flex items-center gap-x-2 hover:bg-secondary-100 py-2 px-4 rounded-lg transition-colors'>
            <img src="https://img.freepik.com/foto-gratis/hombre-toca-primer-plano-guitarra-acustica_169016-20618.jpg" alt="Guitar Player" className='w-10 h-10  object-cover rounded-full' />
            <span>Marciano García</span>
            <RiArrowDownCircleLine />
          </MenuButton>
        } transition menuClassName="bg-secondary-300">
          <MenuItem className="p-0 hover:bg-transparent">
            <Link to="/perfil" className='rounded-lg transition-colors hover:bg-secondary-100 flex items-center gap-x-4 py-2 px-6 flex-1'>
              <img src="https://img.freepik.com/foto-gratis/hombre-toca-primer-plano-guitarra-acustica_169016-20618.jpg" alt="Guitar Player" className='w-10 h-10  object-cover rounded-full' />
              <div className='flex flex-col gap-1 text-sm'>
                <span className='text-sm'>Marciano García</span>
                <span className='text-[12px] text-gray-700'>mg@gmail.com</span>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link to="/settings" className='rounded-lg transition-colors hover:bg-secondary-100 flex items-center gap-x-4 py-2 px-6 flex-1'>
              <RiSettings4Fill /> Settings
            </Link>
          </MenuItem>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link to="/logout" className='rounded-lg transition-colors hover:bg-secondary-100 flex items-center gap-x-4 py-2 px-6 flex-1'>
              <RiLogoutBoxRLine /> LogOut
            </Link>
          </MenuItem>
        </Menu>
      </nav>
    </header>
  )
}

export default Header;