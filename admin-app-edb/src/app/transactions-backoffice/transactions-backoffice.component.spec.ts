import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsBackofficeComponent } from './transactions-backoffice.component';

describe('TransactionsBackofficeComponent', () => {
  let component: TransactionsBackofficeComponent;
  let fixture: ComponentFixture<TransactionsBackofficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsBackofficeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionsBackofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
