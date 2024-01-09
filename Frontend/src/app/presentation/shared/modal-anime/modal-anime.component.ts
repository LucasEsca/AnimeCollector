import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-anime',
  standalone: true,
  templateUrl: './modal-anime.component.html',
  styleUrls: ['./modal-anime.component.css']
})
export class ModalAnimeComponent {
  public page!:number;
  

  constructor(
    
    ) { }


  isLogged = false;

  ngOnInit(): void {
   
  }

  @Input() data: any;
  @Output() closeModal = new EventEmitter();

  onCloseModal(): void {
    this.closeModal.emit();
  }
}
