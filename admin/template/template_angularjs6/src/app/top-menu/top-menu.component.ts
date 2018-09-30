import { group, animate, query, style, trigger, transition, state } from '@angular/animations';
import { Component, Output, EventEmitter } 		 from '@angular/core';
import * as global 			 from '../globals';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  animations: [
    trigger('expandCollapse', [
      state('expand', style({ height: '*', overflow: 'hidden', display: 'block' })),
      state('collapse', style({ height: '0px', overflow: 'hidden', display: 'block' })),
      state('active', style({ height: '*', overflow: 'hidden', display: 'block' })),
      transition('expand <=> collapse', animate(100)),
      transition('active => collapse', animate(100))
    ])
  ]
})

export class TopMenuComponent {
  navProfileState = 'collapse';
	slimScrollOptions = global.whiteSlimScrollOptions;
	@Output() toggleSidebarMinified = new EventEmitter<boolean>();

  toggleNavProfile() {
    if (this.navProfileState == 'collapse') {
      this.navProfileState = 'expand';
    } else {
      this.navProfileState = 'collapse';
    }
  }

	toggleMinified() {
		this.toggleSidebarMinified.emit(true);
	}

	expandCollapseSubmenu(currentMenu, allMenu, active) {
		for (let menu of allMenu) {
			if (menu != currentMenu) {
				menu.state = 'collapse';
			}
		}
		if (currentMenu.state == 'expand' || (active.isActive && !currentMenu.state)) {
			currentMenu.state = 'collapse';
		} else {
			currentMenu.state = 'expand';
		}
	}

  menus = [{
		'icon': 'fa fa-th-large',
		'title': 'Dashboard',
		'url': '',
		'caret': 'true',
		'submenu': [{
			'url': 'dashboard/v1',
			'title': 'Dashboard v1'
		},{
			'url': 'dashboard',
			'title': 'Dashboard'
		}]
	},{
		'icon': 'fa fa-chart-pie',
		'title': 'Chart',
		'url': '',
		'caret': 'true',
		'submenu': [{
			'url': 'chart/ngx',
			'title': 'Ngx Chart'
		},{
			'url': 'chart/d3',
			'title': 'd3 Chart'
		}]
	},{
		'icon': 'fa fa-calendar',
		'title': 'Calendar',
		'url': 'calendar'
	},{
		'icon': 'fa fa-map',
		'title': 'Map',
		'url': '/map'
	}];
}
