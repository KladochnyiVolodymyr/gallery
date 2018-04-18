export class Calculator {
  constructor(selector) {
    var that = this;
    this.block = $(selector);
    this.block.html(`
            <div class='plus'>+</div>
            <div class='count'>0</div>
            <div class='minus'>-</div>
        `);
    this.block.find('.plus').click(function() {
      that.plus();
    });
    
  }
  plus() {
    let count = parseInt(this.block.find('.count').text());
    count += 1;
    this.block.find('.count').html(count);
  }
  minus() {

  }
}
