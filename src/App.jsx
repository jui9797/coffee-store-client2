
import { useLoaderData } from 'react-router-dom'
import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import CoffeeCard from './components/CoffeeCard'
import { useState } from 'react'
import bgimg from '../src/assets/images/more/1.png'
import Follow from './components/Follow'
import Footer from './components/Footer'

function App() {
  const loadedcoffees =useLoaderData()
 const [coffees, setCoffees] =useState(loadedcoffees)

  return (
    <>
      
     <Navbar></Navbar>
     <Banner></Banner>

     <div  style={{ backgroundImage: `url(${bgimg})`,
     backgroundSize: 'cover',
     backgroundPosition: 'center'
      }}>
      <h2 className='text-2xl font-bold my-8 text-center'>Exclusive coffees are here: {coffees.length}</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-2/3 mx-auto'>
      {
        coffees.map(coffee =><CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
      }
      </div>
     </div>

     <Follow></Follow>
     <Footer></Footer>
      
    </>
  )
}

export default App
