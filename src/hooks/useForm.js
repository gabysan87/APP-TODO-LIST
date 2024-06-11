import { useEffect, useState } from "react";

const savedTodos = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
  // Función para obtener las tareas guardadas desde localStorage(sirve para recargar la pagina web)
};

export const useForm = () => {
  const [taskName, setTaskName] = useState([]); // estado para el campo de entrada
  const [todos, setTodos] = useState(savedTodos()); // estado para la lista de las tareas

  // Efecto para guardar las tareas en localStorage cuando cambian
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleAdd = () => {
    // Valida que taskName no esté vacío.( Esto previene que se agreguen tareas vacías a la lista.)
    if (taskName.trim() === "") return;

    // Crea un nuevo objeto de tarea con un identificador único.
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: taskName,
      done: false, //Añadí la propiedad done: false al objeto de cada tarea para rastrear si está realizada o no.
    };

    // Actualización del Estado: Agrega la nueva tarea al estado existente de todos sin mutar el estado original.
    setTodos((newTask) => [...newTask, item]);

    // Restablecimiento del Campo de Entrada: Limpia el campo de entrada para permitir al usuario ingresar una nueva tarea
    setTaskName("");
  };

  // Elimina las tareas
  const handleDelete = (id) => {
    const newArray = todos.filter((element) => element.id !== id);
    setTodos(newArray);
  };

  // Añadí esta función para alternar el estado done de una tarea específica cuando se hace clic en ella.
  const handleToggleTodo = (id) => {
    const newToggle = todos.map((item) => {
      if (item.id === id) {
        return { ...item, done: !item.done };
      }
      return item;
    });
    setTodos(newToggle);
  };

  return {
    taskName,
    todos,
    handleChange,
    handleAdd,
    handleDelete,
    handleToggleTodo,
  };
};
