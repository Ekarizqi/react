import React from 'react'
// import Blog from './Blog';
import Produk from '../class/Produk'

const Home = () => {
    return <div>
        <Produk nama="Macbook Pro 2020" stock="10" harga="25000000" />
        <Produk nama="Macbook Pro 2020" stock="12" harga="30000000" />
        <Produk nama="Macbook Pro 2021" stock="9" harga="20000000" />
        <Produk nama="Macbook Pro 2022" stock="7" harga="35000000" />
        {/* <Blog
        tanggal="02 Juni 2021"
        judul="IoT"
        summary="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. "/>
        <Blog
        tanggal="03 Juni 2021"
        judul="Frontend Web Developer"
        summary="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. "/>
        <Blog
        tanggal="05 Juni 2021"
        judul="Artificial Intelegence"
        summary="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. "/> */}
        </div>
}

export default Home;