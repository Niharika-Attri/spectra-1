import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import { Subjects } from "../sample/subjects";

function Classroom() {
  const [selectedSubject, setSelectedSubject] = useState(null); // State to track the selected subject
  const [isModalOpen, setIsModalOpen] = useState(false); // State to toggle modal visibility

  // Function to open the modal and set the selected subject
  const openModal = (subject) => {
    setSelectedSubject(subject);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSubject(null);
  };

  return (
    <div className="flex ">
      <div className="w-1/5 bg-slate-700">
        <Sidebar />
      </div>
      <div className="flex-col w-4/5 ">
        {Subjects.map((subject) => {
          return (
            <div
              key={subject.code}
              className="flex h-48 m-2 bg-slate-200 rounded-xl"
            >
              <div className="bg-slate-400 w-1/5 content-center text-center">
                <h3 className="text-xl">{subject.code}</h3>
              </div>
              <div className="content-center p-4">
                {/* Clicking the subject name will open the modal */}
                <h4
                  className="cursor-pointer text-blue-500 hover:underline"
                  onClick={() => openModal(subject)}
                >
                  {subject.name}
                </h4>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal for displaying PDFs or other content */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-3/5 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">
              {selectedSubject.name} ({selectedSubject.code})
            </h2>
            <p className="mb-4">Here is the content related to the subject:</p>

            {/* Example: List of PDFs */}
            <ul>
              {selectedSubject.resources?.map((resource, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>

            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Classroom;
