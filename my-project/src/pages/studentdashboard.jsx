import reactIcon from '../assets/react.svg'
import StatTab from '../components/stattab';
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import ClassTab from '../components/classtab';
import Subjects from '../sample/subjects';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DonutChart from 'react-donut-chart';
import CustomCalendar from '../components/calendar';



function StudentDashboard(){
    return(<>
        <main className="flex-grow ml-[250px] p-5">
        <div className='flex bg-slate-100'>
            <div className='flex-col w-3/5'>
                <div className='flex'>
                    <StatTab val="170" label="Present lecture" icon={<FaChalkboardTeacher/>} colour='#ffbfd3aa' colourtwo='#ff3b79aa'/>
                    <StatTab val="89%" label="Attendance" icon={<FaUserCheck/>} colour='#fecdb78d' colourtwo='#fc7a3ed1'/>
                    <StatTab val="2" label="Pending assignments" icon={<FaRegClock/>} colour='#bae4ff8e' colourtwo='#81cdfc'/>
                    <StatTab val="3" label="Upcoming test" icon={<FaCalendarAlt/>} colour='#d5ffb4d4' colourtwo='#a4ff5fd4'/>
                </div>
                <div>
                    <h3 className='m-2 text-base'>Recent Activity</h3>
                </div>
                <div>
                    {Subjects.map((sub) => {
                        return( <ClassTab code={sub.code} name={sub.name}/> )
                    })}
                </div>
                
            </div>
                
            <div className='w-2/5 mt-2 mr-2'>
                    <CustomCalendar/>
            </div>
        </div>
        </main>
        
    
    </>);
}

export default StudentDashboard;