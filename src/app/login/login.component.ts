import { Component, OnInit } from '@angular/core';
import { BroadcastService, MsalService } from '@azure/msal-angular';
import { Logger, CryptoUtils } from 'msal';
import{Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'MSAL Angular - Sample App';
  isIframe = false;
  loggedIn = false;
  

  constructor(private broadcastService: BroadcastService, private authService: MsalService,private router:Router) { }

  ngOnInit() {
    
    this.isIframe = window !== window.parent && !window.opener;
    
  this.checkAccount();
    
    this.broadcastService.subscribe('msal:loginSuccess', () => {
      
      this.checkAccount();
      
    });

    this.authService.handleRedirectCallback((authError, response) => {
      if (authError) {
        console.error('Redirect Error: ', authError.errorMessage);
        return;
      }
      //  this.getting();
      
      // console.log('Redirect Success: ', response.accessToken);
      
    });

    this.authService.setLogger(new Logger((logLevel, message, piiEnabled) => {
      console.log('MSAL Logging: ', message);
    }, {
      correlationId: CryptoUtils.createNewGuid(),
      piiLoggingEnabled: false
    }));
   
  }

  checkAccount() {
    
    this.loggedIn = !!this.authService.getAccount();
    this.login();
    
    
  }

  login() {
    const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
    
    if (isIE) {
      this.authService.loginRedirect();
    } else {
      this.authService.loginPopup();
      
    }
    this.getting();
  }
  getting(){
    this.router.navigate(['/dashboard']);
  }
  
}

