import { Component } from '@angular/core';
import { SpinnerService } from './core/service/spinner.service';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'moduleProject';

  // opened:boolean = false;
  // constructor(
  //   private testService: TestService,
  //   private spinnerService: SpinnerService
  // ){}
  // test(){
  //   this.spinnerService.requestStarted();
  //   this.testService.getData().subscribe((res: any) => {
  //     console.log(res);
  //     this.spinnerService.requestEnded();
  //   });
  // }
}
