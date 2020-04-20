import {Component, Input, OnInit} from '@angular/core';
import {TreeNode} from '../../thee.intarface';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.scss']
})
export class CheckListComponent implements OnInit {
  @Input('tree') tree: TreeNode[];

  constructor() { }

  ngOnInit() {

  }
}
