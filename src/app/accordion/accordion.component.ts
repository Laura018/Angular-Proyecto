import { Component, OnInit ,Input} from '@angular/core';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  constructor(private _config:NgbAccordionConfig) { }
  @Input() age:number=0;
  @Input() university:string="";
  ngOnInit(): void {
  }

}
