import {ChangeDetectorRef, Directive, Input, OnDestroy, TemplateRef, ViewContainerRef} from '@angular/core';
import { UserService } from '@pet-donations/web/user';
import {Subscription} from "rxjs";

@Directive({
  selector: '[pdAvailableActions]',
})
export class AvailableActionsDirective implements OnDestroy {
  @Input()
  public set pdAvailableActions(action: string) {
    this.action = action;
    this.insertTemplate();
  }

  private action: string = '';
  private readonly subs = new Subscription();

  constructor(
    private readonly userService: UserService,
    private readonly template: TemplateRef<any>,
    private readonly vcr: ViewContainerRef,
    private readonly cdr: ChangeDetectorRef
  ) {
    this.subs.add(this.userService.user$.subscribe({
      next: () => this.insertTemplate(),
    }));
  }

  public ngOnDestroy() {
    this.subs.unsubscribe();
  }

  private insertTemplate() {
    if (!this.userService.checkActions(this.action)) {
      this.vcr.clear();
      this.cdr.markForCheck();
      return;
    }

    this.vcr.insert(this.template.createEmbeddedView({}));
    this.cdr.markForCheck();
  }
}
