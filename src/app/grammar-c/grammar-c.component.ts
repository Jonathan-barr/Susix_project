import { Component, OnInit } from '@angular/core';
import { JsonReaderService } from '../json-reader.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-grammar-c',
  templateUrl: './grammar-c.component.html',
  styleUrls: ['./grammar-c.component.css']
})
export class GrammarCComponent implements OnInit {
  form: FormGroup;
  jsonData: any;
  verb1: any;
  adverb: any;

  selectedSubject: string = '';
  selectedVerb:    string = '';
  selectedAdverb:  string = '';
  inputObject:     string = '';

  onSubmit() {
    // Access the form values using this.form.value.
    console.log('Form values:', this.form.value);
    // You can perform further actions with the form values here.
  }

  constructor(private jsonReaderService: JsonReaderService ,private fb: FormBuilder) {

    this.form = this.fb.group({
      selectedSubject: null,
      selectedVerb: null,
      selectedAdverb: null,
      inputObject: ''
    });
  }

  ngOnInit(): void {
    this.jsonReaderService.getJsonData('Subject_1').subscribe((data) => {

      this.jsonData = data.Subject1;
      this.verb1 = data.verb1;
      this.adverb = data.adverb;

    });
  }

}
