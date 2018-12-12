import { Component, Prop, Element } from '@stencil/core';


@Component({
  tag: 'my-nested-component',
  styleUrl: 'my-nested-component.css',
  shadow: false
})
export class MyNestedComponent {
  @Prop()
  gradeItemId: number;
  @Prop()
  studentIdentityId: number;
  @Prop()
  P1 : string;

  @Prop()
  P2 : string;
  @Prop()
  P3 : string;
  @Prop()
  P4 : string;
  @Prop()
  P5 : string;
  @Prop()
  P6 : string;
  @Prop()
  P7 : string;
  @Prop()
  P8 : string;
  @Prop()
  P9 : string;

  @Element()
  element: HTMLElement;

  render() { 
    return (<span class='cellContainer'>
    <div  class="k12-lesson-grade-cell k12-grid-lines-middle k12-cell-data-container-middle-cell">
    <div class="k12-points-ob k12-good-grade-color-points">{2}</div>
    <div class="k12-grade-score k12-good-grade-color-grade">{3} {Math.round(4 * 100)}%</div>

  </div>
  </span>
    );
    
  }
}
