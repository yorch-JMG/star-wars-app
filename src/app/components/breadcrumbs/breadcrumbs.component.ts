import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnDestroy {
  public title?: string;
  public subtitle$?: Subscription;

  constructor(private router: Router) {
    this.subtitle$ = this.getArguments().subscribe(({title}) => {
      this.title = title;
			document.title = `Movies - ${title}`;
    });
  }

	ngOnDestroy(): void {
		this.subtitle$?.unsubscribe();
	}

  getArguments() {
    return this.router.events.pipe(
      filter((event: any) => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    );
  }
}
