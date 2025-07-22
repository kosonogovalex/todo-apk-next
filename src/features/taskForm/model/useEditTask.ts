import { Task } from "@/widgets/tasksList/lib/types";
import { SetStateAction } from "react";

export const useEditTask = (
  editingTaskId: string | null,
  setTasks: (value: SetStateAction<Task[]>) => void,
  onFinish: () => void
) => {
  const handleEditTask = (data: Task) => {
    setTasks((tasks) => {
      const editedTasks = tasks.map((task) =>
        task.id === editingTaskId ? { ...task, ...data } : task
      );

      return editedTasks;
    });

    onFinish();
  };

  return handleEditTask;
};
