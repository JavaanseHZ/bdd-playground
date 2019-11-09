import { Contract } from './contract';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

describe('Contract', () => {
  it('should create an instance', () => {
    expect(new Contract('test', new NgbDate(1789, 7, 14), 'Frankreich')).toBeTruthy();
  });
});
