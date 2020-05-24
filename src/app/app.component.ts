import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <input type="text" [(ngModel)]="num" placeholder="" />
    <div [ngSwitch]="num">
      <div *ngSwitchCase="'1'">
        <input
          type="text"
          maxlength="2"
          [(ngModel)]="searchId"
          placeholder="Account"
        />
      </div>
      <div *ngSwitchCase="'2'">
        <input
          type="text"
          maxlength="4"
          pattern=""
          [(ngModel)]="searchId"
          placeholder="Advisor"
        />
      </div>
      <div *ngSwitchCase="'3'">
        <input
          type="number"
          onKeyPress="if(this.value.length==4) return false;"
        />
      </div>
      <div *ngSwitchDefault>
        <input
          type="text"
          id="txtPassportNumber"
          onkeypress="blockSpecialChar(event)"
        />
      </div>
      <div>{{ searchId }}</div>
    </div>
  `
})
export class AppComponent {
  num: string;
  blockSpecialChar(e): boolean {
    var k = e.keyCode;
    return (
      (k > 64 && k < 91) ||
      (k > 96 && k < 123) ||
      k == 8 ||
      (k >= 48 && k <= 57)
    );
  }
}
