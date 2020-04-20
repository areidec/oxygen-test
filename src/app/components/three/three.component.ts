import {Component, Input, OnInit} from '@angular/core';
import {TreeNode} from '../../thee.intarface';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss']
})
export class ThreeComponent implements OnInit {
  @Input('tree') tree: TreeNode[];
  ngOnInit() { }
}
