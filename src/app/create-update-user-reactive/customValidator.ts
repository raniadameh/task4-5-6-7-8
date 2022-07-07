import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
export const identityRevealedValidator: ValidatorFn = (control: AbstractControl)
    : ValidationErrors | null => {
    const first = control.get('nameF1');
    const last = control.get('nameL1');
    return first?.value === last?.value ? { identityRevealed: true } : null;
}