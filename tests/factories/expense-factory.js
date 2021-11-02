import faker from "faker";

export function makeExpenseWithFillable() {
  return {
    description: faker.lorem.sentence(),
    note: faker.lorem.paragraph(),
    amount: faker.datatype.number({ min: 0 }),
  };
}

export function makeExpense() {
  const fillable = makeExpenseWithFillable();
  return {
    ...fillable,
    id: faker.datatype.uuid(),
    createdAt: faker.date.past(),
  };
}
