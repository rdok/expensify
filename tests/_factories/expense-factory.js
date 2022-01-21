export function makeExpenseWithFillable(overwrite = {}) {
  const description = overwrite.description ?? `lorem.sentence()-${new Date()}`;
  const note = overwrite.note ?? `lorem.paragraph()-${new Date()}`;
  const amount = overwrite.amount ?? new Date();

  return { description, note, amount };
}

export function makeExpense(overwrite = {}) {
  const fillable = makeExpenseWithFillable(overwrite);
  const createdAt = overwrite.createdAt ?? new Date();
  return {
    ...fillable,
    id: `datatype.uuid()-${new Date()}`,
    createdAt,
  };
}
