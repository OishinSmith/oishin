import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'oishinsmith';

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    /*---------------------------------------------------- */
    /* Preloader
    ------------------------------------------------------ */
    $(window).on('load', function () {
      // will first fade out the loading animation
      $('#loader').fadeOut('slow', function () {
        console.log('loading');
        // will fade out the whole DIV that covers the website.
        $('#preloader').delay(300).fadeOut('slow');
        console.log('javascript loading...');
      });
    });

    /*---------------------------------------------------- */
    /* FitText Settings
    ------------------------------------------------------ */
    setTimeout(function () {

      $('#intro h1').fitText(1, { minFontSize: '42px', maxFontSize: '84px' });
      
    }, 100);

    /*---------------------------------------------------- */
    /* FitVids
    ------------------------------------------------------ */
    $('.fluid-video-wrapper').fitVids();


    /*---------------------------------------------------- */
    /* Owl Carousel
    ------------------------------------------------------ */
    $('#owl-slider').owlCarousel({
      navigation: false,
      pagination: true,
      itemsCustom: [
        [0, 1],
        [700, 2],
        [960, 3]
      ],
      navigationText: false
    });

    /*---------------------------------------------------- */
    /* Masonry
    ------------------------------------------------------ */
    const containerProjects = $('#folio-wrapper');

    containerProjects.imagesLoaded(function () {

      containerProjects.masonry({
        itemSelector: '.folio-item',
        resize: true
      });

    });

     /*----------------------------------------------------*/
    /* Modal Popup
    ------------------------------------------------------*/
    $('.item-wrap a').magnificPopup({

      type:'inline',
      fixedContentPos: false,
      removalDelay: 300,
      showCloseBtn: false,
      mainClass: 'mfp-fade'

    });

    $(document).on('click', '.popup-modal-dismiss', function () {
      $.magnificPopup.close();
    });

  }

  /*-----------------------------------------------------*/
    /* Navigation Menu
    ------------------------------------------------------ */


  public menuToggle(){
    console.log("awdawd");
    const toggleButton = $('.menu-toggle');
    const nav = $('.main-navigation');
    toggleButton.toggleClass('is-clicked');
    console.log('clicked!');
    nav.slideToggle();
  }

      // nav items
  public clickNav(item: any){
    console.log(item);
    const toggleButton = $('.menu-toggle');
    const nav = $('.main-navigation');
    toggleButton.toggleClass('is-clicked'); 
    this.smoothScroll(item);
    nav.fadeOut();   
  }

  public smoothScroll(item: any){
    console.log(item);
  }

}
