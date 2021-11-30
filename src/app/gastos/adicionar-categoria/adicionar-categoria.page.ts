import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../gastos.model';
import { GastosService } from '../gastos.service';

@Component({
  selector: 'app-adicionar-categoria',
  templateUrl: './adicionar-categoria.page.html',
  styleUrls: ['./adicionar-categoria.page.scss'],
})
export class AdicionarCategoriaPage implements OnInit {

  form: FormGroup;
  private categorias: Categoria[];
  
  constructor(
    private formBuilder: FormBuilder,
    private gastosService: GastosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { 
    this.categorias = [
      {
        id:1,
        nome: 'Mercado'
      },
      {
        id:2,
        nome: 'Lazer'
      },
      {
        id:3,
        nome: 'Comida'
      },
      {
        id:4,
        nome: 'Roupas'
      }
    ]
  }

  public getCategorias(){
    return this.categorias;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id:[''],
      nome: ['', Validators.required],
    });

    const id = +this.activatedRoute.snapshot.params.id;
    const categoria = this.gastosService.findById(id);
    if(categoria){
      this.form.patchValue({
        ...categoria
      });
    }
  }

  salvar() {
    this.gastosService.save(this.form.value);
    this.router.navigate(['inicio']);
  } 
}
