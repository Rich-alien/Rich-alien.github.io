document.addEventListener("DOMContentLoaded", () => {
	"use strict";
	const btnPublications = document.querySelector('.publications'),
	btnIgtv = document.querySelector('.igtv'),
	btnSave = document.querySelector('.save'),
	btnMarks = document.querySelector('.marks'),
	gridLi = document.querySelector('.profile__li'),
	grid = document.querySelector('.profile__slider'),
	windSetting = document.querySelector('.setting-window'),
	btnSetting = document.querySelector('.profile__static-setting');

	btnIgtv.addEventListener("click", () => {
		btnIgtv.classList.add('activeBtn');
		btnSave.classList.remove('activeBtn');
		btnMarks.classList.remove('activeBtn');
		btnPublications.classList.remove('activeBtn');
		grid.style.display = "none";
		gridLi.style.display = "grid";
	});
	btnSave.addEventListener("click", () => {
		btnIgtv.classList.remove('activeBtn');
		btnSave.classList.add('activeBtn');
		btnMarks.classList.remove('activeBtn');
		btnPublications.classList.remove('activeBtn');
				grid.style.display = "none";
				gridLi.style.display = "none";
	});
	btnMarks.addEventListener("click", () => {
		btnIgtv.classList.remove('activeBtn');
		btnSave.classList.remove('activeBtn');
		btnMarks.classList.add('activeBtn');
		btnPublications.classList.remove('activeBtn');
				grid.style.display = "none";
				gridLi.style.display = "none";
	});
	btnPublications.addEventListener("click", () => {
		btnIgtv.classList.remove('activeBtn');
		btnSave.classList.remove('activeBtn');
		btnMarks.classList.remove('activeBtn');
		btnPublications.classList.add('activeBtn');
		grid.style.display = "grid";
		gridLi.style.display = "none";
	});
	btnSetting.addEventListener("click", () => {
		windSetting.style.display="flex";
	});
});
// new Vue({
// 	el: '#app3',
// 	data: {
		
// 	},
// 	created: function () {
// 		this.counter = 3;
// 		this.high();
// 	},
// 	methods: {
// 		high() {
// 			this.counter++;
// 			console.log(this.counter);
// 		}
// 	},
// });