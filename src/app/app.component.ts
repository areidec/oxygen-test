import {Component, OnInit, HostListener, ViewChild, ElementRef} from '@angular/core';
import {TreeNode} from './thee.intarface';
import {TreeDataService} from './treeData.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  treeNodes: TreeNode[];

  constructor(public treeService: TreeDataService) {}

  @ViewChild('container', {static: true}) containerEl: ElementRef;

  @HostListener('window:resize') setWindowHeight(): void {
    const vh = window.innerHeight;
    this.containerEl.nativeElement.style.height = vh + 'px';
  }

  ngOnInit(): void {
    this.setWindowHeight();
    this.treeService.dataSubj.subscribe(payload => {
      this.treeNodes = payload;
    });
    this.treeService.setData();
  }
}
