import { NgxSpinnerService } from 'ngx-spinner';

export class BaseComponent {
  constructor(private readonly spinner: NgxSpinnerService) { }

  showSpinner(spinnerType: SpinnerType) {
    this.spinner.show(spinnerType);

    setTimeout(() => {
      this.spinner.hide(spinnerType);
    }, 2000);
  }

  hideSpinner(spinnerType: SpinnerType) {
    this.spinner.hide(spinnerType);
  }

} 
export enum SpinnerType {
  squareJellyBox = "spinUi",
  ballScaleMultiple = "spinAdmin"
}
