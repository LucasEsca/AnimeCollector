import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Anime } from 'src/app/data/api/interfaces/anime';
import { AnimeService } from 'src/app/data/api/services/anime.service';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.css']
})
export class CreateUpdateComponent implements OnInit {
  form: FormGroup;
  loading: boolean = false;
  id: number;
  operacion: string = 'Create ';

  constructor(private fb: FormBuilder,
    private _service: AnimeService,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      url: ['', Validators.required], // Agregado para sincronizar con el formulario
      img: ['', Validators.required]   // Agregado para sincronizar con el formulario
    })
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {

    if (this.id != 0) {
      // Es editar
      this.operacion = 'Edit ';
      this.getAnime(this.id);
    }

    const token = localStorage.getItem('AuthToken');
    console.log('Authorization Token:', token);
  }

  getAnime(id: number) {
    this.loading = true;
    this._service.getAnime(id).subscribe((data: Anime) => {
      this.loading = false;
      this.form.setValue({
        name: data.name,
        description: data.description,
        url: data.url,
        img: data.img
      })
    })
  }

  addAnime() {
    /*  console.log(this.form.value.name);
     console.log(this.form.get('name')?.value); */

    const anime: Anime = {
      name: this.form.value.name,
      description: this.form.value.description,
      url: this.form.value.url,  // Corregido
      img: this.form.value.img
    }
    this.loading = true;

    if (this.id !== 0) {
      // Es editar 
      anime.id = this.id;
      this._service.updateAnime(this.id, anime).subscribe(() => {
        this.toastr.info(`El anime ${anime.name} fue actualizado con exito`, 'Anime actualizado');
        this.loading = false;
        this.router.navigate(['/']);
      })

    } else {
      // Es agregagar
      this._service.saveAnime(anime).subscribe(() => {
        this.toastr.success(`El anime ${anime.name} fue registrado con exito`, 'Anime registrado');
        this.loading = false;
        this.router.navigate(['/']);
      })
    }
  }
}