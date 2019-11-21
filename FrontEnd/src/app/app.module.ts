import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { GuestSearchComponent } from './guest-search/guest-search.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MentorComponent } from './mentor/mentor.component';
import { MentorAddCourseComponent } from './mentor/mentor-add-course/mentor-add-course.component';
import { MentorViewCourseComponent } from './mentor/mentor-view-course/mentor-view-course.component';
import { MentorUpdateCourseComponent } from './mentor/mentor-update-course/mentor-update-course.component';
import { MentorNotificationComponent } from './mentor/mentor-notification/mentor-notification.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StudentComponent } from './student/student.component';
import { StudentViewCourseComponent } from './student/student-view-course/student-view-course.component';
import { StudentSearchCourseComponent } from './student/student-search-course/student-search-course.component';
import { StudentUpdateComponent } from './student/student-update/student-update.component';
import { AdminComponent } from './admin/admin.component';
import { AdminViewAllCourseComponent } from './admin/admin-view-all-course/admin-view-all-course.component';
import { AdminViewAllMentorsComponent } from './admin/admin-view-all-mentors/admin-view-all-mentors.component';
import { AdminViewAllStudentsComponent } from './admin/admin-view-all-students/admin-view-all-students.component';
import { AdminViewAllTechnologyComponent } from './admin/admin-view-all-technology/admin-view-all-technology.component';
import { AdminViewAllUsersComponent } from './admin/admin-view-all-users/admin-view-all-users.component';
import { AdminViewAllMentorCoursesComponent } from './admin/admin-view-all-mentor-courses/admin-view-all-mentor-courses.component';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { MentorUpdateComponent } from './mentor/mentor-update/mentor-update.component';


const appRoutes:Routes = [
  {path:'', component: HomeViewComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path: 'guest', component: GuestSearchComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'admin', component: AdminComponent,
    children: [
      {path: 'allCourses', component: AdminViewAllCourseComponent},
      {path: 'allMentorCourses', component: AdminViewAllMentorCoursesComponent},
      {path: 'allMentors', component: AdminViewAllMentorsComponent},
      {path: 'allStudents', component: AdminViewAllStudentsComponent},
      {path: 'allTechnologies', component: AdminViewAllTechnologyComponent},
      {path: 'allUsers', component: AdminViewAllUsersComponent}
    ]
  },
  {path: 'mentor', component: MentorComponent,
    children: [
      {path: 'addCourse', component: MentorAddCourseComponent},
      {path: 'updateCourse', component: MentorUpdateCourseComponent},
      {path: 'myCourses', component: MentorViewCourseComponent},
      {path: 'notifications', component: MentorNotificationComponent},
      {path: 'updateProfile', component: MentorUpdateComponent}
    ]
  },
  {path: 'student', component: StudentComponent,
    children: [
      {path: 'searchCourses', component: StudentSearchCourseComponent},
      {path: 'myCourses', component: StudentViewCourseComponent},
      {path: 'updateProfile', component: StudentUpdateComponent},
      {path: 'notifications', component: MentorNotificationComponent}
    ]
  }  
]

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    GuestSearchComponent,
    RegisterComponent,
    LoginComponent,
    MentorComponent,
    MentorAddCourseComponent,
    MentorViewCourseComponent,
    MentorUpdateCourseComponent,
    MentorNotificationComponent,
    NavbarComponent,
    StudentComponent,
    StudentViewCourseComponent,
    StudentSearchCourseComponent,
    StudentUpdateComponent,
    AdminComponent,
    AdminViewAllCourseComponent,
    AdminViewAllMentorsComponent,
    AdminViewAllStudentsComponent,
    AdminViewAllTechnologyComponent,
    AdminViewAllUsersComponent,
    AdminViewAllMentorCoursesComponent,
    PaymentComponent,
    MentorUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
