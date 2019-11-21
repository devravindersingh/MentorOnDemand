import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewAllMentorCoursesComponent } from './admin-view-all-mentor-courses.component';

describe('AdminViewAllMentorCoursesComponent', () => {
  let component: AdminViewAllMentorCoursesComponent;
  let fixture: ComponentFixture<AdminViewAllMentorCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewAllMentorCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewAllMentorCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
