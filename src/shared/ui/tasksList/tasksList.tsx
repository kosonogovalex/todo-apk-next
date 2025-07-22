"use client";
import { useState } from "react";
import { Paper } from "@mui/material";
import TaskForm from "../taskForm/taskForm";
import { TaskItem } from "../taskItem/taskItem";

export interface Task {
  title: string;
  description: string | "";
  completed: boolean;
  id: string;
  createdAt: Date;
}

export function TasksList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  // Обработчик добавления (принимает FormData)
  const handleAdd = (formData: { title: string; description: string | "" }) => {
    setTasks([
      ...tasks,
      {
        ...formData,
        id: Date.now().toString(),
        completed: false,
        createdAt: new Date(),
      },
    ]);
  };

  // Обработчик обновления (принимает FormData)
  const handleUpdate = (formData: {
    title: string;
    description: string | "";
  }) => {
    if (!editingTask) return;

    setTasks(
      tasks.map((t) =>
        t.id === editingTask.id
          ? {
              ...t,
              title: formData.title,
              description: formData.description,
            }
          : t
      )
    );
    setEditingTask(null);
  };

  return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: 700, mx: "auto", mb: 4 }}>
      <TaskForm
        onSubmit={editingTask ? handleUpdate : handleAdd} // Теперь типы совместимы
        initialValues={editingTask}
        onCancel={() => setEditingTask(null)}
      />
    </Paper>
  );
}
