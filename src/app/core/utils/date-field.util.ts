const MONTH_LABEL_FORMATTER = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  year: 'numeric',
});

const DATE_LABEL_FORMATTER = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
});

export function padDateUnit(value: number) {
  return value.toString().padStart(2, '0');
}

export function formatDateToIsoDate(value: Date) {
  return `${value.getFullYear()}-${padDateUnit(value.getMonth() + 1)}-${padDateUnit(value.getDate())}`;
}

export function formatDateToIsoMonth(value: Date) {
  return `${value.getFullYear()}-${padDateUnit(value.getMonth() + 1)}`;
}

export function parseIsoDate(value?: string | null) {
  if (!value) {
    return null;
  }

  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value.trim());
  if (!match) {
    return null;
  }

  const [, year, month, day] = match;
  return new Date(Number(year), Number(month) - 1, Number(day));
}

export function parseIsoMonth(value?: string | null) {
  if (!value) {
    return null;
  }

  const match = /^(\d{4})-(\d{2})$/.exec(value.trim());
  if (!match) {
    return null;
  }

  const [, year, month] = match;
  return new Date(Number(year), Number(month) - 1, 1);
}

export function formatIsoMonthForDisplay(value?: string | null) {
  const parsed = parseIsoMonth(value);
  return parsed ? MONTH_LABEL_FORMATTER.format(parsed) : '';
}

export function formatIsoDateForDisplay(value?: string | null) {
  const parsed = parseIsoDate(value);
  return parsed ? DATE_LABEL_FORMATTER.format(parsed) : '';
}
