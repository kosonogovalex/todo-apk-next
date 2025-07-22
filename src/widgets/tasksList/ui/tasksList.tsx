"use client";
import { FC } from "react";
import { TasksListProps } from "../lib/types";
import { List } from "@mui/material";
import { TaskItem } from "@/entities/taskItem/ui/taskItem";

export const TasksList: FC<TasksListProps> = ({
  tasks,
  onDelete,
  onOpen,
  onEdit,
  onToggle,
}) => {
  return (
    <List>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onOpen={() => onOpen(task.id)}
          onToggle={() => onToggle(task.id)}
          onEdit={() => onEdit(task.id)}
          onDelete={() => onDelete(task.id)}
        />
      ))}
    </List>
  );
};
