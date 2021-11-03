import faker from "faker";

export function makeExpenseWithFillable(overwrite = {}) {
  const description = overwrite.description ?? faker.lorem.sentence();
  const note = overwrite.note ?? faker.lorem.paragraph();
  const amount = overwrite.amount ?? faker.datatype.number({ min: 0 });

  return { description, note, amount };
}

export function makeExpense(overwrite = {}) {
  const fillable = makeExpenseWithFillable(overwrite);
  const createdAt = overwrite.createdAt ?? faker.date.past();
  return {
    ...fillable,
    id: faker.datatype.uuid(),
    createdAt,
  };
}
