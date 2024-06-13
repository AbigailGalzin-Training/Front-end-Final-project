import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-theme-toggle',
    templateUrl: './theme-toggle.component.html',
    styleUrls: ['./theme-toggle.component.sass'],
})
export class ThemeToggleComponent {
    currentTheme: string = 'dark';
    @Input() command: string = 'Dark';

    toggleTheme() {
        if (this.currentTheme === 'dark') {
            this.currentTheme = 'light';
            this.command = 'Light';
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
        } else if (this.currentTheme === 'light') {
            this.currentTheme = 'dark';
            this.command = 'Dark';
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
        }
    }
}
