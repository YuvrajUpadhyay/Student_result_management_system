import React, { useState } from "react";
import {
  getStudents,
  getStudent,
  addStudent,
  updateStudent,
  deleteStudent,
} from "./services/studentService";

import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import StudentDetails from "./components/StudentDetails";

export default function App() {
  const [students, setStudents] = useState([]);
  const [mode, setMode] = useState("list"); 
  const [selected, setSelected] = useState(null);

  async function load() {
    try {
      const data = await getStudents();
      setStudents(data);
    } catch (err) {
      alert(err.message);
    }
  }

  async function handleAdd(student) {
    try {
      await addStudent(student);
      alert("Student added!");
      setMode("list");
    } catch (e) {
      alert("Error: " + e.message);
    }
  }

  async function handleEdit(student) {
    try {
      await updateStudent(student.id, student);
      alert("Student updated!");
      setMode("list");
    } catch (e) {
      alert("Error: " + e.message);
    }
  }

  async function handleDelete(id) {
    if (!confirm("Delete this student?")) return;

    try {
      await deleteStudent(id);
      alert("Deleted!");
      load();
    } catch (e) {
      alert(e.message);
    }
  }

  async function openEdit(id) {
    const s = await getStudent(id);
    setSelected(s);
    setMode("edit");
  }

  async function openView(id) {
    const s = await getStudent(id);
    setSelected(s);
    setMode("details");
  }

  if (mode === "add")
    return <StudentForm initial={{ name: "", section: "", marks: "", grade: "" }} onSubmit={handleAdd} onCancel={() => setMode("list")} />;

  if (mode === "edit")
    return <StudentForm initial={selected} onSubmit={handleEdit} onCancel={() => setMode("list")} />;

  if (mode === "details")
    return <StudentDetails student={selected} onBack={() => setMode("list")} />;

  return (
    <StudentList
      students={students}
      onLoad={load}
      onAdd={() => setMode("add")}
      onEdit={openEdit}
      onView={openView}
      onDelete={handleDelete}
    />
  );
}

