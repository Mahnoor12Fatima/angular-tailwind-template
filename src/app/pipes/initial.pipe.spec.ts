import { FoodListPipe } from './initial.pipe';

describe('FoodListPipe', () => {
  it('create an instance', () => {
    const pipe = new FoodListPipe();
    expect(pipe).toBeTruthy();
  });
});
