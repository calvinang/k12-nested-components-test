import { Component } from '@stencil/core';


@Component({
  tag: 'my-top-level-component',
  styleUrl: 'my-top-level-component.css',
  shadow: false
})
export class MyTopLevelComponent {
  
  render()
  {
    
    return (
    
      <div class="k12-gradebook-grid container-fluid k12-main">
      <div class="k12-main-row k12-row">
        <div class="k12-gradebook-grid-left-end k12-left-cell">
          <div class="k12-row">
            <div class="k12-no-padding k12-prev-label-disabled">
              <span class="k12-prev-label-text">&lt;&lt;&nbsp;Previous</span>
            </div>
          </div>
          <div class="k12-row">
            <div class="k12-no-padding k12-item-label">
              <span class="k12-item-label-text">Item:</span>
            </div>
          </div>
          <div class="k12-row k12-students-points-header-container">
            <div class="k12-left-cell">
                {/* <app-select-all-users selected={false} label={"Students"}></app-select-all-users> */}
            </div>
            <div class="k12-right-cell k12-points-label">
                <span class="k12-points-label-text">Points:</span>
            </div>
          </div>
          <div class="k12-row k12-no-padding">
            {/* <app-user-list users={this.users} class="studentListComponent">
            </app-user-list> */}
          </div>
        </div>
        <div class="k12-gradebook-grid-middle-end k12-left-cell">
          <div class="k12-row k12-no-padding">
            <my-component></my-component>
            {/* <app-cell-data-container users={this.users}
                                    items={this.gradeItems}
                                    data={this.data} class='cellDataContainerComponent'> */}
                {/* <div class="k12-row k12-no-padding k12-units-header-container">
                  <app-units-header units={this.units} gradeItems={this.gradeItems}></app-units-header>
                </div>
                <div class="k12-row k12-no-padding">
                  <app-grade-items-header units={this.units} gradeItems={this.gradeItems}></app-grade-items-header>
                </div>
                <div class="k12-row k12-no-padding">
                  <app-points-header units={this.units} gradeItems={this.gradeItems}></app-points-header>
                </div>                                         */}
            {/* </app-cell-data-container> */}
          </div>
        </div>  
        <div class="k12-gradebook-grid-right-end k12-left-cell">
          <div class="k12-row k12-no-padding">
            <div class="k12-next-label-disabled"><span class="k12-next-label-text">Next&nbsp;&gt;&gt;</span></div>
          </div>
          <div class="k12-row k12-no-padding">
            <div class="k12-empty-header-above-progress-columns"><span>&nbsp;</span></div>
          </div>
          <div class="k12-row k12-no-padding">
            <div class="k12-progress-label">Progress</div>
            <div class="k12-grade-label">Grade</div>
          </div>
          <div class="k12-row k12-no-padding">
            {/* <app-progress-grade-list users={this.users}
                                  progressList={this.progressList}
                                  grades={this.grades}>
            </app-progress-grade-list> */}
          </div>  

        </div>
      </div>  
    </div>
    );
    
  }

}
