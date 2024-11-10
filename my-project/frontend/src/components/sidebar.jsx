// Sidebar.js
import { FaUser, FaCog, FaChartBar, FaBox, FaUserFriends, FaShippingFast } from 'react-icons/fa';
import { PiStudentFill } from "react-icons/pi";

function Sidebar(){
  return(<>
  <div className='flex w-full mb-4'>
    <div className='h-16 w-16 flex items-center justify-center m-2 rounded-full bg-white'>{<PiStudentFill className='size-14 text-slate-700'/>}</div>
    <div className='flex-col h-16 items-center justify-center text-white'><h2 className='text-xl'>Username</h2><h5 className='text-sm font-thin'>Student</h5></div>
    
  </div>
  <div className="flex-col">
                    <a href="/dashboard" className="text-lg ml-2 mb-3 block text-gray-300 hover:text-white">
                        Home
                    </a>
                    <a href="/attendance" className="text-lg ml-2 mb-3 block text-gray-300 hover:text-white">
                        Attendance
                    </a>
                    <a href="/classroom" className="text-lg ml-2 mb-3 block text-gray-300 hover:text-white">
                        Classroom
                    </a>
                    <a href="/" className="text-lg ml-2 mb-3 block text-gray-300 hover:text-white">
                        Logout
                    </a>
                </div>
  
  </>)
}

export default Sidebar;
