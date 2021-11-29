import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GastosService } from '../gastos.service';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.page.html',
  styleUrls: ['./adicionar.page.scss'],
})
export class AdicionarPage implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private gastosService: GastosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      id:[''],
      nome: ['MERCADO', Validators.required],
      metod_pag: ['Dinheiro'],
      valor: ['', Validators.required],
      data: ['', Validators.required],
      mes: ['JANEIRO', Validators.required],
    });

    const id = +this.activatedRoute.snapshot.params.id;
    const gasto = this.gastosService.findById(id);
    if(gasto){
      this.form.patchValue({
        ...gasto,
        data: gasto.data && gasto.data.toISOString()
      });
    }
  }

  salvar() {
    this.gastosService.save(this.form.value);
    this.router.navigate(['interna-gasto-mes']);
  } 
}
