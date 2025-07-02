import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent {
  downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/Resume_Dayal.pdf';  // adjust path if needed
    link.download = 'Dayal-Resume.pdf';  // file name user will see
    link.click();
  }

  gotoGithub() {
    window.open('https://github.com/drkhere', '_blank');
  }
}
