"use client";
import { Delete, Edit } from "@mui/icons-material";
import {
  IconButton,
  Checkbox,
  Chip,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Typography,
  Box,
  Stack,
} from "@mui/material";
import { Task } from "../tasksList/tasksList";
import { relative } from "path";

interface TaskItemProps {
  task: Task;
  onToggle: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export const TaskItem = ({
  task,
  onToggle,
  onEdit,
  onDelete,
}: TaskItemProps) => {
  return (
    <ListItem divider sx={{ position: "relative" }}>
      <Checkbox
        edge="start"
        checked={task.completed || false}
        onChange={onToggle}
        color="primary"
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          pr: 14,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            textDecoration: task.completed ? "line-through" : "none",
            color: task.completed ? "text.disabled" : "text.primary",
          }}
        >
          {task.title}
        </Typography>
        {task.description && (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              textDecoration: task.completed ? "line-through" : "none",
              opacity: task.completed ? 0.7 : 1,
            }}
          >
            {task.description}
          </Typography>
        )}
      </Box>

      <Chip
        label={task.completed ? "Выполнено" : "Активно"}
        color={task.completed ? "success" : "primary"}
        size="small"
        sx={{
          position: "absolute",
          left: "50%",
          transform: "translate(-50%, -50%)",
          top: "50%",
        }}
      />

      <Chip
        label={new Date(task.createdAt).toLocaleDateString("ru-RU")}
        size="small"
        variant="outlined"
        sx={{
          position: "absolute",
          right: 72,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" onClick={onEdit} aria-label="edit">
          <Edit />
        </IconButton>
        <IconButton edge="end" onClick={onDelete} aria-label="delete">
          <Delete color="error" />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

// "use client";
// import { Delete, Edit } from "@mui/icons-material";
// import {
//   IconButton,
//   Checkbox,
//   Chip,
//   ListItem,
//   ListItemText,
//   ListItemSecondaryAction,
// } from "@mui/material";
// import { Task } from "../tasksList/tasksList";

// interface TaskItemProps {
//   task: Task;
//   onToggle: () => void;
//   onEdit: () => void;
//   onDelete: () => void;
// }

// export const TaskItem = ({
//   task,
//   onToggle,
//   onEdit,
//   onDelete,
// }: TaskItemProps) => {
//   return (
//     <ListItem divider>
//       <Checkbox
//         edge="start"
//         checked={task.completed}
//         onChange={onToggle}
//         color="primary"
//       />
//       <ListItemText
//         primary={task.title}
//         secondary={task.description}
//         sx={{
//           textDecoration: task.completed ? "line-through" : "none",
//           opacity: task.completed ? 0.7 : 1,
//         }}
//       />
//       <Chip
//         label={new Date(task.createdAt).toLocaleDateString()}
//         size="small"
//         sx={{ mr: 2 }}
//       />
//       <ListItemSecondaryAction>
//         <IconButton edge="end" onClick={onEdit} aria-label="edit">
//           <Edit />
//         </IconButton>
//         <IconButton edge="end" onClick={onDelete} aria-label="delete">
//           <Delete color="error" />
//         </IconButton>
//       </ListItemSecondaryAction>
//     </ListItem>
//   );
// };
