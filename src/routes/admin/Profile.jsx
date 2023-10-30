import React from 'react';
import { RiImageEditFill } from "react-icons/ri";

const Profile = () => {
    return (
        <>
            {/* Profile */}
            <div className='bg-secondary-100 py-2 px-8 rounded-xl mb-4'>
                <h1 className='text-xl '> Profile</h1>
                <hr className='my-2 border-secondary-200/40' />
                <form>
                    <div className='flex items-center mb-2'>
                        <div className='w-1/4'>
                            <p>Avatar</p>
                        </div>
                        <div className='flex-1'>
                            <div className='relative mb-2'>
                                <img src="https://img.freepik.com/foto-gratis/mujer-joven-cantando-sensualmente-escenario-generado-ia_188544-25352.jpg" alt="Ana Lievano" className='w-28 h-28 object-cover rounded-lg' />
                                <label htmlFor="avatarId" className='absolute bg-secondary-100 p-1 rounded-full hover:cursor-pointer -top-2 left-24'>
                                    <RiImageEditFill />
                                </label>
                                <input type="file" id='avatarId' className='hidden' />
                                <p className='text-sm text-gray-500'>Allow file types: png, jpg, jpeg.</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center mb-2'>
                        <div className='w-1/4'>
                            <p>FullName<span className='text-red-600'>*</span></p>
                        </div>
                        <div className='flex-1 flex items-center gap-4'>
                            <div className='w-full'>
                                <input type="text" className='w-full py-2 px-4 outline-none rounded-lg bg-secondary-200 placeholder-gray-700' placeholder='Name' />
                            </div>
                            <div className='w-full'>
                                <input type="text" className='w-full py-2 px-4 outline-none rounded-lg bg-secondary-200 placeholder-gray-700' placeholder='LastName' />
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center mb-2'>
                        <div className='w-1/4'>
                            <p>UserName<span className='text-red-600'>*</span></p>
                        </div>
                        <div className='flex-1'>
                            <div className='w-full'>
                                <input type="text" className='w-full py-2 px-4 outline-none rounded-lg bg-secondary-200 placeholder-gray-700' placeholder='UserName' />
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center mb-2'>
                        <div className='w-1/4'>
                            <p>Phone<span className='text-red-600'>*</span></p>
                        </div>
                        <div className='flex-1'>
                            <div className='w-full'>
                                <input type="text" className='w-full py-2 px-4 outline-none rounded-lg bg-secondary-200 placeholder-gray-700' placeholder='Phone Number' />
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center mb-2'>
                        <div className='w-1/4'>
                            <p>Country<span className='text-red-600'>*</span></p>
                        </div>
                        <div className='flex-1'>
                            <select className='w-full py-2 px-4 outline-none rounded-lg bg-secondary-200'>
                                <option value="">Seleccione un país</option>
                                <option value="Argentina">Argentina</option>
                                <option value="Chile">Chile</option>
                                <option value="Colombia">Colombia</option>
                                <option value="México">México</option>
                                <option value="Perú">Perú</option>
                                <option value="Uruguay">Uruguay</option>
                            </select >
                        </div>
                    </div>
                    <div className='flex items-center mb-2'>
                        <div className='w-1/4'>
                            <p>City<span className='text-red-600'>*</span></p>
                        </div>
                        <div className='flex-1'>
                            <select className='w-full py-2 px-4 outline-none rounded-lg bg-secondary-200'>
                                <option value="">Seleccione una ciudad</option>
                                <option value="Ciudad de México">México</option>
                                <option value="Lima">Lima</option>
                                <option value="Medellín">Medellín</option>
                                <option value="Mendoza">Medellín</option>
                                <option value="Montevideo">Montevideo</option>
                                <option value="Santiago de Chile">Santiago de Chile</option>
                            </select >
                        </div>
                    </div>
                </form>
                <hr className='my-2 border-secondary-200/40' />
                <div className='flex justify-end'>
                    <button className='bg-secondary-200/60 py-2 px-4 rounded-lg hover:bg-secondary-200 transition-colors'>
                        Save Changes
                    </button>
                </div>
            </div>
            {/* Change Password */}
            <div>
                <div className='bg-secondary-100 py-2 px-8 rounded-xl mb-4'>
                    <h1 className='text-xl '> User&Password</h1>
                    <hr className='my-2 border-secondary-200/40' />
                    <form>
                        <div className='flex justify-between items-center mb-2'>
                            <div>
                                <h5>Email</h5>
                                <p className='text-gray-600 text-sm'>mg@gmail.com</p>
                            </div>
                            <button className='bg-secondary-200/60 py-2 px-4 rounded-lg hover:bg-secondary-200 transition-colors'>
                                Change Email
                            </button>
                        </div>
                        <div className='flex justify-between items-center mb-2'>
                            <div>
                                <h5>Password</h5>
                                <p className='text-gray-600 text-sm'>************</p>
                            </div>
                            <button className='bg-secondary-200/60 py-2 px-4 rounded-lg hover:bg-secondary-200 transition-colors'>
                                Change Password
                            </button>
                        </div>
                    </form>
                    <hr className='my-2 border-secondary-200/40' />
                </div>
            </div>
            {/* Account Preferences */}
            <div>
                <div className='bg-secondary-100 py-2 px-8 rounded-xl'>
                    <h1 className='text-xl '> Email Preferences </h1>
                    <hr className='my-2 border-secondary-200/40' />
                    <form>
                        <div className='flex items-center'>
                            <input type="checkbox" />
                            <div className='flex flex-col px-4'>
                                <h5 className='text-gray-800'>Successful Payments</h5>
                                <p className='text-gray-600 text-sm'>Receive a notification for every successful payment.</p>
                            </div>
                        </div>
                        <hr className='my-2 border-secondary-200/40' />
                        <div className='flex items-center'>
                            <input type="checkbox" />
                            <div className='flex flex-col px-4'>
                                <h5 className='text-gray-800'>Payouts</h5>
                                <p className='text-gray-600 text-sm'>Receive a notification for every initiated payout.</p>
                            </div>
                        </div>
                        <hr className='my-2 border-secondary-200/40' />
                        <div className='flex items-center'>
                            <input type="checkbox" />
                            <div className='flex flex-col px-4'>
                                <h5 className='text-gray-800'>Customer Payment Dispute</h5>
                                <p className='text-gray-600 text-sm'>Receive a notification if a payment is disputed by a customer and for dispute purposes.</p>
                            </div>
                        </div>
                        <hr className='my-2 border-secondary-200/40' />
                    </form>
                    <div className='flex justify-end'>
                        <button className='bg-secondary-200/60 py-2 px-4 rounded-lg hover:bg-secondary-200 transition-colors'>
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;