import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule],
  template: `
    <main>
      <header class="brand-name" style="display: flex; flex-direction: row;">
        <img class="brand-logo" src="images/logo2.jpg" alt="logo" aria-hidden="true"/>
        <h1>Homes</h1>
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
