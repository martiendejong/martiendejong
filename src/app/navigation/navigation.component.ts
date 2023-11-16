import { Component, Input } from '@angular/core';
import { NavigationItem } from '../navigation-item';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  @Input() items: NavigationItem[] = [];
  visible: boolean = false;
  public changeImage(item: NavigationItem, url?: string) {
    if(url !== undefined) {
      item.currentImage = url;
    }
  }
}
