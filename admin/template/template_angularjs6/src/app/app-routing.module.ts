import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

// Dashboard
import { DashboardV2Page }          from './pages/dashboard/v2/dashboard-v2';

// Email
import { EmailInboxPage }           from './pages/email/inbox/email-inbox';
import { EmailComposePage }         from './pages/email/compose/email-compose';
import { EmailDetailPage }          from './pages/email/detail/email-detail';

// Widgets
import { WidgetPage }           from './pages/widget/widget';

// Page Options
import { PageBlank }                from './pages/page-options/page-blank/page-blank';
import { PageFooter }               from './pages/page-options/page-with-footer/page-with-footer';
import { PageWithoutSidebar }       from './pages/page-options/page-without-sidebar/page-without-sidebar';
import { PageSidebarRight }         from './pages/page-options/page-with-right-sidebar/page-with-right-sidebar';
import { PageSidebarMinified }      from './pages/page-options/page-with-minified-sidebar/page-with-minified-sidebar';
import { PageTwoSidebar }           from './pages/page-options/page-with-two-sidebar/page-with-two-sidebar';
import { PageFullHeight }   			  from './pages/page-options/page-full-height/page-full-height';
import { PageSidebarWide }          from './pages/page-options/page-with-wide-sidebar/page-with-wide-sidebar';
import { PageSidebarLight }         from './pages/page-options/page-with-light-sidebar/page-with-light-sidebar';
import { PageSidebarTransparent }   from './pages/page-options/page-with-transparent-sidebar/page-with-transparent-sidebar';
import { PageTopMenu }              from './pages/page-options/page-with-top-menu/page-with-top-menu';
import { PageMixedMenu }            from './pages/page-options/page-with-mixed-menu/page-with-mixed-menu';

// UI Element
import { UIGeneralPage }            from './pages/ui-elements/general/general';
import { UITypographyPage }         from './pages/ui-elements/typography/typography';
import { UITabsAccordionsPage }     from './pages/ui-elements/tabs-accordions/tabs-accordions';
import { UIModalNotificationPage }  from './pages/ui-elements/modal-notification/modal-notification';
import { UIWidgetBoxesPage }        from './pages/ui-elements/widget-boxes/widget-boxes';
import { UIMediaObjectPage }        from './pages/ui-elements/media-object/media-object';
import { UIButtonsPage }            from './pages/ui-elements/buttons/buttons';
import { UIIconsPage }              from './pages/ui-elements/icons/icons';
import { UISimpleLineIconsPage }    from './pages/ui-elements/simple-line-icons/simple-line-icons';
import { UIIoniconsPage }           from './pages/ui-elements/ionicons/ionicons';
import { UILanguageIconPage }    		from './pages/ui-elements/language-icon/language-icon';
import { UISocialButtonsPage }      from './pages/ui-elements/social-buttons/social-buttons';

// Bootstrap 4
import { Bootstrap4Page }           from './pages/bootstrap-4/bootstrap-4';

// Chart
import { ChartNgxPage }             from './pages/chart/chart-ngx/chart-ngx';
import { ChartD3Page }              from './pages/chart/chart-d3/chart-d3';

// Calendar
import { CalendarPage }             from './pages/calendar/calendar';

// Map
import { MapPage }            			from './pages/map/map';

// Gallery
import { GalleryV1Page }            from './pages/gallery/gallery-v1/gallery-v1';
import { GalleryV2Page }            from './pages/gallery/gallery-v2/gallery-v2';

// Extra Pages
import { ExtraTimelinePage }        from './pages/extra/extra-timeline/extra-timeline';
import { ExtraComingSoonPage }      from './pages/extra/extra-coming-soon/extra-coming-soon';
import { ExtraSearchResultsPage }   from './pages/extra/extra-search-results/extra-search-results';
import { ExtraInvoicePage }         from './pages/extra/extra-invoice/extra-invoice';
import { ExtraErrorPage }           from './pages/extra/extra-error/extra-error';
import { ExtraProfilePage }         from './pages/extra/extra-profile/extra-profile';

// User Login / Register
// import { LoginV1Page }              from './pages/login/login-v1/login-v1';
// import { LoginV2Page }              from './pages/login/login-v2/login-v2';
import { LoginV3Page }              from './pages/login/login-v3/login-v3';
import { RegisterV3Page }           from './pages/register/register-v3/register-v3';

// Helper
import { HelperCssPage }            from './pages/helper/helper-css/helper-css';

// Table
import { TablesPage }           from './pages/tables/tables';

// Form
import { FormStuffPage }         from './pages/form-stuff/form-stuff';

// Customers page
import { Customers } from './pages/customers/customers';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },

    { path: 'dashboard', component: DashboardV2Page, data: { title: 'Dashboard'} },

    { path: 'email/inbox', component: EmailInboxPage, data: { title: 'Email Inbox'} },
    { path: 'email/compose', component: EmailComposePage, data: { title: 'Email Compose'} },
    { path: 'email/detail', component: EmailDetailPage, data: { title: 'Email Detail'} },

    { path: 'widget', component: WidgetPage, data: { title: 'Widgets'} },

    { path: 'customers', component: Customers, data: { title: 'Customer'} },

    { path: 'page-option/page-blank', component: PageBlank, data: { title: 'Blank Page'} },
    { path: 'page-option/page-with-footer', component: PageFooter, data: { title: 'Page with Footer' } },
    { path: 'page-option/page-without-sidebar', component: PageWithoutSidebar, data: { title: 'Page without Sidebar' } },
    { path: 'page-option/page-with-right-sidebar', component: PageSidebarRight, data: { title: 'Page with Right Sidebar' } },
    { path: 'page-option/page-with-minified-sidebar', component: PageSidebarMinified, data: { title: 'Page with Minified Sidebar'} },
    { path: 'page-option/page-with-two-sidebar', component: PageTwoSidebar, data: { title: 'Page with Two Sidebar' } },
    { path: 'page-option/page-full-height', component: PageFullHeight, data: { title: 'Full Height Content' } },
    { path: 'page-option/page-with-wide-sidebar', component: PageSidebarWide, data: { title: 'Page with Wide Sidebar' } },
    { path: 'page-option/page-with-light-sidebar', component: PageSidebarLight, data: { title: 'Page with Light Sidebar' } },
    { path: 'page-option/page-with-transparent-sidebar', component: PageSidebarTransparent, data: { title: 'Page with Transparent Sidebar' } },
    { path: 'page-option/page-with-top-menu', component: PageTopMenu, data: { title: 'Page with Top Menu' } },
    { path: 'page-option/page-with-mixed-menu', component: PageMixedMenu, data: { title: 'Page with Mixed Menu' } },

    { path: 'ui/general', component: UIGeneralPage, data: { title: 'UI General'} },
    { path: 'ui/typography', component: UITypographyPage, data: { title: 'UI Typography'} },
    { path: 'ui/tabs-accordions', component: UITabsAccordionsPage, data: { title: 'UI Tabs & Accordions'} },
    { path: 'ui/modal-notification', component: UIModalNotificationPage, data: { title: 'UI Modal & Notification'} },
    { path: 'ui/widget-boxes', component: UIWidgetBoxesPage, data: { title: 'UI Widget Boxes'} },
    { path: 'ui/media-object', component: UIMediaObjectPage, data: { title: 'UI Media Object'} },
    { path: 'ui/buttons', component: UIButtonsPage, data: { title: 'UI Buttons'} },
    { path: 'ui/icons', component: UIIconsPage, data: { title: 'UI Icons'} },
    { path: 'ui/simple-line-icons', component: UISimpleLineIconsPage, data: { title: 'UI SimpleLineIcons'} },
    { path: 'ui/ionicons', component: UIIoniconsPage, data: { title: 'UI Ionicons'} },
    { path: 'ui/language-icon', component: UILanguageIconPage, data: { title: 'UI Language Bar Icon'} },
    { path: 'ui/social-buttons', component: UISocialButtonsPage, data: { title: 'UI Social Buttons'} },

    { path: 'bootstrap-4', component: Bootstrap4Page, data: { title: 'Bootstrap 4'} },

    { path: 'chart/ngx', component: ChartNgxPage, data: { title: 'Chart Flot'} },
    { path: 'chart/d3', component: ChartD3Page, data: { title: 'Chart D3'} },

    { path: 'calendar', component: CalendarPage, data: { title: 'Calendar'} },

    { path: 'map', component: MapPage, data: { title: 'Google Map'} },

    { path: 'gallery/v1', component: GalleryV1Page, data: { title: 'Gallery V1'} },
    { path: 'gallery/v2', component: GalleryV2Page, data: { title: 'Gallery V2'} },

    { path: 'extra/timeline', component: ExtraTimelinePage, data: { title: 'Timeline'} },
    { path: 'extra/coming-soon', component: ExtraComingSoonPage, data: { title: 'Coming Soon Page'} },
    { path: 'extra/search-results', component: ExtraSearchResultsPage, data: { title: 'Search Results Page'} },
    { path: 'extra/error-page', component: ExtraErrorPage, data: { title: 'Error Page'} },
    { path: 'extra/invoice', component: ExtraInvoicePage, data: { title: 'Invoice'} },
    { path: 'extra/profile', component: ExtraProfilePage, data: { title: 'Profile Page'} },

    // { path: 'login/v1', component: LoginV1Page, data: { title: 'Login V1 Page'} },
    // { path: 'login/v2', component: LoginV2Page, data: { title: 'Login V2 Page'} },
    { path: 'login', component: LoginV3Page, data: { title: 'Login'} },
    { path: 'register/v3', component: RegisterV3Page, data: { title: 'Register V3 Page'} },

    { path: 'helper/css', component: HelperCssPage, data: { title: 'Helper CSS'} },

    { path: 'tables', component: TablesPage, data: { title: 'Tables'} },
    { path: 'form-stuff', component: FormStuffPage, data: { title: 'Form Stuff'} },
];

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})


export class AppRoutingModule { }
