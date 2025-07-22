"use client";
import { Delete, Edit } from "@mui/icons-material";
import {
  IconButton,
  Checkbox,
  Chip,
  ListItem,
  ListItemSecondaryAction,
  Typography,
  Box,
} from "@mui/material";
import { TaskItemProps } from "../lib/types";
import { FC } from "react";

export const TaskItem: FC<TaskItemProps> = ({
  task,
  onToggle,
  onOpen,
  onEdit,
  onDelete,
}) => {
  const { completed, createdAt, description, title } = task;

  return (
    <ListItem divider sx={{ position: "relative" }}>
      <Checkbox
        edge="start"
        checked={completed || false}
        onChange={onToggle}
        color="primary"
      />
      <div onClick={onOpen}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "1200px",
            pr: 14,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              textDecoration: completed ? "line-through" : "none",
              color: completed ? "text.disabled" : "text.primary",
              width: "450px",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </Typography>
          {description && (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                textDecoration: completed ? "line-through" : "none",
                opacity: completed ? 0.7 : 1,
                width: "450px",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {description}
            </Typography>
          )}
        </Box>
      </div>
      <Chip
        label={completed ? "Выполнено" : "Активно"}
        color={completed ? "success" : "primary"}
        size="small"
        sx={{
          position: "absolute",
          left: "50%",
          transform: "translate(-50%, -50%)",
          top: "50%",
        }}
      />
      <Chip
        label={new Date(createdAt).toLocaleDateString("ru-RU", {
          hour: "2-digit",
          minute: "2-digit",
        })}
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
