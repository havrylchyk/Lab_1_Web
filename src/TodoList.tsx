import { useState, ChangeEvent, KeyboardEvent } from "react";
import { 
  Container, 
  Typography, 
  TextField, 
  Button, 
  List, 
  ListItem, 
  ListItemText, 
  IconButton, 
  Paper,
  Box,
  Divider,
  ThemeProvider,
  createTheme,
  CssBaseline
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
});

function TodoList() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [task, setTask] = useState<string>("");

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };
  
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box 
        sx={{ 
          minHeight: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          bgcolor: 'background.default'
        }}
      >
        <Container maxWidth="sm" sx={{ py: 4 }}>
          <Paper elevation={6} sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
            <Typography variant="h4" component="h1" align="center" gutterBottom sx={{ fontWeight: "bold", color: 'primary.main' }}>
              Todo List
            </Typography>
            
            <Box sx={{ display: "flex", mb: 2 }}>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                placeholder="Add a new task..."
                value={task}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setTask(e.target.value)}
                onKeyPress={handleKeyPress}
                sx={{ mr: 1 }}
              />
              <Button 
                variant="contained" 
                color="primary" 
                onClick={addTask}
                startIcon={<AddIcon />}
              >
                ADD
              </Button>
            </Box>
            
            {tasks.length > 0 ? (
              <Paper elevation={2} sx={{ bgcolor: 'background.paper', borderRadius: 1 }}>
                <List>
                  {tasks.map((t, index) => (
                    <Box key={index}>
                      {index > 0 && <Divider sx={{ bgcolor: 'rgba(255, 255, 255, 0.12)' }} />}
                      <ListItem
                        secondaryAction={
                          <IconButton edge="end" onClick={() => removeTask(index)} color="error">
                            <DeleteIcon />
                          </IconButton>
                        }
                      >
                        <ListItemText primary={t} />
                      </ListItem>
                    </Box>
                  ))}
                </List>
              </Paper>
            ) : (
              <Typography variant="body1" color="text.secondary" align="center" sx={{ mt: 2 }}>
                No tasks yet. Add some tasks to get started!
              </Typography>
            )}
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default TodoList;