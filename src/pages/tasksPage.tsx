import { useLocalStorage } from "@/shared/hooks/useLocalStorage";
import { TaskForm } from "@/features/taskForm/ui/taskForm";
import { Task } from "@/widgets/tasksList/lib/types";
import { TasksList } from "@/widgets/tasksList/ui/tasksList";
import { Box, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { useToggleTask } from "@/features/toggleTask/model/useToggleTask";
import { useDeleteTask } from "@/features/deleteTask/model/useDeleteTask";
import { useAddTask } from "@/features/taskForm/model/useAddTask";
import { useEditTask } from "@/features/taskForm/model/useEditTask";
import { findTaskById } from "@/features/taskForm/lib/findTaskById";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "white",
  padding: 4,
};

export default function TasksPage() {
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [viewModalIsOpen, setViewModalIsOpen] = useState(false);
  const handleToggle = useToggleTask(setTasks);
  const handleDelete = useDeleteTask(setTasks);
  const addTask = useAddTask(setTasks);
  const handleEdit = useEditTask(selectedTaskId, setTasks, () =>
    setEditModalIsOpen(false)
  );
  const selectedTask = findTaskById(tasks, selectedTaskId);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div style={{ width: "80%", padding: "24px" }}>
        <TaskForm onSubmit={addTask} />
        <TasksList
          tasks={tasks}
          onOpen={(id) => {
            setViewModalIsOpen(true);
            setSelectedTaskId(id);
          }}
          onDelete={handleDelete}
          onEdit={(id) => {
            setSelectedTaskId(id);
            setEditModalIsOpen(true);
          }}
          onToggle={handleToggle}
        />
        <Modal open={editModalIsOpen} onClose={() => setEditModalIsOpen(false)}>
          <Box sx={modalStyle}>
            <TaskForm
              onSubmit={(data) => handleEdit(data as Task)}
              initialValues={selectedTask}
              onCancel={() => {
                setEditModalIsOpen(false);
                setSelectedTaskId(null);
              }}
            />
          </Box>
        </Modal>
        <Modal open={viewModalIsOpen} onClose={() => setViewModalIsOpen(false)}>
          <Box
            sx={{
              ...modalStyle,
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <Typography
              sx={{
                fontSize: 20,
                wordBreak: "break-word",
              }}
            >
              Заголовок: {selectedTask?.title}
            </Typography>
            <Typography
              sx={{
                fontSize: 16,
                wordBreak: "break-word",
              }}
            >
              Описание: {selectedTask?.description}
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
