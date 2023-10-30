import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { RiNotification2Line, RiArrowDownCircleLine, RiSettings4Fill, RiLogoutBoxRLine, RiHeart3Fill, RiChat4Line } from "react-icons/ri";

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
        } transition align='end' menuClassName="bg-secondary-300" >
          <h1 className='text-center font-medium'>
            Notifications
          </h1>
          <hr className='my-4 border-gray-500' />
          <MenuItem className="p-0 hover:bg-transparent">
            <Link to="/" className='rounded-lg transition-colors hover:bg-secondary-100 flex items-center gap-2 py-2 px-4 flex-1'>
              <img src="https://img.freepik.com/foto-gratis/colocar-joven-mujer-ropa-deportiva_144627-45298.jpg" alt="Ana Lievano" className='w-9 h-9 object-cover rounded-full' />
              <div className='text-sm flex flex-col gap-2'>
                <div className='flext items-center justify-between gap-4'>
                  <span>Ana Lievano</span>{" "}
                  <span className='text-xs'>28/10/2023</span>
                </div>
                <p className='text-gray-700 '>Lorem ipsum dolor sit amet...</p>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link to="/" className='rounded-lg transition-colors hover:bg-secondary-100 items-center gap-2 py-2 px-4 flex flex-1'>
              <RiHeart3Fill className='p-2 bg-red-300 text-red-700 box-content rounded-full' />
              <div className='text-sm flex flex-col gap-2'>
                <div className='flext items-center justify-between gap-4'>
                  <span>Nueva reacción</span>{" "}
                  <span className='text-xs'>28/10/2023</span>
                </div>
                <p className='text-gray-700 '>A Marciano García le ha gustado...</p>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link to="/" className='rounded-lg transition-colors hover:bg-secondary-100 items-center gap-2 py-2 px-4 flex flex-1'>
              <RiChat4Line className='p-2 bg-purple-300 text-purple-700 box-content rounded-full' />
              <div className='text-sm flex flex-col gap-2'>
                <div className='flext items-center justify-between gap-4'>
                  <span>Nuevo comentario</span>{" "}
                  <span className='text-xs'>28/10/2023</span>
                </div>
                <p className='text-gray-700 '>Ana Lievano ha comentado tu pub...</p>
              </div>
            </Link>
          </MenuItem>
          <hr className='my-4 border-gray-500' />
          <MenuItem className="p-0 hover:bg-transparent flex justify-center cursor-default">
            <Link to="/" className='text-gray-800 text-sm hover:text-black'>
              Todas las notificaciones
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
            <Link to="/profile" className='rounded-lg transition-colors hover:bg-secondary-100 flex items-center gap-x-4 py-2 px-6 flex-1'>
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