import { Task } from "@/widgets/tasksList/lib/types";
import { SetStateAction } from "react";

export const useToggleTask = (
  setTasks: (value: SetStateAction<Task[]>) => void
) => {
  const handleToggle = (taskId: string) => {
    setTasks((tasks) => {
      const tasksToggled = tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      );

      return tasksToggled;
    });
  };

  return handleToggle;
};
