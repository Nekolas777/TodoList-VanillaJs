import { tasksContainer } from "./clickEffects";

const modalWindow = document.querySelector('.modal-container');
const inputNewDescription = modalWindow.querySelector('.input-newDescription');


export const modalDisplay = () => {

    let currentTaskDescription; // Una variable que sirve para almacenar una referencia al taskDescription actual

    tasksContainer.addEventListener('click', (e) => {
        
        // Verificamos si se hace clic en el ícono de edición
        if (e.target.matches('.edit-icon') || e.target.matches('.fa-pen-to-square')) {
            
            modalWindow.classList.add('show');
            const currentTaskContainer = e.target.closest('.task-container');

            // Obtiene el taskDescription actual
            currentTaskDescription = currentTaskContainer.querySelector('.task-description');

            // autofocus al elemento input de la descripcion 
            inputNewDescription.focus();
            inputNewDescription.value = '';

            modalWindow.addEventListener('keydown', handleKeyDown);

        }

    });

    const handleKeyDown = (e) => {

        // Verificamos si el usuario presiona la tecla "Enter" dentro de la ventana modal una vez se muestre
        if (e.key === 'Enter') {

            currentTaskDescription.textContent = inputNewDescription.value;
            console.log(currentTaskDescription.textContent);
            modalWindow.classList.remove('show');   // oculta la ventana modal
            modalWindow.removeEventListener('keydown', handleKeyDown);
        }

    }

    modalWindow.addEventListener('click', (e) => {

        if (e.target.matches('.fa-xmark')) modalWindow.classList.remove('show');

    });

}
