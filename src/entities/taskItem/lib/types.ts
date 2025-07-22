import { Task } from "@/widgets/tasksList/lib/types";

export interface TaskItemProps {
  task: Task;
  onOpen: () => void;
  onToggle: () => void;
  onEdit: () => void;
  onDelete: () => void;
}
