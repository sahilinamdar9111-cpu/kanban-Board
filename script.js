body {
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  text-align: center;
}

h1 {
  margin-top: 20px;
}

.input-box {
  margin: 20px;
}

input {
  padding: 10px;
  width: 250px;
  border-radius: 8px;
  border: none;
}

button {
  padding: 10px 15px;
  border: none;
  background: #00c9a7;
  color: white;
  border-radius: 8px;
  cursor: pointer;
}

.board {
  display: flex;
  justify-content: space-around;
  padding: 20px;
}

.column {
  width: 30%;
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 15px;
}

.task-list {
  min-height: 250px;
}

.task {
  background: white;
  color: black;
  margin: 10px 0;
  padding: 10px;
  border-radius: 10px;
  cursor: grab;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

.task small {
  display: block;
  font-size: 10px;
  color: gray;
}

.task-actions {
  margin-top: 5px;
}

.task-actions button {
  margin: 3px;
  font-size: 12px;
  padding: 5px;
}
