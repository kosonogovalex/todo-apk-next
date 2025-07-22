import { Button, Typography } from "@mui/material";
import Link from "next/link";

export default function IndexPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
        textAlign: "center",
      }}
    >
      <Typography variant="h3" gutterBottom>
        Добро пожаловать в ToDo App
      </Typography>
      <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
        Управляйте своими задачами эффективно
      </Typography>
      <Link href="/tasks" passHref>
        <Button variant="contained" size="large">
          Перейти к задачам
        </Button>
      </Link>
    </div>
  );
}
