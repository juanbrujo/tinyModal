/*
 *  jQuery tinyModal - v0.0.1
 *  
 *
 *  https://github.com/juanbrujo/tinyModal
 *  Demo: 
 *
 *  Author: Jorge Epuñan |  @csslab
 *  License: MIT
 *  2016
 */
/**
 * tinyModal(@params);
 *
 * @action: open/close modal | string | openModal / closeModal
 * @element: HTML element that will be opened as modal window | jQuery selector
 * @topParent: HTML element to target open/ready classes | jQuery selector
 * @callback: callback after modal window open/close | function
 *
 */
 
function tinyModal(action, element, topParent, callback){

  topParent = topParent || $('body');

  switch (action){

    case 'openModal':
      openModal(element, callback);
      break;

    case 'closeModal':
      closeModal(element, callback);
      break;

  }

  // init

  topParent.addClass('tinymodal-ready');
  element.addClass('tinymodal-window');

  /*!
	 * openModal(@params)
	 * open a modal window given a jQuery element
	 * @element: jQuery selector
	 * @callback: callback function
	 */
  function openModal(element, callback){

    topParent.addClass('tinymodal-active');
    $('body').append('<div class="tinymodal-cover"></div>');
    element.addClass('tinymodal-window-open');

    if (typeof callback === 'function') {
      callback();
    }

  }

  /*!
	 * closeModal(@params)
	 * close an open modal window given a jQuery element
	 * @element: jQuery selector
	 * @callback: callback function
	 */
  function closeModal(element, callback){

    topParent.removeClass('tinymodal-active');
    $('body').find('.tinymodal-cover').remove();
    element.removeClass('tinymodal-window-open');

    if (typeof callback === 'function') {
      callback();
    }

  }

} // end tinyModal();
