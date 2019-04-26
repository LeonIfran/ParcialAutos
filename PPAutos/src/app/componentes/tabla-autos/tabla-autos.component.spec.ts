import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAutosComponent } from './tabla-autos.component';

describe('TablaAutosComponent', () => {
  let component: TablaAutosComponent;
  let fixture: ComponentFixture<TablaAutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaAutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
