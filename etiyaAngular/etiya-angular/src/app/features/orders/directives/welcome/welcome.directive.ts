import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appWelcome]'
})
export class WelcomeDirective {
  @Input("appWelcomeThen") ThenTemplate  !: TemplateRef<any>;

  constructor(private container : ViewContainerRef,  private template : TemplateRef<any>) { }

  @Input() set appWelcome(standByTime : number ){
    this.container.createEmbeddedView(this.template)
    setTimeout(() => {
      this.container.clear();
      this.container.createEmbeddedView(this.ThenTemplate)
    }, standByTime);
  }

}
