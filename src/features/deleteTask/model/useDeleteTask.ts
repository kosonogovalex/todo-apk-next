import { Task } from "@/widgets/tasksList/lib/types";
import { SetStateAction } from "react";

export const useDeleteTask = (
  setTasks: (value: SetStateAction<Task[]>) => void
) => {
  const handleDelete = (taskId: string) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== taskId));
  };

  return handleDelete;
};
