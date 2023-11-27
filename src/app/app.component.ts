import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { NodeComponent } from "./node/node.component";
import { ExpressComponent } from "./express/express.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent, NodeComponent, ExpressComponent]
})
export class AppComponent {
  title = 'nodeyexpress';
}
