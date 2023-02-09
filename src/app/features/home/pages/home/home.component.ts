import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { EquipmentValueService } from '@app/core/services/equipment-value.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  ELEMENT_DATA: any;
  loading: boolean = false;
  error: boolean = false;
  errorMessage: string = '';
  success: boolean = false;
  calculatedValue: number = 0;
  equipmentRequest: any = {
    modelId: '',
    year: ''
  };
  equipmentForm: FormGroup;
  constructor(
    private equipmentValueService: EquipmentValueService,
    private formBuilder: FormBuilder
  ) {
    this.equipmentForm = this.formBuilder.group({
      modelId: ['', [Validators.required]],
      year: ['', [Validators.required]]
    });
  }

  /**
   * Get the form controls.
   */
  get f() {
    return this.equipmentForm.controls;
  }

  onSubmit(formDirective: FormGroupDirective): void {
    // stop here if form is invalid
    if (this.equipmentForm.invalid) {
      return;
    }
    // Check whether the form is valid
    if (this.equipmentForm.valid) {
      this.loading = true;
      this.equipmentRequest.modelId = this.f['modelId'].value;
      this.equipmentRequest.year = this.f['year'].value;

      this.equipmentValueService.getJSON().subscribe({
        next: (val) => {
          this.ELEMENT_DATA = val;
          this.calculatedValue = 0;
          this.ELEMENT_DATA.forEach((element: any) => {
            if (element.modelId === this.equipmentRequest.modelId) {
              const selectedElement = element;
              selectedElement.schedule.years.forEach((item: any) => {
                if (this.equipmentRequest.year == item.year) {
                  this.calculatedValue = item.marketRatio * item.auctionRatio;
                }
              });
            }
          });
        },
        error: (err) => {
          this.loading = false;
          this.error = true;
          this.errorMessage = err.message;
          console.error(err);
        },
        complete: () => {
          this.loading = false;
          this.error = false;
          this.errorMessage = '';
          this.success = true;
        }
      });
    }
  }

  discard(formDirective: FormGroupDirective) {
    formDirective.resetForm();
    this.equipmentForm.reset();
    this.success = false;
    this.loading = false;
    this.calculatedValue = 0;
  }
}
