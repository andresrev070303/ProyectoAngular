import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-producto.component.html',
  styleUrl: './add-producto.component.scss'
})
export class AddProductoComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

  submit(data:object){
    console.warn(data);

  }
}