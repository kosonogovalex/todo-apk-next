"use client";
import { FieldErrors, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Button, Box, Stack } from "@mui/material";
import { defaultValues, schema } from "../lib/constants";
import { FormData, TaskFormProps } from "../lib/types";

export function TaskForm({ onSubmit, initialValues, onCancel }: TaskFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: initialValues || defaultValues,
  });

  const handleFormSubmit = (data: FormData) => {
    if (initialValues) {
      onSubmit(data);
    } else {
      onSubmit(data);
      reset(defaultValues);
    }
  };

  const handleCancel = () => {
    reset(defaultValues);
    onCancel?.();
  };

  const onError = (errors: FieldErrors<FormData>) => {
    console.error("Ошибки формы:", errors);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(handleFormSubmit, onError)}
      sx={{ mb: 3 }}
    >
      <TextField
        {...register("title")}
        label="Заголовок задачи"
        fullWidth
        error={!!errors.title}
        helperText={errors.title?.message}
        sx={{ mb: 2 }}
      />
      <TextField
        {...register("description")}
        label="Описание"
        multiline
        rows={3}
        fullWidth
        sx={{ mb: 2 }}
      />
      <Stack direction="row" spacing={2} justifyContent="flex-start">
        <Button type="submit" variant="contained" color="primary">
          {initialValues ? "Обновить" : "Добавить"}
        </Button>
        {onCancel && (
          <Button variant="outlined" onClick={handleCancel}>
            Отмена
          </Button>
        )}
      </Stack>
    </Box>
  );
}
