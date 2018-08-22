import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  backedField = "";

  checked=false;

  user = "Nicolas";

  options = [2, 50, 56, 75];

  formData={
    age:12,
    email:"jojo@email.com"
  }

  ingredients = [{name:'flour', good:false},
    {name:'eggs', good:true},
    {name:'milk', good:true},
    {name:'sugar', good:false},
    {name:'salt', good:false},
    {name:'rum', good:true},
    {name:'butter', good:false}]

  selectedOption = 50;
  selectedIngredient = undefined;

  constructor() { }

  ngOnInit() {
  }

  isNicolas(){
    return this.user == "Nicolas" ? "checked" : "";
  }

  getTypeOf(){
    return typeof this.selectedOption;
  }

  onChange(){
    alert("You have change the ingredient : " + this.selectedIngredient.name)
  }

  onSubmit(){
    console.log(this.formData);
    console.log('Sending super REST request');
  }

  isValid(){
    return this.formData.age >0
      && this.formData.age <=18
      && this.formData.email.includes('@')
  }
}
