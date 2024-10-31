import React, { useState } from 'react';
import '../index.css'; // Ensure you have the necessary CSS

const CustomCalendar = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [modalDate, setModalDate] = useState('');
    const [showModal, setShowModal] = useState(false);

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const generateCalendar = () => {
        const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        const firstDayOfWeek = firstDayOfMonth.getDay();

        const daysArray = [];
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        daysArray.push(...daysOfWeek);

        for (let i = 0; i < firstDayOfWeek; i++) {
            daysArray.push('');
        }

        for (let day = 1; day <= daysInMonth; day++) {
            daysArray.push(day);
        }

        return daysArray;
    };

    const days = generateCalendar();

    const handlePrevMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const handleNextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    const handleDayClick = (day) => {
        if (day) {
            const selectedDate = new Date(currentYear, currentMonth, day);
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const formattedDate = selectedDate.toLocaleDateString(undefined, options);
            setModalDate(formattedDate);
            setShowModal(true);
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };

    // Example highlighted dates
    const testDates = [
        new Date(currentYear, currentMonth, 5), // Highlight 5th
        new Date(currentYear, currentMonth, 10), // Highlight 10th
        new Date(currentYear, currentMonth, 15), // Highlight 15th
    ];

    const submDates = [
        new Date(currentYear, currentMonth, 31),, // Highlight 15th
    ];

    return (
        <div className="bg-gray-100 flex w-full ">
            <div className="w-full">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="flex items-center justify-between px-6 py-3 bg-gray-700">
                        <button onClick={handlePrevMonth} className="text-white">Previous</button>
                        <h2 className="text-white">{`${monthNames[currentMonth]} ${currentYear}`}</h2>
                        <button onClick={handleNextMonth} className="text-white">Next</button>
                    </div>
                    <div className="grid grid-cols-7 gap-2 p-4">
                        {days.map((day, index) => {
                            const isToday = day === new Date().getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear();
                            const istest = testDates.some(date => date.getDate() === day && date.getMonth() === currentMonth && date.getFullYear() === currentYear);
                            const issubm = submDates.some(date => date.getDate() === day && date.getMonth() === currentMonth && date.getFullYear() === currentYear);


                            return (
                                <div
                                    key={index}
                                    className={`text-center py-2 border cursor-pointer ${
                                        isToday ? 'bg-zinc-700 text-white' :
                                        istest ? 'border-2 border-lime-300 text-black rounded-full' : // Highlighted date style
                                        issubm ? 'border-2 border-cyan-200 text-black rounded-full' : ''
                                    }`}
                                    onClick={() => handleDayClick(day)}
                                >
                                    {day}
                                </div>
                            );
                        })}
                    </div>
                    {showModal && (
                        <div className="modal fixed inset-0 flex items-center justify-center z-50">
                            <div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>
                            <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                                <div className="modal-content py-4 text-left px-6">
                                    <div className="flex justify-between items-center pb-3">
                                        <p className="text-2xl font-bold">Selected Date</p>
                                        <button onClick={closeModal} className="modal-close px-3 py-1 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring">✕</button>
                                    </div>
                                    <div className="text-xl font-semibold">{modalDate}</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CustomCalendar;
