import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h2>About NgBlog</h2>
    <p>This is a test Angular 15 app.</p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sequi ex et
      aliquid voluptate optio deleniti dolore repudiandae, velit, delectus
      maiores harum iste modi architecto. Repudiandae magni quasi voluptates
      cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
      sequi ex et aliquid voluptate optio deleniti dolore repudiandae, velit,
      delectus maiores harum iste modi architecto. Repudiandae magni quasi
      voluptates cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Enim sequi ex et aliquid voluptate optio deleniti dolore
      repudiandae, velit, delectus maiores harum iste modi architecto.
      Repudiandae magni quasi voluptates cupiditate. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Enim sequi ex et aliquid voluptate optio
      deleniti dolore repudiandae, velit, delectus maiores harum iste modi
      architecto. Repudiandae magni quasi voluptates cupiditate. Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Enim sequi ex et aliquid
      voluptate optio deleniti dolore repudiandae, velit, delectus maiores harum
      iste modi architecto. Repudiandae magni quasi voluptates cupiditate. Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Enim sequi ex et
      aliquid voluptate optio deleniti dolore repudiandae, velit, delectus
      maiores harum iste modi architecto. Repudiandae magni quasi voluptates
      cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
      sequi ex et aliquid voluptate optio deleniti dolore repudiandae, velit,
      delectus maiores harum iste modi architecto. Repudiandae magni quasi
      voluptates cupiditate.
    </p>
  `,
})
export class AboutComponent {}
