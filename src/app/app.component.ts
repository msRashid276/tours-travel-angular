import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomeComponent,RouterModule],
  template: `
    <main>
      <header class="brand-name" style="display: flex; flex-direction: row;">
        <img class="brand-logo" src="images/logo2.jpg" alt="logo" aria-hidden="true"/>
        <h1>Hostels</h1>
      </header>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tours-travel';
}
