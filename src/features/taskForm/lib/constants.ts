import * as yup from "yup";

export const defaultValues = { title: "", description: "" };

export const schema = yup.object({
  title: yup.string().required("Заголовок обязателен").min(3, "Мин. 3 символа"),
  description: yup.string().nullable().defined(),
});
