import React from 'react'
import { FaRegListAlt, FaUser } from 'react-icons/fa'
import { HiViewGridAdd } from 'react-icons/hi'
import SideBar from '../SideBar'
import Table from '../../../Components/Table'

import { Movies } from '../../../Data/MovieData'


const Dashboard = () => {

  const DashboardData = [
    {
      bg:"bg-orange-500",
      icon: FaRegListAlt,
      title: "Películas",
      total:90
    },
    {
      bg:"bg-subMain",
      icon: HiViewGridAdd,
      title: "Categorias",
      total:8
    },
    {
      bg:"bg-green-600",
      icon: FaUser,
      title: "Usuarios ",
      total:800
    },
  ]

  return (
    <SideBar>
            <h2 className='text-xl font-bold'>Panel</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {
                DashboardData.map((data, index) => (
                  <div className="p-4 rounded bg-main border-border grid grid-cols-4 gap-2">
                    <div className={`col-span-1 rounded-full h-12 w-12 flex-colo ${data.bg}`}>
                      <data.icon/>
                    </div>
                    <div className="col-span-3">
                      {data.title}
                      <p className='text-sx mt-2 font-bold'>{data.total} </p>
                    </div>
                  </div>
                ))
              }
            </div>
            <h3 className='text-md font-medium itailc my-6 text-border'>
              Películas Recientes
            </h3>
            <Table data={Movies.slice(0,6)} admin={false} />
    </SideBar>
  )
}

export default Dashboard