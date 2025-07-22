import { Task } from "@/widgets/tasksList/lib/types";

export interface FormData {
  title: string;
  description: string | null;
}

export interface TaskFormProps {
  onSubmit: (data: FormData | Task) => void;
  initialValues?: FormData;
  onCancel?: () => void;
}
