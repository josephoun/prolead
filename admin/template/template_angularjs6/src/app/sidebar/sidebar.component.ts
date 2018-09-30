import { group, animate, query, style, trigger, transition, state } from '@angular/animations';
import { Component, Input, Output, EventEmitter, ElementRef, HostListener } 		 from '@angular/core';
import * as global 	from '../globals';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
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

export class SidebarComponent {
  navProfileState = 'collapse';
	slimScrollOptions = global.whiteSlimScrollOptions;
	@Output() toggleSidebarMinified = new EventEmitter<boolean>();
	@Output() hideMobileSidebar = new EventEmitter<boolean>();
	@Input() pageSidebarTransparent;

	mobileMode;
	desktopMode;

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

	@HostListener('document:click', ['$event'])
  clickout(event) {
    if(!this.eRef.nativeElement.contains(event.target)) {
		  this.hideMobileSidebar.emit(true);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.innerWidth <= 767) {
      this.mobileMode = true;
      this.desktopMode = false;
    } else {
      this.mobileMode = false;
      this.desktopMode = true;
    }
  }
  constructor(private eRef: ElementRef) {
    if (window.innerWidth <= 767) {
      this.mobileMode = true;
      this.desktopMode = false;
    } else {
      this.mobileMode = false;
      this.desktopMode = true;
    }
  }

  menus = [{
		'icon': 'fa fa-th-large',
		'title': 'Dashboard',
		'url': 'dashboard'
	},{
		'icon': 'fa fa-chart-pie',
		'title': 'Analytics',
		'url': '',
		'caret': 'true',
		'submenu': [{
			'url': 'chart/ngx',
			'title': 'Campaigns Analytics'
		},{
			'url': 'chart/d3',
			'title': 'Users Analytics'
		}]
	},{
		'icon': 'fa fa-calendar',
		'title': 'Calendar',
		'url': 'calendar'
	},{
		'icon': 'fa fa-map',
		'title': 'Map',
		'url': '/map'
	}, {
		'icon': 'fa fa-user',
		'title': 'Customers',
		'url': '/customers'
	}];
}
