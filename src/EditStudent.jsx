import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getStudent, updateStudent } from "../api/students";

export default function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    section: "",
    marks: "",
    grade: ""
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getStudent(id).then((data) => {
      setStudent(data);
      setLoading(false);
    });
  }, [id]);

  function handleChange(e) {
    setStudent({ ...student, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await updateStudent(id, student);
    navigate("/"); // go back home
  }

  if (loading) return <div className="text-center p-6">Loading...</div>;

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 shadow-lg rounded-xl">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">Edit Student</h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          name="name"
          value={student.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full p-2 border rounded"
        />

        <input
          name="section"
          value={student.section}
          onChange={handleChange}
          placeholder="Section"
          className="w-full p-2 border rounded"
        />

        <input
          name="marks"
          value={student.marks}
          onChange={handleChange}
          placeholder="Marks"
          type="number"
          className="w-full p-2 border rounded"
        />

        <input
          name="grade"
          value={student.grade}
          onChange={handleChange}
          placeholder="Grade"
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Save Changes
        </button>

      </form>
    </div>
  );
}
