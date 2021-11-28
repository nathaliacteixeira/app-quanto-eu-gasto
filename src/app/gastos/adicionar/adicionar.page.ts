import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: ['MERCADO', Validators.required],
      icon: ['', Validators.required],
      metod_pag: ['DINHEIRO'],
      valor: ['', Validators.required],
      data: ['', Validators.required],
      mes: ['JANEIRO', Validators.required],
    });
  }

  salvar() {
    this.gastosService.save(this.form.value);
    this.router.navigate(['inicio']);
  }
}
