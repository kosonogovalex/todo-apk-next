"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextField, Button, Box, Stack } from "@mui/material";

interface FormData {
  title: string;
  description: string | null;
}

const schema = yup.object({
  title: yup.string().required("Заголовок обязателен").min(3, "Мин. 3 символа"),
  description: yup.string().nullable().defined(),
});

interface TaskFormProps {
  onSubmit: (data: FormData) => void;
  initialValues?: { title: string; description: string | null } | null;
  onCancel?: () => void;
}

export function TaskForm({ onSubmit, initialValues, onCancel }: TaskFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: initialValues
      ? {
          title: initialValues.title,
          description: initialValues.description ?? null,
        }
      : { title: "", description: null },
  });

  const handleFormSubmit = (data: FormData) => {
    onSubmit(data);
    reset();
  };

  const handleCancel = () => {
    reset({
      title: "",
      description: null,
    });
    onCancel?.();
  };

  const onError = (errors: any) => {
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
