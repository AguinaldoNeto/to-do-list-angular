import { TaskList } from './../../model/task-list';
import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]'); //no método setLocalStorage eu converti o Json para String, aqui eu estou transformando em Array.

  ngDoCheck(): void {
    this.setLocalStorage();
  }
  /* O doCheck vai me ajudar a ordernar a lista.
  Os valores de checked são valores booleanos e utilizando o number vou convertê-los para um número.*/

  public setLocalStorage() {
    this.taskList.sort( (first, last) => Number(first.checked) - Number(last.checked));
    localStorage.setItem("list", JSON.stringify(this.taskList));
  }

  public deleteItemTaslList(event: number) {
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList() {
    const confirm = window.confirm("Você deseja realmente deletar tudo?");
    if(confirm) {
      this.taskList = [];
    }
  }

  public setEmitTaskList(event: string) {
    this.taskList.push({
      task: event,
      checked: false
    });
  }

  public validationInput(event: string, index: number) {
    if(!event.length) {
      const confirm = window.confirm("Task está vazia, deseja deletar?");

      if(confirm) {
        this.deleteItemTaslList(index);
      }
    }
  }
}
