import {Component, Input, OnInit} from '@angular/core';
import {TreeNode} from '../../thee.intarface';
import {TreeDataService} from '../../treeData.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input('childNode') childNode: TreeNode;

  constructor(public treeService: TreeDataService) {}

  ngOnInit() { }

  open(ids) {
    this.treeService.openItem(ids);
  }

  check(ids) {
    this.treeService.checkItem(ids);
  }

}
