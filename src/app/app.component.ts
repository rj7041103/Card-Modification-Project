import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../components/card/card.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  statusMode = signal(false);
  title = 'cardProyect';
  rating = '4';
  price = '100';
  textBTN = 'add to Card';
  image = 'service.png';
  submit() {
    console.log('DATOS ENVIADOS DESDE EL PADRE');
    console.log();
    console.log('Este es el valor de title desde el padre: ', this.title);
    console.log('Este es el valor de rating desde el padre: ', this.rating);
    console.log('Este es el valor de price desde el padre: ', this.price);
    console.log('Este es el valor de textBTN desde el padre: ', this.textBTN);
    console.log('Este es el valor de image desde el padre: ', this.image);
  }

  handleFileInputImage(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      const file = target.files[0];
      this.image = file.name;
    }
  }
  ngOnInit(): void {
    initFlowbite();
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Change the icons inside the button based on previous settings
    const themeToggleDarkIcon = document.getElementById(
      'theme-toggle-dark-icon'
    );
    const themeToggleLightIcon = document.getElementById(
      'theme-toggle-light-icon'
    );

    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      themeToggleLightIcon!.classList.remove('hidden');
    } else {
      themeToggleDarkIcon!.classList.remove('hidden');
      this.statusMode.set(false);
    }

    const themeToggleBtn = document.getElementById('theme-toggle');

    themeToggleBtn!.addEventListener('click', () => {
      // Toggle icons inside button
      themeToggleDarkIcon!.classList.toggle('hidden');
      themeToggleLightIcon!.classList.toggle('hidden');

      // If set via local storage previously
      if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-theme', 'dark');
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('color-theme', 'light');
        }

        // If NOT set via local storage previously
      } else {
        if (document.documentElement.classList.contains('dark')) {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('color-theme', 'light');
        } else {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-theme', 'dark');
        }
      }
    });
  }

  // funciones de los signals en la actualizacion de estados de angular en versiones >16
  toggleMode() {
    this.statusMode.update((prev) => !prev);
  }
  handletitleData($event: any) {
    console.log('Este es el titulo recibiendo desde el hijo: ', $event);
  }

  handleratingData($event: any) {
    console.log('Este es el rating recibiendo desde el hijo: ', $event);
  }
  handlepriceData($event: any) {
    console.log('Este es el price recibiendo desde el hijo: ', $event);
  }
  handleimageData($event: any) {
    console.log('Este es el image recibiendo desde el hijo: ', $event);
  }
  handlebtnData($event: any) {
    console.log('Este es el btn recibiendo desde el hijo: ', $event);
  }
}
