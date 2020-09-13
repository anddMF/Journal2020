import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesHubComponent } from './notes-hub.component';

describe('NotesHubComponent', () => {
  let component: NotesHubComponent;
  let fixture: ComponentFixture<NotesHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesHubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
