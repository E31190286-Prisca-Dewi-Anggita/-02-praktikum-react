import React, { useState } from "react";

function TaskTable({ tasks, onDelete }) {
    return (
        <table border="1" width="100%" cellPadding="5">
            <thead>
                <tr style={{ background: "#f2f2f2" }}>
                    <th>No</th>
                    <th>Tugas</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                {tasks.length > 0 ? (
                    tasks.map((task, index) => (
                        <tr key={index}>
                            <td style={{ textAlign: "center" }}>{index + 1}</td>
                            <td>{task}</td>
                            <td style={{ textAlign: "center" }}>
                                <button
                                    onClick={() => {
                                        if (window.confirm("Apakah yakin Anda ingin menghapus tugas ini?")) {
                                            onDelete(index);
                                        }
                                    }}
                                    style={{
                                        color: "red",
                                        border: "none",
                                        background: "none",
                                        cursor: "pointer",
                                    }}
                                >
                                    Hapus
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="3" style={{ textAlign: "center" }}>
                            Tidak ada tugas
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

// Komponen Utama: TodoList
function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState(""); 

    const handleAddTask = () => {
        if (newTask.trim() === "") return;
        setTasks([...tasks, newTask]);
        setNewTask("");
    };

    const handleDeleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div style={{ maxWidth: "500px" }}>
            <h2 style={{ textAlign: "center" }}>Daftar Tugas</h2>

            <div style={{ marginBottom: "10px", display: "flex", gap: "10px" }}>
                <input
                    type="text"
                    placeholder="Tambahkan tugas..."
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    style={{ flex: 1, padding: "5px" }}
                />
                <button onClick={handleAddTask} style={{ padding: "5px 10px" }}>
                    Tambah
                </button>
            </div>

            <TaskTable tasks={tasks} onDelete={handleDeleteTask} />
        </div>
    );
}

export default TodoList;