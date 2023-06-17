'use strict';
let isButtonDeletePressed = false;
const Controller = {
    form: null,
    todoContainer: null,

    initListeners() {
        const buttonDelete = document.getElementById('delete');
        const buttonCreate = document.getElementById('create');
        const buttonDeleteText = document.getElementById('deleteText');

        buttonDelete.addEventListener('click', (event) => {
            isButtonDeletePressed = true;
            if (isButtonDeletePressed) {
                this.formDelete.bind(this)();
                return;
            }
        });
        buttonCreate.addEventListener('click', (event) => {
            isButtonDeletePressed =false;
        });
        buttonDeleteText.addEventListener('click', (event) => {
            isButtonDeletePressed = true;
         let text =document.querySelector("#todoForm > div:nth-child(2) > textarea");
            console.log(text);
            text.value = '';

        });
        window.addEventListener('DOMContentLoaded', this.prerenderTodos.bind(this));
    },
    formDelete(event) {
        const data = {};
        this.form.querySelectorAll('input, textarea, select').forEach(({name, value}) => {
            data[name] = value
        })
        const deleteTodoItem = Model.deleteData(data);
        View.deleteItem(deleteTodoItem);
    },

    formHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        if (isButtonDeletePressed) {
            return;
        }
        const data = {}
        this.form.querySelectorAll('input, textarea, select').forEach(({name, value}) => {
            data[name] = value
        })
        const savedTodoItem = Model.postData(data);
        View.renderItem(savedTodoItem);
    },

    prerenderTodos() {
      const savedData = Model.getData();
      savedData.forEach(item => View.renderItem(item))
    },

    init(formSelector, blockSelector) {
        if(typeof formSelector !== 'string') throw new Error('Form selector should be a string')
        const form = document.querySelector(formSelector);
        if(!(form instanceof HTMLElement)) throw new Error('Form not valid HTML element')

        if(typeof blockSelector !== 'string') throw new Error('Block selector should be a string')
        const block = document.querySelector(blockSelector);
        if(!(block instanceof HTMLElement)) throw new Error('Block not valid HTML element')

        this.form = form;
        this.todoContainer = block;
        View.setContainer(block)
        this.form.addEventListener('submit', this.formHandler.bind(this));
        this.initListeners();
    }

}