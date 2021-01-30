import { Component } from '@angular/core';

@Component({
    selector: 'nav-main',
    templateUrl: './nav.component.html',
})

export class NavComponent {
    isExpanded = false;

    collapse() {
        this.isExpanded = false;
    }

    toggle() {
        this.isExpanded = !this.isExpanded;
    }
}
