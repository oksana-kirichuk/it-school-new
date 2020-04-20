
// fixed menu scroll 

window.addEventListener('scroll', function() {
	
	var offset = window.pageYOffset || document.documentElement.scrollTop;

	if (offset > 10) {
		document.querySelector('.menu-fixed').classList.add('menu-scroll');
	} else {
		document.querySelector('.menu-fixed').classList.remove('menu-scroll');
	}
});



// Accordion 

var accordion = (function () {
	return function (selector) {
	var _mainElem = document.querySelector(selector),
    	_items = _mainElem.querySelectorAll('.accordion-item');

  	for(var i = 0; i < _items.length; i++) {
   		 _items[i].addEventListener('click', function () {

		if (_mainElem.querySelector('.accordion-item-open') && _mainElem.querySelector('.accordion-item-open') != this) {
			_mainElem.querySelector('.accordion-item-open .accordion-content').style.maxHeight = null;
			_mainElem.querySelector('.accordion-item-open').classList.remove('accordion-item-open');
		}	

      	var itemContent = this.querySelector('.accordion-content');				
      
		if (itemContent.style.maxHeight) {
			itemContent.style.maxHeight = null;
		} else {
			itemContent.style.maxHeight = itemContent.scrollHeight + "px";
		}

      	this.classList.toggle('accordion-item-open');
    });
  }
  }
}());

function ready() {
  if (document.querySelector('.accordion') != null) {
      	var accordionTest = accordion('.accordion');
  	}
}

document.addEventListener("DOMContentLoaded", ready);


// form

(function() {
  	const inputs = document.querySelectorAll('.form-input'),
		checkboxes = document.querySelectorAll('input[type="checkbox"]'),
		send = document.querySelector('.form-btn'),
		reset = document.querySelector('.form-btn-reset');
  	let toggle1,
      	toggle2;

  	const allElements = [...Array.from(inputs), ...Array.from(checkboxes)];

  	const checkForm2 = () => {
      	if(checkboxes[0].checked || checkboxes[1].checked) {
          	toggle2 = true;
      	} else {
        	toggle2 = false;
      	};

    for (let i = 0; i < inputs.length; i++) {
		if(inputs[i].value !== '') {
		toggle2 = true;
      	} 
    };

    if(toggle2) {
      	reset.classList.add('form-btn-reset-active');
    } else {
      	reset.classList.remove('form-btn-reset-active');
    };
};

  	const checkForm = () => {
      	if(checkboxes[0].checked || checkboxes[1].checked) {
          	toggle1 = true;
      	} else {
          	toggle1 = false;
      	};

    for (let i = 0; i < inputs.length; i++) {
      	if(inputs[i].value !== '') {
          	toggle1 = true;
      	} else {
          	toggle1 = false;
      	};
    };

		if(toggle1) {
			send.classList.add('form-btn-send');
		} else {
			send.classList.remove('form-btn-send');
		};
  	};

  	for (let i = 0; i < allElements.length; i++) {
		allElements[i].addEventListener('change', checkForm);
		allElements[i].addEventListener('change', checkForm2);
  	};

  	const validateFrom = evt => {
      	evt.preventDefault();
		if (!toggle1) {
			for (let i = 0; i < inputs.length; i++) {
			if(inputs[i].value == '') {
				inputs[i].classList.add('form-input-invalid');
			} else {
				inputs[i].classList.remove('form-input-invalid');
			}
		};
		  
      	if(!checkboxes[0].checked && !checkboxes[1].checked) {
			checkboxes.forEach( elem => {
			console.log(elem)
			elem.classList.add('checkbox-invalid')
        }
        );
      } else {
			checkboxes.forEach( elem => {
			elem.classList.add('checkbox-invalid')
        }
        );
      };
    };
  };

  	// send.addEventListener('click', evt => validateFrom(evt));
})();


