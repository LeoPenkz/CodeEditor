import {Injectable} from '@angular/core';
import {Icon, IconName} from '../../models/icons';


@Injectable({
  providedIn: 'root'
})
export class CodeEditorIconService {

  private registry = new Map<IconName, Icon>();

  constructor() { }

  public registerIcons(icons: Icon[]): void {
    icons.forEach((icon: Icon) => this.registry.set(icon.name, icon));
  }

  public getIcon(iconName: IconName): Icon | undefined {
    if (!this.registry.has(iconName)) {
      console.warn(`We could not find the dinosaur Icon with the name ${iconName}, did you add it to the Icon registry?`);
    }
    return this.registry.get(iconName);
  }
}
