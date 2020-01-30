import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'dynamic-translations';

  public changeLanguage(code: string) {
    localStorage.setItem('locale', code);
    window.location.reload();
  }
}
