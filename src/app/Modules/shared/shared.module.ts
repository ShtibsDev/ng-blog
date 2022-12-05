import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandableSectionComponent } from './components/expandable-section.component';

@NgModule({
	declarations: [ExpandableSectionComponent],
	imports: [CommonModule],
	exports: [ExpandableSectionComponent],
})
export class SharedModule {}
