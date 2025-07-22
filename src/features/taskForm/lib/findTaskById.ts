import { Task } from "@/widgets/tasksList/lib/types";

export const findTaskById = (tasks: Task[], taskId: string | null) => {
  if (!taskId) {
    return undefined;
  }

  return tasks.find((task) => task.id === taskId);
};
