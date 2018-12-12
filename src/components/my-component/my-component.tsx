import { Component } from '@stencil/core';


@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: false
})
export class MyComponent {
  
  

  // buildRows() {
  //   let retVal: any [] = [];
  //   for (var i = 0; i < 57000; i++)
  //     retVal.push(<my-nested-component></my-nested-component>);

  //   return retVal;
  // }

  buildRow() {
    return (<my-nested-component gradeItemId={1} studentIdentityId={2}></my-nested-component>);
    //return (<div>X</div>)
    // return (<span class='cellContainer'>
    // <div  class="k12-lesson-grade-cell k12-grid-lines-middle k12-cell-data-container-middle-cell">
    // <div class="k12-points-ob k12-good-grade-color-points">{2}</div>
    // <div class="k12-grade-score k12-good-grade-color-grade">{3} {Math.round(4 * 100)}%</div>
    // </div></span>);
  }

  render()
  {
    let rows: any [] = [];
    let row: any [] = [];

    for (let i = 0; i < 200; i++) {

      for (let j = 0; j < 285; j++) {
        row.push(this.buildRow());
      }
      
      rows.push(<div class="k12-cell-data-container">{row.splice(0, row.length)}</div>)
    }

    return (
      <div id="viewPanel" class={name} style={{"width": "1500px"}}> 
              <div style={{"width": "1400px"}}>
      
        {rows}</div></div>
    
    );
  }

}
