import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.scss']
})
export class CalculateComponent implements OnInit {
  firstOperand: number;
  secondOperand: number;
  result: number;
  operator: string;

  constructor() {
  }

  calculate(): number {
    switch (this.operator) {
      case '+':
        this.result = Number(this.firstOperand) + Number(this.secondOperand);
        break;
      case '-':
        this.result = Number(this.firstOperand) - Number(this.secondOperand);
        break;
      case '*':
        this.result = Number(this.firstOperand) * Number(this.secondOperand);
        break;
      case '/':
        this.result = Number(this.firstOperand) / Number(this.secondOperand);
        break;
    }
    return this.result;
  }

  ngOnInit() {
  }

}
