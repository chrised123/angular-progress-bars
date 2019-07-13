import { Injectable } from '@angular/core';
import { observable } from 'mobx';
import { NavItems } from '../../constants/nav-items.constants';

@Injectable()
export class CoreDomainState {
  @observable navItems: NavItems;
  constructor () {
    this.navItems = new NavItems();
  }
}
