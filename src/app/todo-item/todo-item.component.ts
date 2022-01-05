import { AfterViewInit, Component, ElementRef, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit{

  //value from parent
  @Input() todo!: Todo 
  @Output() todoClicked: EventEmitter<void> = new EventEmitter()
  @Output() editClicked: EventEmitter<void> = new EventEmitter()
  @Output() deleteClicked: EventEmitter<void> = new EventEmitter()

  ngOnInit(): void {
  }

  onTodoClicked() {
    console.log("clicked")
    this.todoClicked.emit(); //emits a signal
  }

  onEditClicked() {
    console.log("edit")
    this.editClicked.emit()
  }

  onDeleteClicked() {
    console.log("deleted")
    this.deleteClicked.emit()
  }
}
