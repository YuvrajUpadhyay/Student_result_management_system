import React, { useState } from "react";

export default function StudentForm({ initial, onCancel, onSubmit }) {
  const [form, setForm] = useState(initial);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function submit() {
    onSubmit(form);
  }

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-green-600">
        {form.id ? "Edit Student" : "Add Student"}
      </h2>

      <div className="flex flex-col gap-4">
        <input className="p-2 border rounded" name="name" value={form.name} onChange={handleChange} placeholder="Name" />

        <input className="p-2 border rounded" name="section" value={form.section} onChange={handleChange} placeholder="Section" />

        <input className="p-2 border rounded" name="marks" value={form.marks} onChange={handleChange} placeholder="Marks" />

        <input className="p-2 border rounded" name="grade" value={form.grade} onChange={handleChange} placeholder="Grade" />

        <div className="flex gap-3 mt-4">
          <button onClick={submit} className="bg-blue-500 text-white px-4 py-2 rounded">
            Save
          </button>

          <button onClick={onCancel} className="bg-gray-400 text-white px-4 py-2 rounded">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
