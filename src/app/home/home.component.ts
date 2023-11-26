import { Component, OnInit } from '@angular/core';
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  public isCollapsed = true;

  nueva:boolean = true;

  active:number = 0;
	disabled:boolean = true;

  variable:string = '';
  

  skills:any[] = [{
    skillName:'Javascript',
    skillDescription:`JavaScript is a high-level, dynamic programming language used primarily to add
    interactivity and functionality to web pages. It is often referred to as the "language
    of the web" because it runs natively in web browsers, allowing developers to create complex
    and dynamic user interfaces, manipulate web page content, and communicate with servers to
    retrieve or store data without requiring a page refresh. JavaScript is also used in
    server-side programming, mobile app development, and game development, among other
    applications.`,
    skillPorcentage:75,
    isCollapsed:true
  }, {
    skillName:'Typescript',
    skillDescription:`TypeScript is a strongly typed superset of JavaScript that adds optional static typing and other features to the language. It is designed to make it easier to build and maintain large-scale JavaScript applications by catching errors and providing better tooling support. With TypeScript, developers can define types for variables, function parameters, and return values, which helps to prevent type-related errors and provides better code documentation. TypeScript also includes features such as interfaces, classes, and modules, which make it easier to organize code and create reusable components. Since TypeScript code can be transpiled to JavaScript, it can run in any browser or environment that supports JavaScript.`,
    skillPorcentage:65,
    isCollapsed:true
  }, {
    skillName:'Angular',
    skillDescription:`Angular is a popular open-source front-end framework for building dynamic and complex web applications. It was developed by Google and is based on TypeScript, a superset of JavaScript, which allows for the use of static typing and other advanced language features. Angular uses a component- architecture that allows developers to build reusable UI components that can be easily integrated into larger applications. It also includes powerful features such as two-way data binding, dependency injection, and a powerful template syntax that makes it easy to build complex user interfaces. Overall, Angular is a powerful and versatile framework that can be used to build a wide variety of web applications, from simple single-page apps to large-scale enterprise applications. Its popularity is due in part to its rich feature set, ease of use, and strong community support.`,
    skillPorcentage:75,
    isCollapsed:true
  }, {
    skillName:'Java Spring Framework',
    skillDescription:`Spring is a popular open-source application framework for building enterprise Java applications. It provides a comprehensive programming and configuration model for modern Java-based enterprise applications. The Spring framework was initially created by Rod Johnson in 2003 and has since grown into a widely used framework for building scalable, high-performance, and secure applications. Spring is designed to simplify the development process by providing a set of libraries and tools that can be used to build enterprise-level applications quickly and efficiently. The framework includes a wide range of features, such as dependency injection, aspect-oriented programming, data access, and more. Spring's dependency injection feature, also known as Inversion of Control (IoC), helps to simplify the management of object dependencies by allowing developers to define the relationships between objects using configuration files or annotations. This makes it easier to write modular, testable code and reduces the amount of boilerplate code required to manage dependencies. Spring also includes a robust web framework called Spring MVC, which provides a powerful model-view-controller architecture for building web applications. Additionally, Spring Boot, a module of the Spring framework, provides a streamlined way to build and deploy standalone, production-grade Spring applications quickly. Overall, Spring is a versatile and powerful framework that has become a popular choice for building enterprise-level Java applications due to its ease of use, scalability, and community support.`,
    skillPorcentage:55,
    isCollapsed:true
  }, {
    skillName:'PHP',
    skillDescription:`PHP (Hypertext Preprocessor) is a popular server-side scripting language used primarily for web development. It is an open-source language, meaning it is free to use, and is often used in combination with HTML, CSS, and JavaScript to create dynamic and interactive web pages. PHP is known for its simplicity, ease of use, and flexibility, making it a popular choice for web developers of all skill levels. With PHP, developers can create dynamic web pages that can interact with databases, handle user input, and perform a wide range of other tasks. Overall, PHP is a powerful and versatile language that has become a cornerstone of modern web development.`,
    skillPorcentage:75,
    isCollapsed:true
  }, {
    skillName:'SQL',
    skillDescription:`SQL (Structured Query Language) is a programming language used to manage and manipulate relational databases. It is used to perform various operations on databases such as creating, updating, and deleting data in tables, retrieving data based on specific criteria, and managing user access to databases. SQL is a declarative language, meaning that it focuses on what the desired outcome should be, rather than on how to achieve it. SQL is used by a wide range of businesses and organizations to manage and store large amounts of data, and it has become an essential tool for many data-driven applications. Overall, SQL is a powerful and versatile language that is widely used in the world of data management and analysis.`,
    skillPorcentage:80,
    isCollapsed:true
  }, {
    skillName:'HTML',
    skillDescription:`HTML (Hypertext Markup Language) is the standard markup language used to create web pages and web applications. It provides a set of tags and attributes that are used to structure the content of a web page, such as headings, paragraphs, images, and links. HTML is a markup language, meaning it is used to describe the structure and appearance of content, rather than to define its functionality or behavior. HTML is often used in combination with other technologies, such as CSS (Cascading Style Sheets) and JavaScript, to create visually appealing and interactive web pages. Overall, HTML is an essential tool for web developers and is used extensively in the creation of modern web applications.`,
    skillPorcentage:90,
    isCollapsed:true
  }, {
    skillName:'CSS',
    skillDescription:`CSS (Cascading Style Sheets) is a style sheet language used to describe the presentation and appearance of web pages. It is used to control the layout, colors, fonts, and other visual aspects of a web page, allowing developers to create visually appealing and responsive web designs. CSS works by separating the presentation of a web page from its content, allowing for greater flexibility and control over the design. CSS can be used in conjunction with HTML and JavaScript to create dynamic and interactive web pages. Overall, CSS is a powerful tool for web developers and has become an essential component of modern web design.`,
    skillPorcentage:90,
    isCollapsed:true
  }]

  certifications:any[] = [
    {
      certName:'DevOps',
      certInstitution:'The University of Chicago',
      certImage: 'mais-uchicago.png',
      certYear: 2022
    },
    {
      certName:'Cloud Practitioner',
      certInstitution:'Amazon Web Services',
      certImage: 'mais-aws-practi.png',
      certYear: 2022
    },
    {
      certName:'Partner Accreditation (Technical)',
      certInstitution:'Amazon Web Services',
      certImage: 'mais-aws-technical.png',
      certYear: 2023
    },
    {
      certName: 'Agile Way of Working Foundation',
      certInstitution: 'TCS iEvolve',
      certImage:'mais-tcs.png',
      certYear: 2021
    },
    {
      certName: 'Growth & Transformation : Awareness E0 Proficiency',
      certInstitution: 'TCS iEvolve',
      certImage:'mais-tcs.png',
      certYear: 2021
    },
    {
      certName: 'Software Security Assurance - HiTech',
      certInstitution: 'TCS iEvolve',
      certImage:'mais-tcs.png',
      certYear: 2021
    },
    {
      certName: 'Wings : Core Articulation_Articulate Right Curriculum',
      certInstitution: 'TCS iEvolve',
      certImage:'mais-tcs.png',
      certYear: 2021
    }
  ]

  

  constructor() { }

  ngOnInit(): void {
    
  }

  onNavChange(changeEvent: NgbNavChangeEvent) {
		if (changeEvent.nextId === 3) {
			changeEvent.preventDefault();
		}
	}

	toggleDisabled() {
		this.disabled = !this.disabled;
		if (this.disabled) {
			this.active = 1;
		}
	}

}
