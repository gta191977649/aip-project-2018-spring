import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFormTagComponent } from './search-form-tag.component';

describe('SearchFormTagComponent', () => {
  let component: SearchFormTagComponent;
  let fixture: ComponentFixture<SearchFormTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFormTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
