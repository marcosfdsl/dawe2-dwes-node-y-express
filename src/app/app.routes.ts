import { Routes } from '@angular/router';
import { NodeComponent } from './node/node.component';
import { ExpressComponent } from './express/express.component';

export const routes: Routes = [
    {path: "node", component: NodeComponent},
    {path: "express", component: ExpressComponent}
];
