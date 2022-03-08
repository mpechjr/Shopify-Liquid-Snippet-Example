//...

theme.initQuickTBBShop = function () { 

    var productId = 000000000000;
    var handle = 'tbb';
    var btn = window.document.querySelector('.js-modal-open-quick-modal-'+productId);

    var modal = new theme.Modals('QuickShopModal-'+productId, 'quick-shop-popup-modal');

    btn.addEventListener('click', function(evt){     
      modal.open(evt);
    });
    theme.preloadProductModal(handle, productId, btn);
  };

theme.initQuickTBBShop();

//...