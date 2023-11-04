import React from 'react';
import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { RiArrowRightSLine } from "react-icons/ri";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab } from '@headlessui/react';
import { Disclosure } from '@headlessui/react'

const Category = () => {
    //API's URL
    const urlCat = "http://localhost:5050/api/category/";
    const urlSubCat = "http://localhost:5050/api/subcategory/";
    const urlPP = "http://localhost:5050/api/productprice/";
    const urlLP = "http://localhost:5050/api/productions/all";
    const urlGallery = "http://localhost:5050/api/gallery";
    const urlMM = "http://localhost:5050/api/members/";
    const urlUser = "http://localhost:5050/api/users/";
    const urlProducts = "http://localhost:5050/api/products/";

    //Configuración Info DB
    const [cat, setCat] = useState([]);
    const [subcat, setSubCat] = useState([]);
    const [pp, setPp] = useState([]);
    const [lp, setLp] = useState([]);
    const [gallery, setGallery] = useState([]);
    const [mm, setMm] = useState([]);
    const [user, setUser] = useState([]);
    const [countSubcat, setCountSubcat] = useState([]);
    const [product, setProduct] = useState([]);

    //Leer Info DB
    const fetchCategories = (url) => {
        fetch(url)
            .then(res => res.json())
            .then((cat) => {
                setCat(cat.data)
                // console.log(cat);
            })
        // .catch(e => console.log(e))
    };
    const fetchSubcategories = (url) => {
        fetch(url)
            .then(res => res.json())
            .then((subcat) => {
                setSubCat(subcat.data)
                // console.log(cat);
            })
        // .catch(e => console.log(e))
    };
    const fetchPP = (url) => {
        fetch(url)
            .then(res => res.json())
            .then((pp) => {
                setPp(pp.data)
                // console.log(pp);
            })
            .catch(e => console.log(e))
    };
    const fetchLP = (url) => {
        fetch(url)
            .then(res => res.json())
            .then((lp) => {
                setLp(lp.data)
                // console.log(lp);
            })
            .catch(e => console.log(e))
    };
    const fetchGallery = (url) => {
        fetch(url)
            .then(res => res.json())
            .then((gallery) => {
                setGallery(gallery.data)
                // console.log(gallery);
            })
            .catch(e => console.log(e))
    };
    const fetchMM = (url) => {
        fetch(url)
            .then(res => res.json())
            .then((mm) => {
                setMm(mm.data)
                // console.log(mm);
            })
            .catch(e => console.log(e))
    };
    const fetchUser = (url) => {
        fetch(url)
            .then(res => res.json())
            .then((user) => {
                setUser(user.data)
                // console.log(user);
            })
            .catch(e => console.log(e))
    };
    const fetchCountSub = (url) => {
        fetch(url)
            .then(res => res.json())
            .then((product) => {
                setCountSubcat(product.countBySubCat)
                // console.log(product);
            })
            .catch(e => console.log(e))
    };
    const fetchProduct = (url) => {
        fetch(url)
            .then(res => res.json())
            .then((product) => {
                setProduct(product.data)
                // console.log(product);
            })
            .catch(e => console.log(e))
    };

    //Inicialización estados
    useEffect(() => {
        fetchCategories(urlCat)
    }, [])
    useEffect(() => {
        fetchSubcategories(urlSubCat)
    }, [])
    useEffect(() => {
        fetchPP(urlPP)
    }, [])
    useEffect(() => {
        fetchLP(urlLP)
    }, [])
    useEffect(() => {
        fetchGallery(urlGallery)
    }, [])
    useEffect(() => {
        fetchMM(urlMM)
    }, [])
    useEffect(() => {
        fetchUser(urlUser)
    }, [])
    useEffect(() => {
        fetchCountSub(urlProducts)
    }, [])
    useEffect(() => {
        fetchProduct(urlProducts)
    }, [])

    //Último Elemento de cualquier DB
    let LPDB = {
        id: "",
        songTitle: "",
        artistName: "",
        youtubeUrl: ""
    }
    let LImageDB = {
        id: "",
        name: "",
        image: ""
    }
    let LProductDB = {
        id: "",
        name: "",
        image: ""
    }

    let [lastProductionDB, setLastProductionDB] = useState((LPDB));
    let [lastGalleryDB, setLastGalleryDB] = useState((LImageDB));
    let [lastProductDB, setLastProductDB] = useState((LProductDB));

    //Cargar el último producto creado obteniendo el último ID
    useEffect(() => {
        let LPArray = null;
        //Cargar el total de productos
        fetch("http://localhost:5050/api/productions").then((res) => {

            return res.json();
        }).then((data) => {

            LPArray = data.data[data.data.length - 1];
            LPDB.id = LPArray.id;
            LPDB.songTitle = LPArray.name;
            LPDB.youtubeUrl = LPArray.url;

            setLastProductionDB(LPDB);
        }).catch(exception => {
            console.log("Excepción atrapada obteniendo los productos: " + exception);

        });
    });
    //Cargar el último producto creado obteniendo el último ID
    useEffect(() => {
        let LGArray = null;
        //Cargar el total de productos
        fetch("http://localhost:5050/api/gallery").then((res) => {

            return res.json();
        }).then((data) => {

            LGArray = data.data[data.data.length - 1];
            LImageDB.id = LGArray.id;
            LImageDB.name = LGArray.name;
            LImageDB.image = LGArray.image;

            setLastGalleryDB(LImageDB);
        }).catch(exception => {
            console.log("Excepción atrapada obteniendo los productos: " + exception);

        });
    });
    //Cargar el último producto creado obteniendo el último ID
    useEffect(() => {
        let LProductArray = null;
        //Cargar el total de productos
        fetch("http://localhost:5050/api/products").then((res) => {

            return res.json();
        }).then((data) => {

            LProductArray = data.data[data.data.length - 1];
            LProductDB.id = LProductArray.id;
            LProductDB.name = LProductArray.name;
            LProductDB.image = LProductArray.imageProduct;

            setLastProductDB(LProductDB);
        }).catch(exception => {
            console.log("Excepción atrapada obteniendo los productos: " + exception);

        });
    });


    return (
        <div className='mb-4'>
            <Tab.Group>
                <div className='bg-secondary-100 p-8 rounded-bl-lg rounded-br-lg '>
                    <Tab.List className="flex item-center justify-between gap-2 bg-secondary-300/20 py-2 px-4 rounded-lg">
                        <div className='flex items-center gap-2'>
                            <Tab className="hover:bg-secondary-200 py-2 px-4 rounded-lg transition-colors outline-none ui-selected:bg-secondary-200 ui-selected:text-gray-900">
                                <h2>
                                    Categorías ({`${cat.length}`}) & <br />
                                    Subcategorías ({`${subcat.length}`})
                                </h2>
                            </Tab>
                            <Tab className="hover:bg-secondary-200 py-2 px-4 rounded-lg transition-colors outline-none ui-selected:bg-secondary-200 ui-selected:text-gray-900">
                                <h2>
                                    Tipo de Precios
                                </h2>
                                <div>
                                    Total: {`${pp.length}`}
                                </div>
                            </Tab>
                            <Tab className="hover:bg-secondary-200 py-2 px-4 rounded-lg transition-colors outline-none ui-selected:bg-secondary-200 ui-selected:text-gray-900">
                                <h2>
                                    Últimas Producciones
                                </h2>
                                <div>
                                    Total: {`${lp.length}`}
                                </div>
                            </Tab>
                            <Tab className="hover:bg-secondary-200 py-2 px-4 rounded-lg transition-colors outline-none ui-selected:bg-secondary-200 ui-selected:text-gray-900">
                                <h2>
                                    Miembros ({`${mm.length}`}) & <br />
                                    Usuarios ({`${user.length}`})
                                </h2>
                            </Tab>
                            <Tab className="hover:bg-secondary-200 py-2 px-4 rounded-lg transition-colors outline-none ui-selected:bg-secondary-200 ui-selected:text-gray-900">
                                <h2>
                                    Galería
                                </h2>
                                <div>
                                    Total: {`${gallery.length}`}
                                </div>
                            </Tab>
                            <Tab className="hover:bg-secondary-200 py-2 px-4 rounded-lg transition-colors outline-none ui-selected:bg-secondary-200 ui-selected:text-gray-900">
                                <h2>
                                    Servicios
                                </h2>
                                <div>
                                    Total: {`${gallery.length}`}
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
                            <div className='bg-secondary-100 p-8 rounded-lg'>
                                {/* Content card */}
                                <div>
                                    {subcat.map((subcat, i) => (<div key={i}>
                                        <Disclosure>
                                            <Disclosure.Button className="py-2 text-lg flex items-center gap-4" >
                                                <RiArrowRightSLine className="ui-open:rotate-90 ui-open:transform transition-all" /> Subcategoría {i + 1}
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="text-gray-800 text-sm px-8">
                                                <div>
                                                    ID: {subcat.id}
                                                </div>
                                                <div>
                                                    Nombre: {subcat.name}
                                                </div>
                                                <div>
                                                    Descripción: {subcat.description}
                                                </div>
                                                <div>
                                                    <Menu menuButton={
                                                        <MenuButton className='flex items-center gap-x-2 hover:bg-secondary-200 py-2 px-4 rounded-lg transition-colors'>
                                                            Categoría
                                                        </MenuButton>
                                                    } transition menuClassName="bg-secondary-300">
                                                        <MenuItem className="p-0 hover:bg-transparent">
                                                            <div className='rounded-lg transition-colors hover:bg-secondary-100 flex items-center gap-x-4 py-2 px-6 flex-1'>
                                                                Id: {subcat.category.id} <br />
                                                                Nombre: {subcat.category.name}
                                                            </div>
                                                        </MenuItem>
                                                    </Menu>
                                                </div>
                                                <div>
                                                    <img src={`${subcat.imageSubcategory}`} alt="support" className='w-72 h-72 object-cover' />
                                                </div>
                                            </Disclosure.Panel>
                                        </Disclosure>
                                    </div>))}
                                </div>
                            </div>
                        </div>
                    </Tab.Panel>
                    <Tab.Panel>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                            <div className='bg-secondary-100 p-8 rounded-lg'>
                                {/* Content card */}
                                <div>
                                    {pp.map((pp, i) => (<div key={i}>
                                        <Disclosure>
                                            <Disclosure.Button className="py-2 text-lg flex items-center gap-4" >
                                                <RiArrowRightSLine className="ui-open:rotate-90 ui-open:transform transition-all" /> Tipo de Precio {i + 1}
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="text-gray-800 text-sm px-8">
                                                <div>
                                                    Nombre: {pp.name}
                                                </div>
                                                <div>
                                                    ID: {pp.id}
                                                </div>
                                            </Disclosure.Panel>
                                        </Disclosure>
                                    </div>))}

                                </div>
                            </div>
                        </div>
                    </Tab.Panel>
                    <Tab.Panel>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                            <div className='bg-secondary-100 p-8 rounded-lg'>
                                <div>
                                    {lp.map((lp, i) => (<div key={i}>
                                        <Disclosure>
                                            <Disclosure.Button className="py-2 text-lg flex items-center gap-4" >
                                                <RiArrowRightSLine className="ui-open:rotate-90 ui-open:transform transition-all" /> Producción {i + 1}
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="text-gray-800 text-sm px-8">
                                                <div>
                                                    ID: {lp.id}
                                                </div>
                                                <div>
                                                    Nombre de la producción: {lp.songTitle}
                                                </div>
                                                <div>
                                                    Nombre del artista: {lp.artistName}
                                                </div>
                                                <div>
                                                    <iframe src={`${lp.youtubeUrl}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe>
                                                </div>
                                            </Disclosure.Panel>
                                        </Disclosure>
                                    </div>))}
                                </div>
                            </div>
                            <div className='bg-secondary-100 p-8 rounded-lg'>
                                {/* Title card */}
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-xl'>Última Producción Agregada</h1>
                                </div>
                                <div>
                                    ID: {lastProductionDB.id}
                                </div>
                                <div>
                                    Nombre: {lastProductionDB.songTitle}
                                </div>
                                <div>
                                    <iframe src={`${lastProductionDB.youtubeUrl}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe>
                                </div>
                            </div>
                        </div>
                    </Tab.Panel>
                    <Tab.Panel>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                            <div className='bg-secondary-100 p-8 rounded-lg'>
                                {/* Content card */}
                                <div>
                                    {mm.map((mm, i) => (<div key={i}>
                                        <Disclosure>
                                            <Disclosure.Button className="py-2 text-lg flex items-center gap-4" >
                                                <RiArrowRightSLine className="ui-open:rotate-90 ui-open:transform transition-all" /> Miembro {i + 1}
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="text-gray-800 text-sm px-8">
                                                <div>
                                                    ID: {mm.id}
                                                </div>
                                                <div>
                                                    Nombre: {mm.name}
                                                </div>
                                                <div>
                                                    Cargo: {mm.jobTitle}
                                                </div>
                                                <div>
                                                    Username:{" "}
                                                    <Link to={`${mm.instagramUrl}`}>
                                                        {mm.instagramName}
                                                    </Link>
                                                </div>
                                                <div>
                                                    <img src={`${mm.imageProfile}`} alt="support" className='w-72 h-72 object-cover' />
                                                </div>
                                            </Disclosure.Panel>
                                        </Disclosure>
                                    </div>))}
                                </div>
                            </div>
                            <div className='bg-secondary-100 p-8 rounded-lg'>
                                {/* Content card */}
                                <div>
                                    {user.map((user, i) => (<div key={i}>
                                        <Disclosure>
                                            <Disclosure.Button className="py-2 text-lg flex items-center gap-4" >
                                                <RiArrowRightSLine className="ui-open:rotate-90 ui-open:transform transition-all" /> Usuario {i + 1}
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="text-gray-800 text-sm px-8">
                                                <div>
                                                    ID: {user.id}
                                                </div>
                                                <div>
                                                    Nombre: {user.name}{" "}{user.lastName}
                                                </div>
                                                <div>
                                                    Username: {user.userName}
                                                </div>
                                                <div>
                                                    Email: {user.email}
                                                </div>
                                                <div>
                                                    <img src={`${user.imageProfile}`} alt="support" className='w-72 h-72 object-cover' />
                                                </div>
                                            </Disclosure.Panel>
                                        </Disclosure>
                                    </div>))}
                                </div>
                            </div>
                        </div>
                    </Tab.Panel>
                    <Tab.Panel>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                            <div className='bg-secondary-100 p-8 rounded-lg'>
                                <div>
                                    {gallery.map((gallery, i) => (<div key={i}>
                                        <Disclosure>
                                            <Disclosure.Button className="py-2 text-lg flex items-center gap-4" >
                                                <RiArrowRightSLine className="ui-open:rotate-90 ui-open:transform transition-all" /> Foto {i + 1}
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="text-gray-800 text-sm px-8">
                                                <div>
                                                    ID: {gallery.id}
                                                </div>
                                                <div>
                                                    Nombre: {gallery.name}
                                                </div>
                                                <div>
                                                    <img src={`${gallery.image}`} alt="support" className='w-72 h-72 object-cover' />
                                                </div>
                                            </Disclosure.Panel>
                                        </Disclosure>
                                    </div>))}
                                </div>
                            </div>
                            <div className='bg-secondary-100 p-8 rounded-lg'>
                                {/* Title card */}
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-xl'>Última Imagen Agregada</h1>
                                </div>
                                <div>
                                    ID: {lastGalleryDB.id}
                                </div>
                                <div>
                                    Nombre: {lastGalleryDB.name}
                                </div>
                                <div>
                                    <img src={`${lastGalleryDB.image}`} alt="support" className='w-72 h-72 object-cover' />
                                </div>
                            </div>
                        </div>
                    </Tab.Panel>
                    <Tab.Panel>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                            <div className='bg-secondary-100 p-8 rounded-lg'>
                                <div>
                                    {product.map((product, i) => (<div key={i}>
                                        <Disclosure>
                                            <Disclosure.Button className="py-2 text-lg flex items-center gap-4" >
                                                <RiArrowRightSLine className="ui-open:rotate-90 ui-open:transform transition-all" /> Servicio {i + 1}
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="text-gray-800 text-sm px-8">
                                                <div>
                                                    ID: {product.id}
                                                </div>
                                                <div>
                                                    Nombre: {product.name}
                                                </div>
                                                <div>
                                                    descripción: {product.description}
                                                </div>
                                                <div>
                                                    <img src={`${product.imageProduct}`} alt="support" className='w-72 h-72 object-cover' />
                                                </div>
                                                <div>
                                                    <Menu menuButton={
                                                        <MenuButton className='flex items-center gap-x-2 hover:bg-secondary-200 py-2 px-4 rounded-lg transition-colors'>
                                                            Otros
                                                        </MenuButton>
                                                    } transition menuClassName="bg-secondary-300">
                                                        <MenuItem className="p-0 hover:bg-transparent">
                                                            <div className='rounded-lg transition-colors hover:bg-secondary-100 flex items-center gap-x-4 py-2 px-6 flex-1'>
                                                                Precio: {product.price} <br />
                                                                Tipo: {product.PriceType.name}
                                                            </div>
                                                        </MenuItem>
                                                        <MenuItem className="p-0 hover:bg-transparent">
                                                            <div className='rounded-lg transition-colors hover:bg-secondary-100 flex items-center gap-x-4 py-2 px-6 flex-1'>
                                                                Categoría: {product.category.name}
                                                            </div>
                                                        </MenuItem>
                                                        <MenuItem className="p-0 hover:bg-transparent">
                                                            <div className='rounded-lg transition-colors hover:bg-secondary-100 flex items-center gap-x-4 py-2 px-6 flex-1'>
                                                                Subcategoría: {product.subcategory.name}
                                                            </div>
                                                        </MenuItem>
                                                    </Menu>
                                                </div>                                            
                                            </Disclosure.Panel>
                                        </Disclosure>
                                    </div>))}
                                </div>
                            </div>
                            <div className='bg-secondary-100 p-8 rounded-lg'>
                                {/* Title card */}
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-xl'>Último Servicio Agregado</h1>
                                </div>
                                <div>
                                    ID: {lastProductDB.id}
                                </div>
                                <div>
                                    Nombre: {lastProductDB.name}
                                </div>
                                <div>
                                    <img src={`${lastProductDB.image}`} alt="support" className='w-72 h-72 object-cover' />
                                </div>
                            </div>
                            <div className='bg-secondary-100 p-8 rounded-lg'>
                                <h1 className='text-2xl mb-8'>Productos por Subcategorías</h1>
                                <div>{countSubcat.map((countSubcat, i) => (<div key={i}>
                                    <div className='flex items-center gap-4 mb-4'>
                                        <div className='flex flex-col gal-1'>
                                            <h5>Instrumentos</h5>
                                            <p className='text-xs'>Total: {countSubcat.Instrumentos}</p>
                                        </div>
                                    </div>
                                </div>))}
                                </div>
                            </div>
                        </div>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div >
    )
}

export default Category;