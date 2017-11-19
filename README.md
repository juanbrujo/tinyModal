tinyModal.js
===


![Travis CI](https://api.travis-ci.org/juanbrujo/tinyModal.svg)
![Lib size](https://badge-size.herokuapp.com/juanbrujo/tinyModal/master/dist/tinyModal.min.js)

Clean, Fast, Modular and customizable **Modal Window** controller

*What? Another one?*

But this one is **really** flexible. And only 2kb (min). And semantic-oriented (content must be in the document).

![tinyModal](https://i.imgur.com/oxvQHsh.gif)

## Features

- Super fast ✔
- Super lightweight ✔✔✔
- JS only 2kb (.min) ✔
- CSS only 0.8kb (.min) ✔
- IE8+ ✔
- Total control of design and transition effects ✔✔
- No need or jQuery or other library (Vanilla JS) ✔✔✔
- Open Source 🌟


Still not convinced? Check out this ↓ complete ↓ comparison ↓ table ↓

|  | tinyModal | Lightbox | Fancybox 2 | Bootstrap's Modal.js |
|--------------|------------|----------|------------|----------------------|
| Size | 2kb ✔ | 8kb | 23kb | 8kb |
| Dependency | just some CSS ✔ | jQuery (+88kb) | jQuery (+88kb) | jQuery (+88kb) + Bootstrap.js (30kb) |
| Performance | smooth ✔ | heavy repaint | heavy repaint | good |
| Design | your CSS ✔ | own | own | own |
| Effects | your CSS3 ✔ | own | own | own |
| Responsive | sure ✔ | nope | nope | yes |
| Mobile-friendly | yep ✔ | nope | nope | nope |
| Conflict | none ✔ | probably | probably | probably |
| Target | coders ✔ | newbies | newbies | newbies |

## Demos

[tinyModal demo](http://juanbrujo.github.io/tinyModal/)



## Use

- Add `tinyModal.css` and `tinyModal.js` to your pages/templates.

- Create as many modal windows as needed using the following markup and the `tinymodal-window` class:

```html
<aside id="first-modal" class="tinymodal-window">
	<div class="tinymodal-inner">
    	...
    	<button class="tinymodal-close">X</button>
    </div>
</aside>
```

- Then call the modal using a link and `tinymodal-modal` class:

```javascript
<a href="#first-modal" class="tinymodal-modal">Open first-modal</a>
```

- Apply the event handler to all links (or other selector):

```javascript
var links = document.querySelectorAll('a.tinymodal-modal');

for (var i = 0; links.length > i; i++) {
  links[i].addEventListener("click", function(event){  // callback
    event.preventDefault();
    var element = this.getAttribute("href");
    tinyModal.openModal(element, function(){
      var closeLink = this.querySelectorAll('a[href="javascript:closeModal()"]');
      if (closeLink.length < 1) {
        var closeLink = document.createElement("a");
        closeLink.setAttribute("href","javascript:closeModal()");
        closeLink.innerHTML = "X";
        this.appendChild(closeLink);
      }
    });
  });
}
```

- If needed, you can open modal windows using JavaScript and the onClick event:

```html
<button onclick="javascript:openModal();">Open #first-modal with JS</button>
<button onclick="javascript:closeModal();">Close with JS</button>
```

```javascript
function openModal() {
    tinyModal.openModal("#first-modal", function(){ 
        // callback
        console.log('#first-modal opened'); 
    });
}

function closeModal() {
    tinyModal.closeModal(function(){  
        // callback
        console.log('closed by closeModal() function');
    });
}
```

## Design

Base modal styles are included in `tinyModal.scss` but you should add your own styles. Base CSS clases for design are:

```css
.tinymodal-cover    {}
.tinymodal-window   {}
.tinymodal-active   {}
.tinymodal-close    {}
```

And the functional CSS clases are:

```css
.tinymodal-ready        {}
.tinymodal-active       {}
.tinymodal-window-open  {}
.tinymodal-ready        {}
```

## Developing

Need to change anything?

```
$ git clone 	https://github.com/juanbrujo/tinyModal.git
$ npm install
$ grunt // build
$ grunt watch // develop
$ grunt testjs // jshint test
```


## Bugs?

[tinyModal issues](https://github.com/juanbrujo/tinyModal/issues)
