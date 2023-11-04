import React from 'react';
import { useEffect, useState } from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine, RiArrowRightFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { Tab } from '@headlessui/react';
import { Disclosure } from '@headlessui/react'

const Category = (props) => {
    const { dbName } = props;
    // console.log('datos', `${datos.data.name}`);

    const urlCat = "http://localhost:5050/api/category/";

    const [cat, setCat] = useState([]);

    const fetchCategories = (url) => {
        fetch(url)
            .then(res => res.json())
            // .then(cat => {
            //     console.log('categoria', cat);
            //     console.log('total', cat.total);
            //     console.log('categoria2', cat.data);
            //     console.log('categoria3', cat.data[1].name);
            // })
            .then((cat) => {
                setCat(cat.data)
                console.log(cat);
            })
            .catch(e => console.log(e))
    };

    useEffect(() => {
        fetchCategories(urlCat)
    }, [])

    return (
        <div className='mb-4'>
            <Tab.Group>
                <div className='bg-secondary-100 p-8 rounded-bl-lg rounded-br-lg '>
                    <Tab.List className="flex item-center justify-between gap-2 bg-secondary-300/20 py-2 px-4 rounded-lg">
                        <div className='flex items-center gap-2'>
                            <Tab className="hover:bg-secondary-200 py-2 px-4 rounded-lg transition-colors outline-none ui-selected:bg-secondary-200 ui-selected:text-gray-900">
                                <h2>
                                    {dbName}
                                </h2>
                                <div>
                                    Total: {`${cat.length}`}
                                    {/* <br />
                                    {/* Datos: {`${cat.name[1]}`} */}
                                    {/* <ul>
                                        {cat.map((cat, i) => (<li key={i}>{cat.name}</li>))}
                                    </ul> */}
                                    {/* {console.log('datos', datos.data)}; */}
                                </div>
                            </Tab>
                        </div>
                    </Tab.List>
                </div>
                <Tab.Panels className="mt-4">
                    <Tab.Panel>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                            <div className='bg-secondary-100 p-8 rounded-lg'>
                                {/* Content card */}
                                <div>
                                    {cat.map((cat, i) => (<div key={i}>
                                        <Disclosure>
                                            <Disclosure.Button className="py-2 text-lg flex items-center gap-4" >
                                                <RiArrowRightSLine className="ui-open:rotate-90 ui-open:transform transition-all" /> Categoría {i + 1}
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="text-gray-800 text-sm px-8">
                                                <div>
                                                    Nombre: {cat.name}
                                                </div>
                                                <div>
                                                    ID: {cat.id}
                                                </div>
                                            </Disclosure.Panel>

                                        </Disclosure>
                                    </div>))}

                                </div>
                            </div>
                        </div>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}

export default Category;