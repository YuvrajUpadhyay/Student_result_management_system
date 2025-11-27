const BASE = "http://localhost:3000/students";

export async function getStudents() {
  const res = await fetch(BASE);
  return res.json();
}

export async function addStudent(student) {
  const { marks } = student;
  const grade =
    marks >= 90 ? "A" : marks >= 75 ? "B" : marks >= 60 ? "C" : "D";

  const res = await fetch(BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...student, grade }),
  });

  return res.json();
}

export async function deleteStudent(id) {
  await fetch(`${BASE}/${id}`, { method: "DELETE" });
}
export async function updateStudent(id, student) {
  const res = await fetch(`${BASE}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student)
  });
  if (!res.ok) throw new Error("Failed to update student");
  return res.json();
}
