import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent {

  @Output() public emitItemTaskList = new EventEmitter;
  public addItemTaskList: string = "";

  public SubmitItemTaskList() {

    this.addItemTaskList = this.addItemTaskList.trim(); //remove os espaços anteriores e posteriores a palavra/frase

    if(this.addItemTaskList) { // o if vai ajudar a validar se tem algum valor, sendo assim não vai ser aceito valores em branco
      this.emitItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList = ""; // limpa a caixa de descrição, se deixar sem isso, vai ficar o último valor digitado.
    }
  }


}
