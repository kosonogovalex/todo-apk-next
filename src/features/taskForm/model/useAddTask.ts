import { Task } from "@/widgets/tasksList/lib/types";
import { SetStateAction } from "react";

export const useAddTask = (
  setTasks: (value: SetStateAction<Task[]>) => void
) => {
  const handleAddTask = (data: Pick<Task, "title" | "description">) => {
    try {
      const newTask = {
        ...data,
        id: Date.now().toString(),
        createdAt: new Date(),
        completed: false,
      };

      setTasks((tasks) => [newTask, ...tasks]);
      console.log("Задача добавлена:", newTask);
    } catch (error) {
      console.error("Ошибка при сохранении задачи:", error);
    }
  };

  return handleAddTask;
};
