// Tab FAQ

document.addEventListener("DOMContentLoaded", function() {
	let tabButton = document.querySelectorAll(".tabs-switcher-button");
	let tabSlide = document.querySelectorAll(".tabs-content");
	let listItem = document.querySelectorAll(".list-item");

//tabs switching

	for(let i = 0; i < tabButton.length; i++) {
		tabButton[i].onclick = () => {
			tabButton.forEach((item, i) => {
			item.classList.remove("active");
		});

		tabSlide.forEach((item, i) => {
		item.classList.remove("visible");

			for(let j = 1; j < item.children.length; j++) {
				item.children[j].classList.remove("list-item-open");
			}

			item.children[0].classList.add("list-item-open");
		});

			tabButton[i].classList.add("active");
			tabSlide[i].classList.add("visible");
		};
	}

	//accordion

	for(let i = 0; i < listItem.length; i++) {

		listItem[i].onclick = () => {

			if(!listItem[i].classList.contains("list-item-open")) {
				listItem.forEach((item, i) => {
					item.classList.remove("list-item-open");
				});
				listItem[i].classList.add("list-item-open");
			} else {
				listItem[i].classList.remove("list-item-open");
			}
		}
	}

	// === tabs
  
    const tabsBlock = document.querySelector(".tabs-block");
    const inner = document.querySelectorAll(".tabs-inner");
    const tabListItem = document.querySelectorAll(".tabs-list-item");
  
    Array.from(tabListItem, el =>
      	el.addEventListener("click", e => {
			const dataTab = el.dataset.tab;
			const tabInner = document.querySelector(
          	`.tabs-inner[data-tab='${dataTab}']`
        );
  
        Array.from(inner, elInner => {
          	elInner.classList.remove("active");
        });
  
        tabInner.classList.add("active");
  
        Array.from(tabListItem, item => {
          	item.classList.remove("active");
        });
  
        el.classList.add("active");
      	})
    );
  
    // === button
  
    const toggleButton = document.querySelector(".show-tabs");
  
    toggleButton.addEventListener("click", e => {
      	tabsBlock.classList.toggle("active");
    });
});
  
