import React from "react";

export default function StudentList({ students, onView, onEdit, onDelete, onLoad, onAdd }) {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">Student Result Dashboard</h2>

      <div className="flex gap-3 mb-4">
        <button onClick={onLoad} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
          Load Students
        </button>

        <button onClick={onAdd} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
          Add Student
        </button>
      </div>

      <table className="w-full border-collapse shadow-md">
        <thead>
          <tr className="bg-blue-100 text-left">
            <th className="p-3">Name</th>
            <th className="p-3">Section</th>
            <th className="p-3">Marks</th>
            <th className="p-3">Grade</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s.id} className="border-b hover:bg-gray-50">
              <td className="p-3">{s.name}</td>
              <td className="p-3">{s.section}</td>
              <td className="p-3">{s.marks}</td>
              <td className="p-3 font-bold">{s.grade}</td>
              <td className="p-3 flex gap-2">
                <button onClick={() => onView(s.id)} className="px-3 py-1 bg-indigo-500 text-white rounded">
                  View
                </button>
                <button onClick={() => onEdit(s.id)} className="px-3 py-1 bg-yellow-500 text-white rounded">
                  Edit
                </button>
                <button onClick={() => onDelete(s.id)} className="px-3 py-1 bg-red-500 text-white rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
