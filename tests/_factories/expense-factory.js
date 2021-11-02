import faker from "faker";

export function makeExpenseWithFillable(overwrite = {}) {
  const description = overwrite.description ?? faker.lorem.sentence();
  const note = overwrite.note ?? faker.lorem.paragraph();
  const amount = overwrite.amount ?? faker.datatype.number({ min: 0 });

  return { description, note, amount };
}

export function makeExpense(overwrite) {
  const fillable = makeExpenseWithFillable(overwrite);
  return {
    ...fillable,
    id: faker.datatype.uuid(),
    createdAt: faker.date.past(),
  };
}
