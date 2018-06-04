let total = 6000,
	time = 1,
	hourRate,
	tabLeft = document.querySelector('.tab-left'),
	tabRight = document.querySelector('.tab-right'),
	blocksBlock = document.getElementById('blocks-block'),
	pagesBlock = document.getElementById('pages-block'),
	counterBlock = document.getElementById('counter-block'),
	counterPages = document.getElementById('counter-pages'),
	counterHours = document.getElementById('counter-hours'),
	counterRate = document.getElementById('counter-rate'),
	changesCheck = document.getElementById('changes-check'),
	cmsCheck = document.getElementById('cms-check'),
	totalValue = document.getElementsByClassName('total-count')[0,i],
	input = document.getElementsByTagName('input'),
	
    //blockCount = document.getElementById('counter-block'),
    //pageCount = document.getElementById('counter-pages'),
    //hoursCount = document.getElementById('counter-hours'),
    //hourCost = document.getElementById('counter-rate'),
    //editOption = document.getElementById('changes-check'),
    //cmsOption = document.getElementById('cms-check'),
    //input = document.getElementsByTagName('input'),
    //totalValue = document.getElementById('total-value'),
    //blockPages = document.getElementById('pages-block'),
    //blockBlock = document.getElementById('blocks-block'),
    //tabLeft = document.getElementsByClassName('tab-left')[0],
    //tabRight = document.getElementsByClassName('tab-right')[0];

const blockPrice = 500,
      pagePrice = 1500,
      editPrice = 500,
      cmsPrice = 1000,
      land = 5000,
      mulpage = 12000;


window.addEventListener('DOMContentLoaded', function() {
	
    tabLeft.addEventListener('click', () => {
		
		for (let i = 0; i < input.length; i++) {
			input[i].value = '';
		};
		
		blockBlock.style.display = 'flex';
		pagesBlock.style.display = 'none';
		
		tabLeft.classList.add('active');
		tabRight.classList.remove('active');
		
		if (changesCheck.checked) {
			changesCheck.checked = false;
		};
		if (cmsCheck.checked) {
			cmsCheck.cheked = false;
		};
		
		total = land;
		totalValue.value = total;
	});
		
    tabRight.addEventListener('click', () => {
		
		for (let i = 0; i < input.length; i++) {
			input[i].value = '';
		};
		
		blockBlock.style.display = 'none';
		pagesBlock.style.display = 'flex';
		
		tabLeft.classList.add('active');
		tabRight.classList.remove('active');
		
		if (changesCheck.checked) {
			changesCheck.checked = false;
		};
		if (cmsCheck.checked) {
			cmsCheck.cheked = false;
		};
		
		total = corp;
		totalValue.value = total;
	});
	
	counterBlock.addEventListener('change', () => {
		counterHours.value = '';
		counterRate.value = '';
	});
	
});


	