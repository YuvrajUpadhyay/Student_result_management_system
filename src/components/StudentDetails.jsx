import React from "react";

export default function StudentDetails({ student, onBack }) {
  return (
    <div className="p-6 max-w-lg mx-auto shadow-lg bg-white rounded-lg">
      <h2 className="text-2xl font-bold text-indigo-600 mb-4">Student Details</h2>

      <p className="text-lg"><strong>Name:</strong> {student.name}</p>
      <p className="text-lg"><strong>Section:</strong> {student.section}</p>
      <p className="text-lg"><strong>Marks:</strong> {student.marks}</p>
      <p className="text-lg"><strong>Grade:</strong> {student.grade}</p>

      <button onClick={onBack} className="mt-4 bg-gray-500 text-white px-4 py-2 rounded">
        Back
      </button>
    </div>
  );
}
