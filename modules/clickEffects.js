const checkboxes = document.querySelectorAll('.circular-checkbox');
//const taskDescription = document.querySelectorAll('.task-description');
const textCounter = document.getElementById('counter');
const addBtn = document.getElementById('add-icon');
const taskInput = document.querySelector('input[type="text"].input-newTask');
// obtener la referencia al elemento de la nueva tarea par insertarlo luego de la ultima tarea
const taskToCompleteInfo = document.querySelector('.taskToComplete-info');
export const tasksContainer = document.querySelector('.tasks-container');

let counter = checkboxes.length;    // contador inicial, empieza en 3
let tasks = [];



export const checkboxEvent = () => {

    textCounter.innerHTML = `${counter}`;
    
    tasksContainer.addEventListener('click', (e) => {

        if (e.target.classList.contains('circular-checkbox')) {
            const checkbox = e.target;
            // nextElementSibling permite acceder al siguiente elemento hermano 
            const paragraph = checkbox.nextElementSibling;

            /* Obtiene el valor del atributo 'aria-checked', si es falso isChecked es 'falso', si 
            el atributo es verdadero entonces isChecked sera 'true' */
            const isChecked = (checkbox.getAttribute('aria-checked') === 'true');
            console.log(isChecked);

            // verificando si la variable es true o false 
            if (!isChecked) {
                paragraph.classList.add('completed');
                checkbox.classList.add('completed');
                counter--;
                checkbox.setAttribute('aria-checked', 'true');
            }
            else {
                paragraph.classList.remove('completed');
                checkbox.classList.remove('completed');
                counter++;
                checkbox.setAttribute('aria-checked', 'false');
            }
        
            // impresion en la etiqueta span del contador
            textCounter.innerHTML = `${counter}`;
        }

    });
}


export const addButtonEvent = () => {

    addBtn.addEventListener('click', () => {

        //console.log(taskInput.value.length);   
        if (taskInput.value.length === 0) { 
            alert('Insert any text in the input');
        }
        else {
            /* let newTaskContainer = document.createElement('div');
            newTaskContainer.classList.add('task-container'); */

            const newTaskContainer = `
                <div class="task-container">    
                  <div class="taskInfo-container">
                    <label for="miCheckbox" class="circular-checkbox" aria-checked="false"></label>
                    <p class="task-description">${taskInput.value}</p>
                    <button class="edit-icon"><i class="fa-solid fa-pen-to-square"></i></i></button>
                    <button class="trash-icon"><i class="fa-solid fa-trash"></i></button>
                  </div>
                </div>
                <br>
            `;

            taskToCompleteInfo.insertAdjacentHTML('afterend', newTaskContainer);
            counter++;
            textCounter.innerHTML = `${counter}`;

            taskInput.value = '';
        }
    });

}


export const trashButtonEvent = () => {

    tasksContainer.addEventListener('click', (e) => {

        if (e.target.closest('.trash-icon')) {  
            
            const currentTaskContainer = e.target.closest('.task-container');
            const previousElement = currentTaskContainer.previousElementSibling;
            const isChecked = currentTaskContainer.querySelector('.circular-checkbox');

            if (isChecked.getAttribute('aria-checked') === 'false') {
                console.log('xd');
                counter--;
            }

            currentTaskContainer? currentTaskContainer.remove() : null;
            
            if (previousElement && previousElement.tagName === 'BR') previousElement.remove();      
            
            console.log(isChecked); // Imprime el valor de aria-checked en la consola
            textCounter.innerHTML = `${counter}`;
        }
        
    });

}


