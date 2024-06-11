import {
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  Paper,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";

export const TaskList = ({ todos, handleToggleTodo, handleDelete }) => {
  return (
    // {/* Estilo para el container para las listas */}
    <Paper
      sx={{
        width: "50%",
        mt: 3,
        padding: 2,
        backgroundColor: "white",
        borderRadius: 4,
        boxShadow: 3,
        minHeight: "40vh",
        backgroundImage:
          "url(http://fc07.deviantart.net/fs71/i/2012/258/e/5/hoja_de_cuaderno_by_ladamadelaoscuridad-d5eucx6.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Lista de task, tachar y eliminar */}
      {todos.length === 0 ? (
        <Typography
          sx={{
            textAlign: "center",
            mt: 2,
            fontSize: "40px"
          }}
        >
          No hay tareas asignadas
        </Typography>
      ) : (
        <List>
          {todos.map((task) => (
            <ListItem
              key={task.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1,
                p: 1,
                ml: 20,
                backgroundColor: task.done,
                //   ? "success.ligth"
                //   : "background.paper",
              }}
            >
              {/* // Tachar las tareas */}
              <Typography
                sx={{
                  textDecoration: task.done ? "line-through" : "none",
                  cursor: "pointer",
                  flex: 1,
                }}
                onClick={() => handleToggleTodo(task.id)}
              >
                {task.value}
              </Typography>

              {/* //Boton eliminar */}
              <ListItemSecondaryAction>
                <IconButton
                  variant="outlined"
                  color="error"
                  onClick={() => handleDelete(task.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      )}
    </Paper>
  );
};
