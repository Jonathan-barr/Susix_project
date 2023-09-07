import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammarCComponent } from './grammar-c.component';

describe('GrammarCComponent', () => {
  let component: GrammarCComponent;
  let fixture: ComponentFixture<GrammarCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrammarCComponent]
    });
    fixture = TestBed.createComponent(GrammarCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
