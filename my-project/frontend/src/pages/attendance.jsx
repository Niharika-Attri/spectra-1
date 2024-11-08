import Sidebar from "../components/sidebar";
import { Subjects } from "../sample/subjects";

function Attendance(){
    return(<>
      <div className='flex '>
        <div className='w-1/5 h-screen bg-slate-700'><Sidebar/></div>
        <div class="overflow-x-auto">
    <table class="min-w-full bg-white border border-gray-200">
        <thead>
            <tr>
            {Subjects.map((sub) => {
                        return( <th className="text-sm">{sub.code}</th>)
                    })}
            </tr>
            
            
        </thead>
        <tbody>
            <tr class="border-b">
                <td class="py-2 px-4">John Doe</td>
                <td class="py-2 px-4">29</td>
                <td class="py-2 px-4">john@example.com</td>
            </tr>
            <tr class="bg-gray-50 border-b">
                <td class="py-2 px-4">Jane Smith</td>
                <td class="py-2 px-4">34</td>
                <td class="py-2 px-4">jane@example.com</td>
            </tr>
            <tr class="border-b">
                <td class="py-2 px-4">Alice Brown</td>
                <td class="py-2 px-4">42</td>
                <td class="py-2 px-4">alice@example.com</td>
            </tr>
        </tbody>
    </table>
</div>

      </div>
    </>)
}
export default Attendance;