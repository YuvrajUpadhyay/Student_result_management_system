const BASE = "http://localhost:3000/students";

export async function getStudents() {
  const res = await fetch(BASE);
  if (!res.ok) throw new Error("Failed to load students");
  return res.json();
}

export async function getStudent(id) {
  const res = await fetch(`${BASE}/${id}`);
  if (!res.ok) throw new Error("Failed to load student");
  return res.json();
}

export async function addStudent(student) {
  const { id, ...data } = student;

  const res = await fetch(BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  if (!res.ok) throw new Error("Failed to add student");
  return res.json();
}

export async function updateStudent(id, student) {
  const res = await fetch(`${BASE}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student)
  });

  if (!res.ok) throw new Error("Failed to update");
  return res.json();
}

export async function deleteStudent(id) {
  const res = await fetch(`${BASE}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete");
  return true;
}
