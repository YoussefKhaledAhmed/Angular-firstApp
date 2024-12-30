import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Title } from "@angular/platform-browser";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true, // Standalone component
  imports: [RouterOutlet , HomeComponent , AboutComponent , PortfolioComponent , ContactComponent , CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'home';
  
  /* is visible variables */
  HomeisVisible: boolean = true;
  aboutisVisible: boolean = false;
  portfolioisVisible: boolean = false;
  contactisVisible: boolean = false;

  /* background color */
  aboutBackground: boolean = false;
  portfolioBackground: boolean = false;
  contactBackground: boolean = false;

  constructor(private tittleService: Title){}
  changeTitle(title: string):boolean{
    this.tittleService.setTitle(title);
    return true;
  }
  toggleVisibility(section:string): void {
    switch(section){
      case 'home':
        this.HomeisVisible = true; // Toggle the visibility
        this.aboutisVisible = false; // Toggle the visibility
        this.portfolioisVisible = false; // Toggle the visibility
        this.contactisVisible = false; // Toggle the visibility
        break;
      case 'about':
        this.HomeisVisible = false; // Toggle the visibility
        this.aboutisVisible = true; // Toggle the visibility
        this.portfolioisVisible = false; // Toggle the visibility
        this.contactisVisible = false; // Toggle the visibility
        break;
      case 'portfolio':
        this.HomeisVisible = false; // Toggle the visibility
        this.aboutisVisible = false; // Toggle the visibility
        this.portfolioisVisible = true; // Toggle the visibility
        this.contactisVisible = false; // Toggle the visibility
        break;
      case 'contact':
        this.HomeisVisible = false; // Toggle the visibility
        this.aboutisVisible = false; // Toggle the visibility
        this.portfolioisVisible = false; // Toggle the visibility
        this.contactisVisible = true; // Toggle the visibility
        break;
    }
  }
  toggleBackground(section:string): void {
    switch(section){
      case 'about':
        this.aboutBackground = true; // Toggle the Background
        this.portfolioBackground = false; // Toggle the Background
        this.contactBackground = false; // Toggle the Background
        break;
      case 'portfolio':
        this.aboutBackground = false; // Toggle the Background
        this.portfolioBackground = true; // Toggle the Background
        this.contactBackground = false; // Toggle the Background
        break;
      case 'contact':
        this.aboutBackground = false; // Toggle the Background
        this.portfolioBackground = false; // Toggle the Background
        this.contactBackground = true; // Toggle the Background
        break;
      default:
        this.aboutBackground = false; // Toggle the Background
        this.portfolioBackground = false; // Toggle the Background
        this.contactBackground = false; // Toggle the Background
        break;
    }
  }
}


// ljkvnwjnvjfnwv