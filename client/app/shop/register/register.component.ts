import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './register.component.html'
})
export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router
    ) { }

    register() {
    }
}