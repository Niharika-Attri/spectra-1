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
            <div className="flex overflow-x-auto items-center w-full justify-center">
                <table className="min-w-full bg-white border border-gray-200">
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
                                    className=" flex-col items-center text-center w-24 border-2 "
                                >
                                    <h5 className={` ${setColour(att)} text-white p-1 w-20 rounded-full`}>{att}</h5>
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Attendance;
