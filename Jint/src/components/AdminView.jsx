import { Calendar } from './Calendar';
import Dropdown from './Dropdown';
import './index.css'
import './Sidebar'
import { Sidebar } from './Sidebar';

export function AdminView() {
    return (
        <>

<div class="h-screen grid grid-cols-12 gap-52">
  <div class="col-start-1 col-end-2 border border-gray-400">
    <Sidebar/>
  </div>
  <div class="col-span-5 border border-gray-400">Columna 2</div>
  <div class="col-span-6 item-center border border-gray-400 p-12 ">
  <Calendar/>
  </div>
</div>
        </>
    )
}