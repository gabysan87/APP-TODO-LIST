import { Paper, TableContainer } from "@mui/material";
import { InputApp } from "./InputApp";
import { TaskList } from "./TaskList";
import { useForm } from "../hooks/useForm";



export const TodoApp = () => {
  const { taskName, todos, handleChange, handleAdd, handleDelete, handleToggleTodo } = useForm();

  return (
    <TableContainer
      component={Paper}
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ab47bc",
      }}
    >
      {/* Input, boton agregar*/}
      <InputApp
        todos={todos}
        handleChange={handleChange}
        handleAdd={handleAdd}
        taskName={taskName}
      />

      {/* Lista de tareas, tachar y eliminar  */}
      <TaskList
        todos={todos}
        handleToggleTodo={handleToggleTodo}
        handleDelete={handleDelete}
      />
    </TableContainer>
  );
};
