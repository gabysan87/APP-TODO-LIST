import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

export const InputApp = ({todos, handleAdd, taskName, handleChange}) => {
  return (
    <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "50%",
      textAlign: "center",
      padding: 3,
      backgroundColor: "#e1bee7",
      borderRadius: 4,
      boxShadow: 3,
    }}
  >
    <Typography variant="h4">
      Todo-App: {todos.length}, Pendiente:
      {todos.filter((item) => !item.done).length}
    </Typography>
    <Typography variant="h5" gutterBottom>
      App de Tarea Gabriela Sanchez
    </Typography>

    {/* Creacion del input */}
    <form onSubmit={handleAdd}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          mt: 2,
        }}
      >
        <TextField
          label="Next Task"
          value={taskName}
          onChange={handleChange}
          placeholder="Enter a task"
          variant="outlined"
          sx={{
            mr: 2,
            width: "100%",
          }}
        />

        {/*  Boton de agregar */}
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          sx={{
            width: "30%",
            borderRadius: "10px",
          }}
        >
          Add
        </Button>
      </Box>
    </form>
  </Box>
  )
}
