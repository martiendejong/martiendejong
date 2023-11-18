import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  formResult = {
    success: false,
    errorMessage: '',
  };

  done() {
    this.formResult.success = false;
    this.formResult.errorMessage = '';
  }
  error(error: string) {
    this.formResult.errorMessage = error;
  }
  success() {
    this.formResult.success = true;
  }

  submitForm(){
    var form = document.getElementById('contactForm') as HTMLFormElement;
    if(form == undefined) return;
    const formData = new FormData(form);
    const params = new URLSearchParams(formData as any);

    const formUrl = 'https://martiendejong.nl/contact.php';
    // Send a POST request to the Google Form submission URL
    fetch(formUrl, {
        method: 'POST',
        body: params,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
    .then(response => {
        if (response.status === 200) {
          this.success();
        } else {
          response.text().then(t => this.error(t));
        }
    })
    .catch(error => {
      this.error(error);
      console.error("Error submitting form:", error);
    });
  }
}
