/*!
 * tinyModal
 * ©2015 - Jorge Epuñan
 */
var tinyModal = (function(){

	if (!document.querySelector || !("className" in document.body)) {
		return false;
	}

	var container = document.body,
			popup = document.querySelector(".tinymodal-window-open"),
			status = null;

	container.className = container.className.replace(/\s+$/gi, "") + " tinymodal-ready";

	// utils
	function addClass(element, name) {
		element.className = element.className.replace(/\s+$/gi,"") + " " + name;
	}
	function removeClass(element, name) {
		if( element ) {
			element.className = element.className.replace(name, "");
		}
	}

	// add cover
	function addCover(){
		var newCover = document.createElement("div");
		addClass(newCover,"tinymodal-cover");
		document.body.appendChild(newCover);
	}
	// remove cover
	function removeCover(){
		var actualCover = document.querySelector(".tinymodal-cover");
		if( actualCover ) {
			actualCover.parentNode.removeChild(actualCover);
		}
	}
	// deactivate on ESC key
	function onEscKey(event) {
		if(event.keyCode === 27) {
			deactivate();
		}
	}
	// deactivate on cover click
	function onCoverClick(event) {
		if(event.target === cover || event.target === close) {
			deactivate();
		}
	}

	// get and set modal size by data-size
	function getSize(element){
		var size = element.getAttribute("data-size");
		if(size) {
			var sizes = size.split(",");
			element.setAttribute("style", "width:" + sizes[0] + ";height:" + sizes[1] + ";");
		}
	}

	// get and set modal class if available, by data-classname
	function getNewClass(element){
		var newClass = element.getAttribute("data-newclass");
		if(newClass) {
			addClass(element, newClass);
		}
	}

	// activate function
	function activate(state) {
		addCover();
		var cover = document.querySelector(".tinymodal-cover"),
				close = document.querySelectorAll(".tinymodal-close");
		if(close.length) {
			for (var i = 0; i < close.length; i++) {
				close[i].addEventListener("click", deactivate, false);
			}
		}
		document.addEventListener("keyup", onEscKey, false);
		cover.addEventListener("click", deactivate, false);
		cover.addEventListener("touchstart", deactivate, false);
		removeClass(popup,status);
		addClass(popup,state);
		getSize(popup);
		getNewClass(popup);
		setTimeout(function(){
			addClass(container, "tinymodal-active");
		}, 0);
		status = state;
	}

	// deactivate function
	function deactivate() {
		document.removeEventListener("keyup", onEscKey, false);
		document.removeEventListener("click", onCoverClick, false);
		document.removeEventListener("touchstart", onCoverClick, false);
		removeCover();
		removeClass(container, "tinymodal-active");
		removeClass(popup, "tinymodal-window-open");
		if(popup) {
			if(popup.classList.contains("tinymodal-new")) {
				setTimeout(function(){
					popup.parentNode.removeChild(popup);
				}, 300);
			}
		}
	}

	// openModal public method, w/ onOpen callback
	function openModal(selector, onOpen){
		if (selector.indexOf("#") > -1) {
			popup = document.querySelector(selector);
		} else if (selector.match(/.*(\.(jpg|png|gif))$/i)) {
			popup = document.createElement("aside");
			popup.setAttribute("class","tinymodal-window tinymodal-new");
			popup.innerHTML = "<div class=\"tinymodal-inner\"><img src=\"" + selector + "\" /></div>";
			document.body.appendChild(popup);
		}
		addClass(popup, "tinymodal-window-open");
		activate("");
		if(onOpen && typeof(onOpen) === "function"){
			onOpen.call(popup);
		}
		return this;
	}

	// closeModal public method, w/ onClose callback
	function closeModal(onClose) {
		deactivate();
		if(onClose && typeof(onClose) === "function"){
			onClose.call(popup);
		}
	}

	return {
		openModal: openModal,
		closeModal: closeModal
	};

})();
