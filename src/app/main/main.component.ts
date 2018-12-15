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
      document.getElementById('menu-btn').setAttribute('src', '../../assets/Services/menu-hover.png');
  };
  document.getElementById('menu-btn').onmouseout = () => {
      document.getElementById('menu-btn').setAttribute('src', '../../assets/Services/menu.png');
  };
  document.getElementById('logo-nav-box').addEventListener('animationend', () => {
      document.getElementById('header-title').style.display = 'block';
      document.getElementById('header-title').className = 'title animated fadeInLeft';
  });
  setTimeout(() => {
    document.getElementById('main-header').style.display = 'block';
    document.getElementById('main-header').className = 'main-header animated fadeInLeft';
}, 2400);
document.getElementById('header-title').addEventListener('animationend', () => {
    document.getElementById('header-subtitle').style.display = 'block';
    document.getElementById('header-subtitle').className = 'subtitle animated fadeInRight';

});


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
    const caseStudiesSectionEnd = document.getElementById('case-studies-section').offsetTop +
        document.getElementById('case-studies-section').offsetHeight;
    if (top >= caseStudiesSection && top <= caseStudiesSectionEnd) {
        document.getElementById('logo-image').setAttribute('src', '../../assets/Services/Group 4.png');
    } else {
        document.getElementById('logo-image').setAttribute('src', '../../assets/Services/logo.png');
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
