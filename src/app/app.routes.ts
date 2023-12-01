import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NodeComponent } from './node/node.component';
import { ExpressComponent } from './express/express.component';

export const routes: Routes = [
{
    path: '', title: 'Home', component: HomeComponent,
},

{
    path: 'node', title: 'Node', component: NodeComponent,
},

{
    path: 'express', title: 'Express', component: ExpressComponent,
},

];