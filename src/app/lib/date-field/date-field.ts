import { CommonModule } from '@angular/common';
import { Component, forwardRef, input, viewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepicker, MatDatepickerInputEvent, MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {
  formatDateToIsoDate,
  formatDateToIsoMonth,
  formatIsoDateForDisplay,
  formatIsoMonthForDisplay,
  parseIsoDate,
  parseIsoMonth,
} from '../../core/utils/date-field.util';

type DateFieldMode = 'date' | 'month';

@Component({
  selector: 'cf-date-field',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
  templateUrl: './date-field.html',
  styleUrl: './date-field.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateField),
      multi: true,
    },
  ],
})
export class DateField implements ControlValueAccessor {
  readonly mode = input<DateFieldMode>('date');
  readonly label = input('');
  readonly placeholder = input('');
  readonly required = input(false);
  readonly min = input<string | null>(null);
  readonly max = input<string | null>(null);
  readonly panelClass = input('');

  readonly picker = viewChild.required(MatDatepicker<Date>);

  value = '';
  disabled = false;

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  get displayValue() {
    return this.mode() === 'month'
      ? formatIsoMonthForDisplay(this.value)
      : formatIsoDateForDisplay(this.value);
  }

  get pickerValue() {
    return this.mode() === 'month' ? parseIsoMonth(this.value) : parseIsoDate(this.value);
  }

  get minDate() {
    return this.mode() === 'month' ? parseIsoMonth(this.min()) : parseIsoDate(this.min());
  }

  get maxDate() {
    return this.mode() === 'month' ? parseIsoMonth(this.max()) : parseIsoDate(this.max());
  }

  get pickerStartView() {
    return this.mode() === 'month' ? 'multi-year' : 'month';
  }

  get resolvedPanelClass() {
    const classes = ['cf-date-picker-panel', `cf-date-picker-panel-${this.mode()}`];
    const customClass = this.panelClass().trim();

    if (customClass) {
      classes.push(customClass);
    }

    return classes;
  }

  writeValue(value: string | null): void {
    this.value = value?.trim() ?? '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  openPicker() {
    if (this.disabled) {
      return;
    }

    this.picker().open();
  }

  markTouched() {
    this.onTouched();
  }

  clearValue(event: MouseEvent) {
    event.stopPropagation();
    this.commitValue('');
  }

  onDateSelected(event: MatDatepickerInputEvent<Date>) {
    if (this.mode() !== 'date' || !event.value) {
      return;
    }

    this.commitValue(formatDateToIsoDate(event.value));
  }

  onYearSelected() {
    // Angular Material month pickers require this handler to keep the calendar
    // in month-selection mode, even though the component only stores month values.
  }

  onMonthSelected(normalizedMonth: Date, datepicker: MatDatepicker<Date>) {
    if (this.mode() !== 'month') {
      return;
    }

    this.commitValue(formatDateToIsoMonth(normalizedMonth));
    datepicker.close();
  }

  private commitValue(value: string) {
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }
}
