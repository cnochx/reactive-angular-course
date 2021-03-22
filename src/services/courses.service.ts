import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Course} from '../app/model/course';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
  })

/**
 * stateless observable Service
 */
export class CoursesService {

  constructor(private http: HttpClient) {
  }

  loadAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('/api/courses')
      .pipe(
        map(res => res['payload']),
        // operator to load one http request
        shareReplay()
      );
  }
}
