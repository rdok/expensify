import {
  setEndDate,
  setStartDate,
  setTextFilter,
  sortByAmount,
  sortByDate,
} from "../../src/actions/filters";

test("filters by text", () => {
  const action = setTextFilter("Cyberpunk2077");
  expect(action).toEqual({ type: "SET_TEXT_FILTER", text: "Cyberpunk2077" });
});

test("filters by date", () => {
  const action = sortByDate();
  expect(action).toEqual({ type: "SORT_BY_DATE" });
});

test("filters by amount", () => {
  const action = sortByAmount();
  expect(action).toEqual({ type: "SORT_BY_AMOUNT" });
});

test("sets start date filter action", () => {
  const action = setStartDate("startMoment");
  expect(action).toEqual({ type: "SET_START_DATE", startDate: "startMoment" });
});

test("sets end date filter action", () => {
  const action = setEndDate("endMoment");
  expect(action).toEqual({ type: "SET_END_DATE", endDate: "endMoment" });
});
