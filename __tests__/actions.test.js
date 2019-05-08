import Roll from "../src/utils/dice";
import { fight } from "../src/actions";

jest.mock("../src/utils/dice");

test("Decreases enemy HP by 20 when 6 is rolled", () => {
  const goblin = {
    hitPoints: 50
  };

  fight(goblin);

  expect(Roll.d6.mock.calls).toEqual([[]]);
  expect(goblin.hitPoints).toEqual(30);

  Roll.d6.mockReset();
});
