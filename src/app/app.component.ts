import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, RouterLink, HeaderComponent]
})

export class AppComponent implements OnInit {
  title = 'nodeyexpress';

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.router.url;

        // Verifica si document está definido antes de acceder a él
        if (typeof document !== 'undefined') {
          if (currentRoute === '/') {
            document.getElementById('btnhome').classList.add('subrayado');
            document.getElementById('btnabout').classList.remove('subrayado');
            document.getElementById('btnhelp').classList.remove('subrayado');
          } else if (currentRoute === '/node') {
            document.getElementById('btnhome').classList.remove('subrayado');
            document.getElementById('btnabout').classList.add('subrayado');
            document.getElementById('btnhelp').classList.remove('subrayado');

            // Abrir info
            const mostrarinfo = (sectionId) => {
              let section = document.getElementById(sectionId);
              section.style.opacity = "1";
              section.style.transform = "translateY(0)";
            };

            const btnToSectionMapping = {
              "btnintroduccionnode": "infointroduccionnode",
              "btnhistorianode": "infohistorianode",
              "btnactualidadnode": "infoactualidadnode"
            };

            for (const [btnId, sectionId] of Object.entries(btnToSectionMapping)) {
              document.getElementById(btnId).addEventListener("click", () => mostrarinfo(sectionId));
            }

            const esconderinfo = (sectionId) => {
              let section = document.getElementById(sectionId);
              section.style.opacity = "0";
              section.style.transform = "translateY(100%)";
            };

            ["infohistorianode", "infointroduccionnode", "infoactualidadnode", "boton", "btnhome", "btnabout", "btnhelp"].forEach(btnId => {
              document.getElementById(btnId).addEventListener("click", () => {
                esconderinfo('infohistorianode');
                esconderinfo('infointroduccionnode');
                esconderinfo('infoactualidadnode');

                // // Reinicia scroll info
                // setTimeout(() => {
                //   scrollhistorianode.scrollTo(0, 0);
                //   scrollintroduccionnode.scrollTo(0, 0);
                //   scrollactualidadnode.scrollTo(0, 0);
                // }, 200);
              });
            });
          } else if (currentRoute === '/express') {
            document.getElementById('btnhome').classList.remove('subrayado');
            document.getElementById('btnabout').classList.remove('subrayado');
            document.getElementById('btnhelp').classList.add('subrayado');
            // Abrir info
            const mostrarinfo = (sectionId) => {
              let section = document.getElementById(sectionId);
              section.style.opacity = "1";
              section.style.transform = "translateY(0)";
            };

            const btnToSectionMapping = {
              "btnintroduccionexpress": "infointroduccionexpress",
              "btnhistoriaexpress": "infohistoriaexpress",
              "btnactualidadexpress": "infoactualidadexpress"
            };

            for (const [btnId, sectionId] of Object.entries(btnToSectionMapping)) {
              document.getElementById(btnId).addEventListener("click", () => mostrarinfo(sectionId));
            }

            const esconderinfo = (sectionId) => {
              let section = document.getElementById(sectionId);
              section.style.opacity = "0";
              section.style.transform = "translateY(100%)";
            };

            ["infohistoriaexpress", "infointroduccionexpress", "infoactualidadexpress", "boton", "btnhome", "btnabout", "btnhelp"].forEach(btnId => {
              document.getElementById(btnId).addEventListener("click", () => {
                esconderinfo('infohistoriaexpress');
                esconderinfo('infointroduccionexpress');
                esconderinfo('infoactualidadexpress');

                // // Reinicia scroll info
                // setTimeout(() => {
                //   scrollhistoriaexpress.scrollTo(0, 0);
                //   scrollintroduccionexpress.scrollTo(0, 0);
                //   scrollactualidadexpress.scrollTo(0, 0);
                // }, 200);
              });
            });
          }
        }
      }
    });
  }
}