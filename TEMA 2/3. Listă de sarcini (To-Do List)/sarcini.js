    // Functia pentru a adauga o sarcina
    function addTask() {
      var taskInput = document.getElementById('taskInput');
      var taskText = taskInput.value.trim();

      if (taskText !== '') {
        var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push({ text: taskText, completed: false });
        localStorage.setItem('tasks', JSON.stringify(tasks));

        displayTasks();
        taskInput.value = '';
      }
    }

    // Functia pentru a sterge o sarcina
    function deleteTask(index) {
      var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(tasks));

      displayTasks();
    }

    // Functia pentru a marca o sarcina ca fiind completata
    function toggleTask(index) {
      var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      tasks[index].completed = !tasks[index].completed;
      localStorage.setItem('tasks', JSON.stringify(tasks));

      displayTasks();
    }

    // Functia pentru a afisa sarcinile in lista HTML
    function displayTasks() {
      var taskList = document.getElementById('taskList');
      taskList.innerHTML = '';

      var tasks = JSON.parse(localStorage.getItem('tasks')) || [];

      tasks.forEach(function (task, index) {
        var li = document.createElement('li');
        li.innerHTML = `
          <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask(${index})">
          <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
          <button onclick="deleteTask(${index})">Șterge</button>
        `;
        taskList.appendChild(li);
      });
    }

    // Afiseaza sarcinile la incarcarea paginii
    displayTasks();
