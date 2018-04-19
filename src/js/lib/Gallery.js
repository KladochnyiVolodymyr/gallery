

export default class Gallery {
    constructor(selector) {
      this.block = $(selector);
      /* this.block.find('.loader').addClass('is-active'); */
      let that = this;
  
    }
  
    initSlick(imgArr) {
  
      $.each(imgArr, function() {
        console.log('kjkj');
      });
  
      $('.main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.thumbnails'
      });
      $('.thumbnails').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.main',
        dots: true,
        arrows: false,
        centerMode: true,
        focusOnSelect: true
      });
    }
  }
  