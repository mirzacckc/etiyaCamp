import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'etiya-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
