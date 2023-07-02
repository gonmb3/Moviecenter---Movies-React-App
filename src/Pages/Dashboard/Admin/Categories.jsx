
import SideBar from '../SideBar'
import {  HiPlusCircle } from 'react-icons/hi'

import { CategoriesData } from '../../../Data/CategoriesData'
import Table2 from '../../../Components/Table2'

const Categories = () => {


  return (
    <SideBar>
            <div className="flex flex-col gap-6">
                  <div className="flex-btn gap-2">
                    <h2 className='text-xl font-bold'>
                      Categorias
                    </h2>
                    <button className='flex-rows gap-4 bg-subMain font-medium transitions hover:bg-main border border-subMain text-white py-2 px-4 rounded'>
                      <HiPlusCircle size={20} /> Crear
                    </button>
                  </div>

                  {/* Table component - favorite movies*/}
                  <Table2 data={CategoriesData} users={false} />
            </div>
    </SideBar>
  )
}

export default Categories