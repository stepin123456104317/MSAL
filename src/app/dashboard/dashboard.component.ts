// import { Component, OnInit } from '@angular/core';
// import { ToastrService } from 'ngx-toastr';
// import { SpinnerService } from '../core/service/spinner.service';
// // import { TestService } from '../test.service';
// import { TestService } from '../test.service';

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent implements OnInit {

//   showLoading= false;

//   constructor(
//     private toastr: ToastrService,
//     private testService: TestService,
//     private spinnerService: SpinnerService
//   ) { }

//   ngOnInit(): void {
//   }
// }
import { Component } from '@angular/core';
import { SpinnerService } from 'src/app/core/service/spinner.service';
import { TestService } from 'src/app/test.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  title = 'moduleProject';

  opened:boolean = false;
  constructor(
    private testService: TestService,
    private spinnerService: SpinnerService
  ){}
  test(){
    this.spinnerService.requestStarted();
    this.testService.getData().subscribe((res: any) => {
      console.log(res);
      this.spinnerService.requestEnded();
    });
  }
}
