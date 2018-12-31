import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  isMenuOpened: boolean = false;
  navbarHeight: number;
  lastScrollTop: number = 0;
  delta: number = 5;
  didScroll: boolean;

  constructor() { }

  openMenu() {
    if (!this.isMenuOpened) {
        document.getElementById('menu').style.display = 'flex';
        document.getElementById('menu').className = 'menu-wrapper animated fadeInRight';
    } else {
        document.getElementById('menu').className = 'menu-wrapper animated fadeOutRight';
    }
    this.isMenuOpened = !this.isMenuOpened;
}

    scrollTo(type) {
        window.scrollBy({
            // top: type === 'header' ? document.getElementById('members-list').offsetTop - document.documentElement.scrollTop :
            //     document.getElementById('case-studies-section').offsetTop - document.documentElement.scrollTop,
            top: type === 'header' ? document.getElementById('skills-section').offsetTop - document.documentElement.scrollTop :
                document.getElementById('case-studies-section').offsetTop - document.documentElement.scrollTop,
            behavior: 'smooth'
        });
    }

    routeTo(page) {
      // location.href = location.href.split('/')[0] + '/' + page;
  }

    hasScrolled() {
      let st;
      const ua = navigator.userAgent.toLowerCase();
      if (ua.indexOf('chrome') > -1 || ua.indexOf('firefox') > -1) {
          st = document.documentElement.scrollTop;
      } else {
          st = document.body.scrollTop;
      }
      if (Math.abs(this.lastScrollTop - st) <= this.delta) {
          return;
      }

      if (st > this.lastScrollTop && st > this.navbarHeight) {
          document.getElementById('logo-nav-box').style.top = '-4vw';
          document.getElementById('menu').className = 'menu-wrapper animated fadeOutRight';
          this.isMenuOpened = false;
      } else {
          if (st < this.lastScrollTop || st < this.navbarHeight) {
              document.getElementById('logo-nav-box').style.top = '4vw';
          }
      }

      this.lastScrollTop = st;
  }

  ngOnInit() {
    this.navbarHeight = document.getElementById('logo-nav-box').offsetHeight;
    setTimeout(() => {
      document.getElementById('logo-nav-box').style.display = 'flex';
      document.getElementById('logo-nav-box').className = 'logo-nav-box animated fadeInDown';
  }, 100);
  document.getElementById('menu-btn').onmouseover = () => {
      document.getElementById('menu-btn').setAttribute('src', 'assets/Services/menu-hover.png');
  };
  document.getElementById('menu-btn').onmouseout = () => {
      document.getElementById('menu-btn').setAttribute('src', 'assets/Services/menu.png');
  };
  document.getElementById('logo-nav-box').addEventListener('animationend', () => {
      document.getElementById('header-title').style.display = 'block';
      document.getElementById('header-title').className = 'title animated fadeInRight';
  });
  setTimeout(() => {
    document.getElementById('main-header').style.display = 'block';
    document.getElementById('main-header').className = 'main-header animated fadeInLeft';
}, 2400);
document.getElementById('header-title').addEventListener('animationend', () => {
    document.getElementById('header-subtitle').style.display = 'block';
    document.getElementById('header-subtitle').className = 'subtitle animated fadeInRight';
});
// document.getElementById('case-studies-section').addEventListener('animationend', () => {
//   document.getElementById('binaryvision').style.display = 'block';
//   document.getElementById('binaryvision').className = 'binaryvision animated fadeInLeft';
// });


  window.addEventListener('scroll',()=>{
    this.didScroll = true;
    this.hasScrolled();
    this.didScroll = false;
    let top;
    const ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('chrome') > -1 || ua.indexOf('firefox') > -1) {
        top = document.documentElement.scrollTop;
    } else {
        top = document.body.scrollTop;
    }


    const caseStudiesSection = document.getElementById('case-studies-section').offsetTop;
    const binaryvisionSection = document.getElementById('case-studies-section binaryvision').offsetTop -  (window.innerHeight * 14 / 100) -
    (window.innerHeight * 12 / 100) * 2;
    const caseStudiesSectionEnd = document.getElementById('case-studies-section').offsetTop +
        document.getElementById('case-studies-section').offsetHeight;
    
    const binaryvisionDevelopment = document.getElementById('case-studies-section').offsetTop - (window.innerHeight * 14 / 100) -
    (window.innerHeight * 12 / 100) * 2;
  
    
    if (top >= caseStudiesSection && top <= caseStudiesSectionEnd) {
        document.getElementById('logo-image').setAttribute('src', 'assets/Services/Group 4.png');
    } else {
        document.getElementById('logo-image').setAttribute('src', 'assets/Services/logo.png');
    }
    //Binary Vision content
    if (top>=binaryvisionSection){
      document.getElementById('binaryvision').style.display = 'block';
      document.getElementById('binaryvision').className = 'binaryvision animated fadeInLeft';
      document.getElementById('binaryvision').addEventListener("animationend",()=>{
        document.getElementById('content').style.display = 'block';
        document.getElementById('content').className = 'content animated fadeInUp';
      });
    
    //binaryvision-development
    if(top>=4128){
      document.getElementById('binaryvision-development-pic1').style.display="block";
      document.getElementById('binaryvision-development-pic1').className='binaryvision-development-pic animated fadeInRight'; 
      document.getElementById('background1').style.opacity="1";
      document.getElementById('background1').className='background1 animated fadeInLeft'; 
      document.getElementById('development-brand-content').style.display="block";
      document.getElementById('development-brand-content').className='development-brand-content animated fadeInUp'; 
      document.getElementById('development-services').style.display="block";
      document.getElementById('development-services').className='development-services animated fadeInUp';
      document.getElementById('development-brand').style.display="block";
      document.getElementById('development-brand').className='development-brand animated developmentBrand'; 
      document.getElementById('development-brand-span').style.display="block";
      document.getElementById('development-brand-span').className='development-brand-span animated developmentBrandSpan'; 
    }
    const binaryvisionUi = document.getElementById('case-studies-section').offsetTop + innerHeight*1.3 - (window.innerHeight * 14 / 100) -
    (window.innerHeight * 12 / 100) * 2;

    if(top>=8918){
    document.getElementById('binaryvision-uiux-pic-box').style.display="block";
    document.getElementById('binaryvision-uiux-pic-box').className='binaryvision-uiux-pic-box animated fadeInLeft'; 
    document.getElementById('background2').style.opacity="1";
    document.getElementById('background2').className='background2 animated fadeInRight';
    document.getElementById('ui-brand-content').style.display="block";
    document.getElementById('ui-brand-content').className='ui-brand-content animated fadeInUp'; 
    document.getElementById('ui-services').style.display="block";
    document.getElementById('ui-services').className='ui-services animated fadeInUp';
    document.getElementById('ui-brand').style.display="block";
      document.getElementById('ui-brand').className='ui-brand animated uiBrand'; 
    }


    // if(top>=9500 && top< 9700){
    // document.getElementById('binaryvision-digital-pic1').style.top="159vw";
    // }
    const binaryvisionDigita = document.getElementById('case-studies-section').offsetTop + innerHeight*3 - (window.innerHeight * 14 / 100) -
    (window.innerHeight * 12 / 100) * 2;

    if(top>=13673){
        document.getElementById('binaryvision-digital-pic1').style.display="block";
        document.getElementById('binaryvision-digital-pic1').className='pic1 animated fadeInRight'; 
        document.getElementById('binaryvision-digital-pic2').style.display="block";
        document.getElementById('binaryvision-digital-pic2').className='pic2 animated fadeInRight';
        document.getElementById('backgroud3').style.opacity="1";
        document.getElementById('backgroud3').className='backgroud3 animated fadeInLeft';
        document.getElementById('digital-brand-content').style.display="block";
        document.getElementById('digital-brand-content').className='digital-brand-content animated fadeInUp'; 
        document.getElementById('digital-services').style.display="block";
        document.getElementById('digital-services').className='digital-services animated fadeInUp';
        }

    const binaryvisionBrand = document.getElementById('case-studies-section').offsetTop + innerHeight*4.8 - (window.innerHeight * 14 / 100) -
    (window.innerHeight * 12 / 100) * 2;
    
    if(top>=18524){
        document.getElementById('binaryvision-brand-box1').style.display="block";
        document.getElementById('binaryvision-brand-box1').className='box1 animated fadeInLeft'; 
        document.getElementById('binaryvision-brand-box2').style.display="block";
        document.getElementById('binaryvision-brand-box2').className='box2 animated fadeInLeft';
        document.getElementById('backgroud4').style.opacity="1";
        document.getElementById('backgroud4').className='backgroud4 animated fadeInRight';
        document.getElementById('brand-brand-content').style.display="block";
        document.getElementById('brand-brand-content').className='brand-brand-content animated fadeInUp'; 
        document.getElementById('brand-services').style.display="block";
        document.getElementById('brand-services').className='brand-services animated fadeInUp';
        }

    }
    if (top > caseStudiesSection) {
        document.getElementById('out-of-thought-section').style.display = 'none';
        document.getElementById('footer').style.display = 'flex';

    } else {
        document.getElementById('out-of-thought-section').style.display = 'flex';
        document.getElementById('footer').style.display = 'none';
    }
  });
  }

}
