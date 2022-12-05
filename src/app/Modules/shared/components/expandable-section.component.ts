import {
	ChangeDetectionStrategy,
	Component,
	HostBinding,
	Input,
} from '@angular/core';

@Component({
	selector: 'app-expandable-section',
	template: `
		<div class="content">
			<ng-content></ng-content>
		</div>
	`,
	styles: [
		`
			:host {
				display: grid;
				grid-template-rows: 0fr;
				overflow: hidden;
				transition: all 0.25s ease-out;
				width: 100%;

				.content {
					min-height: 0;
					visibility: hidden;
					transition: all 0.25s ease-out;
				}

				&.expanded {
					grid-template-rows: 1fr;

					.content {
						visibility: visible;
					}
				}
			}
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpandableSectionComponent {
	@Input()
	@HostBinding('class.expanded')
	isExpanded: boolean = false;
}
