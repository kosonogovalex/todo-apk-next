import { FormData } from "@/features/taskForm/lib/types";

export interface Task extends FormData {
  completed: boolean;
  id: string;
  createdAt: Date;
}

export interface TasksListProps {
  tasks: Task[];
  onToggle: (taskId: string) => void;
  onOpen: (taskId: string) => void;
  onEdit: (taskId: string) => void;
  onDelete: (taskId: string) => void;
}
