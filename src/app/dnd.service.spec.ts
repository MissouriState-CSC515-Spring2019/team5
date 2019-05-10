import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'; 
import { DndService } from './dnd.service';

describe('DndService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
    ],

  }));

  it('should be created', () => {
    const service: DndService = TestBed.get(DndService);
    expect(service).toBeTruthy();
  });
});
