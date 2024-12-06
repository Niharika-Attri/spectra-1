import Sidebar from "../components/sidebar";
import { Att_record, Subjects } from "../sample/subjects";

const setColour = (att) => {
    if (att >= 90 && att < 100) return 'bg-green-400';
    if (att >= 75 && att < 90) return 'bg-yellow-300';
    if (att >= 60 && att < 75) return 'bg-orange-400';
    return 'bg-red-500';
};

function Attendance() {
    return (
        <div className="flex">
            <div className="w-1/5 h-screen bg-slate-700">
                <Sidebar />
            </div>
            <div className="flex flex-col w-full items-center justify-center p-4">
                

                {/* Attendance Table */}
                <div className="flex overflow-x-auto items-center w-full justify-center">
                    <table className="min-w-full bg-white border border-gray-200 mb-3">
                        <thead>
                            <tr>
                                <th className="text-sm text-center w-24 border-2">Subject</th>
                                {Subjects.map((sub) => (
                                    <th key={sub.code} className="text-sm text-center w-24 border-2">
                                        {sub.code}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="text-sm text-center w-24 border-2">Attendance</th>
                                {Att_record.map((att, index) => (
                                    <td
                                        key={index}
                                        className="flex-col items-center text-center w-24 border-2"
                                    >
                                        <h5 className={` ${setColour(att)} text-white p-1 w-20 rounded-full`}>{att}%</h5>
                                    </td>
                                ))}
                            </tr>
                            
                        </tbody>
                        
                    </table>
                    
                </div>
                {/* Description Section */}
                <div className="mb-4 p-4 bg-gray-100 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-2">Attendance Color Description</h2>
                    <ul className="text-sm list-disc pl-5">
                        <li>
                            <span className="inline-block w-4 h-4 bg-green-400 rounded-full mr-2"></span>
                            <strong>Green:</strong> Excellent attendance (90% - 100%)
                        </li>
                        <li>
                            <span className="inline-block w-4 h-4 bg-yellow-300 rounded-full mr-2"></span>
                            <strong>Yellow:</strong> Good attendance (75% - 89%)
                        </li>
                        <li>
                            <span className="inline-block w-4 h-4 bg-orange-400 rounded-full mr-2"></span>
                            <strong>Orange:</strong> Average attendance (60% - 74%)
                        </li>
                        <li>
                            <span className="inline-block w-4 h-4 bg-red-500 rounded-full mr-2"></span>
                            <strong>Red:</strong> Poor attendance (less than 60%)
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Attendance;
