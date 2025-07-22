"use client";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { TaskForm } from "@/shared/ui/taskForm/taskForm";
import { TaskItem, TaskItemProps } from "@/shared/ui/taskItem/taskItem";
import { Task } from "@/shared/ui/tasksList/tasksList";
import { Typography, Button, List } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export default function MainPage() {
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);

  // const [tasks, setTasks] = useState<Task[]>([
  //   {
  //     title: "Первая задача",
  //     description: "описание первой задачи",
  //     completed: false,
  //     id: "1",
  //     createdAt: new Date(),
  //   },
  // ]);

  const [editingTask, setEditingTask] = useState<Task | null>(null);

  // Обработчик добавления/обновления задачи
  const handleSubmit = (data: Omit<Task, "id" | "createdAt">) => {
    try {
      if (editingTask) {
        setTasks(
          tasks.map((task) =>
            task.id === editingTask.id
              ? {
                  ...data,
                  id: editingTask.id,
                  createdAt: editingTask.createdAt,
                }
              : task
          )
        );
        setEditingTask(null);
        console.log("Задача обновлена:", data); // NEW: Лог успеха
      } else {
        const newTask = {
          ...data,
          id: Date.now().toString(),
          createdAt: new Date(),
        };
        setTasks([...tasks, newTask]);
        console.log("Задача добавлена:", newTask); // NEW: Лог успеха
      }
    } catch (error) {
      console.error("Ошибка при сохранении задачи:", error); // NEW: Лог ошибки
    }
  };

  // Обработчик удаления задачи
  const handleDelete = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Обработчик переключения статуса
  const handleToggle = (taskId: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div style={{ width: "50%", padding: "24px" }}>
      <TaskForm
        onSubmit={handleSubmit}
        onCancel={() => setEditingTask(null)}
        initialValues={editingTask || undefined}
      />

      {/* // return (
  //   <div style={{ width: "50%", padding: "24px" }}>
  //     <TaskForm
  //       onSubmit={(data) => {
  //         setTasks((prev) => {
  //           return [...prev, data];
  //         });
  //       }}
  //       onCancel={() => {}}
  //     /> */}
      <List>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={() => handleToggle(task.id)}
            onEdit={() => setEditingTask(task)}
            onDelete={() => handleDelete(task.id)}
          />
        ))}
      </List>
    </div>
  );
}

// style={{
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'center',
//   height: '80vh',
//   textAlign: 'center',
// }}>
// <Typography variant="h3" gutterBottom>
//   Главный раздел
// </Typography>
// <Link href="/tasks" passHref>
//   <Button variant="contained" size="large">
//     Перейти к задачам
//   </Button>
// </Link>
