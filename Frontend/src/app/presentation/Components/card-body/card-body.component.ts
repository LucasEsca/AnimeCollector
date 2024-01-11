import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from 'src/app/data/Utils/token.service';
import { Anime } from 'src/app/data/api/interfaces/anime';
import { AnimeService } from 'src/app/data/api/services/anime.service';

@Component({
  selector: 'app-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.css']
})
export class CardBodyComponent implements OnInit {
  @Input() anime!: Anime;
  loading: boolean = false;
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;

  constructor(private _service: AnimeService, 
    private toastr: ToastrService,
    private tokenService: TokenService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.tokenService.getToken() !== '';
    const userInfo = this.tokenService.getUserInfo();
    this.isAdmin = userInfo?.role === 'admin';
  }

  deleteAnime(id: number) {
    this.loading = true;
    this._service.deleteAnime(id).subscribe(() => {
      this.toastr.warning('El producto fue eliminado con exito', 'Producto eliminado');
    })
  }
}
