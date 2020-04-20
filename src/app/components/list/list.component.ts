import {Component, Input, OnInit} from '@angular/core';
import {TreeNode} from '../../thee.intarface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input('tree') tree: TreeNode[];
  constructor() { }

  ngOnInit() {
  }
}
