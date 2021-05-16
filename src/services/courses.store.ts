import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Course, sortCoursesBySeqNo} from '../app/model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesStore {

  courses$: Observable<Course[]>;

  filterByCategory(category: string): Observable<Course[]> {
    return this.courses$
      .pipe(
        map(courses =>
          courses.filter(courses => course.category === category)
            .sort(sortCoursesBySeqNo)
        )
      )
  }
m
}
