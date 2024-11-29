
import { useLoaderData } from 'react-router-dom'
import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import CoffeeCard from './components/CoffeeCard'
import { useState } from 'react'

function App() {
  const loadedcoffees =useLoaderData()
 const [coffees, setCoffees] =useState(loadedcoffees)

  return (
    <>
      
     <Navbar></Navbar>
     <Banner></Banner>

     <div>
      <h2 className='text-2xl font-bold'>Exclusive coffees are here: {coffees.length}</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      {
        coffees.map(coffee =><CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
      }
      </div>
     </div>
      
    </>
  )
}

export default App
