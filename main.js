  // begin modal
  const buyBtns = document.querySelectorAll('.js-buy-ticket')
  const modal = document.querySelector('.js-modal')
  const modalContainer = document.querySelector('.js-modal-container')
  const modalClose = document.querySelector('.js-modal-close')


  function showbuyTickets(){
      modal.classList.add('open')
  }
  function hidebuyTickets(){
      modal.classList.remove('open')
  }

  for (const buyBtn of buyBtns ){
      buyBtn.addEventListener('click',showbuyTickets)
  }
  modalClose.addEventListener('click',hidebuyTickets)
  modal.addEventListener('click',hidebuyTickets)
  modalContainer.addEventListener('click', function(event){
  event.stopPropagation()
  })
  // end modal


  var header = document.getElementById('header');
  var mobileMenu = document.getElementById('mobile-menu');
  var headerHeight = header.clientHeight;

  // đóng mở menu mobile
  mobileMenu.onclick = function (){
  var isClose = header.clientHeight === headerHeight
  if ( isClose){
      header.style.height = 'auto'
       }
  else{ header.style.height = null }
      }

      //  tự động đsong menu khi chọn
      var menuItems = document.querySelectorAll('#nav li a[href*="#"]')
      for (var i = 0; i < menuItems.length; i++){
          var menuItem = menuItems[i]

          menuItem.onclick = function(event) {
          var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
          if (isParentMenu) {
              event.preventDefault();
          } else {
              header.style.height = null;
          }
      }
  }