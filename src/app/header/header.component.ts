import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() public featureSelected = new EventEmitter<string>();

  public onSelect(name: string): void {
    this.featureSelected.emit(name);
  }
}
