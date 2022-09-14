import { format } from 'date-fns';
import Storage from './storage';
import Project from './projects';
import Task from './tasks';

export default class UI {
  static loadHomepage() {
    UI.loadProjects();
    UI.loadProjectButtons();
    UI.openProject('Inbox', document.getElementById('button-inbox'));
    document.addEventListener('keydown', UI.handleKeyboardInput);
  }

  static loadProjects() {
    Storage.getTodoList().getProjects().forEach((project) => {
      if (project.name !== 'Inbox' && project.name !== 'Today' && project.name !== 'This Week') {
        UI.createProject(project.name);
      }
    });

    UI.initAddProjectButtons();
  }

  static loadTasks(projectName) {
    Storage.getTodoList().getProject(projectName).getTasks().forEach((task) => UI.createTask(task.name, task.dueDate));
    if (projectName !== 'Today' && projectName !== 'This Week') {
      UI.initAddProjectButtons();
    }
  }

  static loadProjectContent(projectName) {
    const projectPreview = document.getElementById('project-priview');
    projectPreview.innerHTML = `
    <h1 id="project-name">${projectName}</h1>
    <div class="task-list" id="task-list"></div>`;

    if (projectName !== 'Today' && projectName !== 'This Week') {
      projectPreview.innerHTML += `
        <button class="button-add" id="button-add">
        <i class="fas fa-plus"></i>
        Add Task
        </button>
        <div class="add-form" id="add-form">
            <input class="input-form" id="input-form" type="text"/>
           <div class="add-form-buttons">
              <button class="add-button" id="add-button">
                Add
              </button>
              <button class="cancel-button" id="cancel-button">
              Cancel
              </button>
            </div>
        </div>`;
    }

    UI.loadTasks(projectName);
  }

  static createProject(name) {
    const userProjects = document.getElementById("project-list")
    userProjects.innerHTML = 
  }
}
