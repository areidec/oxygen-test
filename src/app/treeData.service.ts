import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {TreeNode} from './thee.intarface';

@Injectable({
  providedIn: 'root'
})
export class TreeDataService {
  dataSubj = new Subject<TreeNode[]>();
  nextId = 0;
  data: TreeNode[] = [];
  checkedNodesSubj = new Subject();
  checkedNodes = [];

  constructor() {
    this.dataSubj.subscribe(p => this.data = p);
  }

  checkItem(ids): void {
    const node = this.getParentNode('ids', ids, this.data);
    node.isChecked = !node.isChecked;
    if (node.childNodes) {
      this.checkAllChildNodes(node.childNodes, node.isChecked);
    }
    localStorage.setItem('data', JSON.stringify(this.data));
    this.dataSubj.next(this.data);
  }

  openItem(ids): void {
    const node = this.getParentNode('ids', ids, this.data);
    node.opened = !node.opened;
    localStorage.setItem('data', JSON.stringify(this.data));
    this.dataSubj.next(this.data);
  }

  setData(): void {
    const datas = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : this.generateArray();
    this.dataSubj.next(datas);
    localStorage.setItem('data', JSON.stringify(datas));
  }

  checkAllChildNodes(childNodes, state): void {
    childNodes.map(childNode => {
      childNode.isChecked = state;
      if (childNode.childNodes) {
        this.checkAllChildNodes(childNode.childNodes, state);
      }
    });
  }

  getParentNode(nodeName, nodeValue, rootNode) {
    const queue = [ rootNode ];
    while (queue.length) {
      const node = queue.shift();
      if (node[nodeName] === nodeValue) {
        return node;
      } else if (node instanceof Object) {
        const children = Object.values(node);
        if (children.length) {
          queue.push(...children);
        }
      }
    }
    return null;
  }

  generateOneLevel = (): TreeNode[] => {
    return Array(10)
      .fill(0)
      .map(() => {
        this.nextId = this.nextId + 1;
        return {
          isChecked: false,
          label: `Some label-${this.nextId}`,
          ids: this.nextId,
          opened: false
        };
      });
  }

  generateArray = (): TreeNode[] => {
    return 	this.generateOneLevel().map(nodee => {
      return {
        ...nodee,
        childNodes: this.generateOneLevel().map(node => ({...node, childNodes: this.generateOneLevel()}))
      };
    });
  }
}
