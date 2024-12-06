import { useState } from 'react';
import Select from 'react-select'; // Import React Select
import bgimg from '../assets/cuberender.png';
import { Subjects } from '../sample/subjects';
import { Classes } from '../sample/subjects';
import axios from 'axios';

function Signup_Page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('student');
    const [subjects, setSubjects] = useState([]);
    const [rollNo, setRollNo] = useState('');
    const [selectedClass, setSelectedClass] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');


    const subjectOptions = Subjects.map((subject) => ({
        value: subject.code, // Use 'code' as the value
        label: subject.name, // Use 'name' as the label for display
    }));
    

    const handleSignup = async(e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/student/signup', {
                name:`user${Math.random()}`,
                email,
                password,
                role,
                subjects,
                rollno: rollNo,
                class: selectedClass
            });

            setSuccessMessage(response.data.message);
            setErrorMessage('');
        } catch (error) {
            setErrorMessage(error.response.data.message || 'An error occurred');
            setSuccessMessage('');
            console.log('the error ', error);
            console.log('message: ',error.response.data.message);
        }

        console.log(email, password, subjects, rollNo); 
    };

    return (
        <div
            className="bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center"
            style={{ backgroundImage: `url(${bgimg})` }}
        >
            <div className="h-5/6 w-2/4 bg-black/10 backdrop-blur-md rounded-2xl items-center justify-center text-center flex border-2">
                <form onSubmit={handleSignup} className="w-full grid grid-cols-2">
                    <h1 className="col-span-2 text-white text-5xl mt-3 mb-4 font-karla">Sign Up</h1>

                    {/* Role Selection */}
                    <div className="mb-4 col-span-2">
                        <label className="text-white p-1 " htmlFor="role">Role</label>
                        <select
                            id="role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="rounded-xl justify-center text-center "
                            required
                        >
                            <option value="student">Student</option>
                            <option value="teacher">Teacher</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>

                    {/* Conditional Fields for Student */}
                    {role === 'student' && (
                        <>
                            <div className="mb-5 relative w-4/5 justify-center mx-auto">
                                <label className="block text-white text-lg absolute top-0 left-0" htmlFor="rollNo">Roll Number</label>
                                <input
                                    type="text"
                                    id="rollNo"
                                    value={rollNo}
                                    onChange={(e) => setRollNo(e.target.value)}
                                    className="w-full h-12 rounded-lg bg-transparent border mt-6 p-4 text-white focus:shadow-white/40 focus:shadow-xl focus:bg-white/10"
                                    required
                                />
                            </div>

                            <div className="mb-5 relative w-4/5 justify-center mx-auto">
                                <label className="block text-white text-lg absolute top-0 left-0" htmlFor="class">Select Class</label>
                                <select
                                    id="class"
                                    value={selectedClass}
                                    onChange={(e) => setSelectedClass(e.target.value)}
                                    className="w-full h-12 rounded-lg bg-transparent border mt-6  text-white focus:shadow-white/40 focus:shadow-xl focus:bg-white/10"
                                    required
                                >
                                    <option classname="text-black" value="">Select a class</option>
                                    {Classes.map((cls) => (
                                        <option className="text-black" value={cls}>{cls}</option>
                                    ))}
                                </select>
                            </div>

                            
                            <div className="mb-4">
                                <label className="text-white p-1" htmlFor="subjects">Select Subjects</label>
                                <Select
                                    id="subjects"
                                    options={subjectOptions}
                                    isMulti
                                    value={subjects}
                                    onChange={(selectedOptions) => setSubjects(selectedOptions)}
                                    className="w-3/4 text-black mx-auto bg-transparent "
                                    placeholder="Select subjects..."
                                />
                            </div>
                        </>
                    )}

                    {/* Email */}
                    <div className="mb-5 relative w-4/5 justify-center mx-auto">
                        <label className="block text-white text-lg absolute top-0 left-0" htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full h-12 rounded-lg bg-transparent border mt-6 p-4 text-white focus:shadow-white/40 focus:shadow-xl focus:bg-white/10"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-5 relative w-4/5 justify-center mx-auto">
                        <label className="block text-white text-lg absolute top-0 left-0" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full h-12 rounded-lg bg-transparent border mt-6 p-4 text-white focus:shadow-white/40 focus:shadow-xl focus:bg-white/10"
                            required
                        />
                    </div>

                    {/* Confirm Password */}
                    <div className="mb-5 relative w-4/5 justify-center mx-auto">
                        <label className="block text-white text-lg absolute top-0 left-0" htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full h-12 rounded-lg bg-transparent border mt-6 p-4 text-white focus:shadow-white/40 focus:shadow-xl focus:bg-white/10"
                            required
                        />
                    </div>

                    {/* Error Message */}
                    {errorMessage && (
                        <p className="text-red-500 mb-4 col-span-2">{errorMessage}</p>
                    )}

                    {successMessage && (
                    <p className='text-green-600 col-span-2'>{successMessage}</p>
                    )}

                    {/* Submit Button */}
                    <button type="submit" className="col-span-2 mb-2 block h-16 w-1/2 bg-white rounded-full mx-auto">
                        <div>
                            <h3 className="font-karla text-3xl font-bold bg-gradient-to-r from-fuchsia-500 to-purple-800 bg-clip-text text-transparent">Sign Up</h3>
                        </div>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Signup_Page;
