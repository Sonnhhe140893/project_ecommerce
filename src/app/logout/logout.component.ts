import { Component } from '@angular/core';

import { HelperService } from '../service/common/helper.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrl: './logout.component.scss',
})
export class LogoutComponent {
    constructor(private helperService: HelperService, private router:Router) {}

        ngOnInit() {
            this.helperService.deleteItem('username');
            this.helperService.deleteItem('role');
          }
          Onclick(){
            this.router.navigate(['/login']);
          }


}
