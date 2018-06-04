let total = 5000,
    blockCount = document.getElementById('counter-block'),
    pageCount = document.getElementById('counter-pages'),
    hoursCount = document.getElementById('counter-hours'),
    hourCost = document.getElementById('counter-rate'),
    editOption = document.getElementById('changes-check'),
    cmsOption = document.getElementById('cms-check'),
    input = document.getElementsByTagName('input'),
    totalValue = document.getElementById('total-value'),
    blockPages = document.getElementById('pages-block'),
    blockBlock = document.getElementById('blocks-block'),
    tabLeft = document.getElementsByClassName('tab-left')[0],
    tabRight = document.getElementsByClassName('tab-right')[0];

const blockPrice = 500,
      pagePrice = 1500,
      editPrice = 500,
      cmsPrice = 1000,
      land = 5000,
      mulpage = 10000;


window.addEventListener('DOMContentLoaded', function() {
    tabLeft.addEventListener('click',LeftTabActivate);
    tabRight.addEventListener('click',RightTabActivate);

    blockCount.addEventListener('input', () =>{
        hourCost.value = '';
        hoursCount.value = '';
        total = blockPrice * blockCount.value;
        totalValue.value = total
    });

    pageCount.addEventListener('input', () =>{
        hourCost.value = '';
        hoursCount.value = '';
        total = pagePrice * pageCount.value;
        totalValue.value = total;

    });

    hoursCount.addEventListener('input', ()=>{
        blockCount.value = '';
        pageCount.value = '';

        if (hourCost.value != ''){
            total = hourCost.value * hoursCount.value;
            totalValue.value = total
        }
        else {
            total = 0;
            totalValue.value = '';
        }
    });

    hourCost.addEventListener('input', ()=>{
        blockCount.value = '';
        pageCount.value = '';

        if (hoursCount.value != ''){
            total = hourCost.value * hoursCount.value;
            totalValue.value = total;
        }
        else {
            total = 0;
            totalValue.value = '';
        }
    });

    editOption.addEventListener('change', ()=>{
       if (total != 0) {
           addEdit();
           totalValue.value = total;
       }
    });

    cmsOption.addEventListener('change', ()=>{
       if (total != 0) {
           addCms();
           totalValue.value = total;
       }
    })
});

function addCms() {
    if (cmsOption.checked) {
        total += cmsPrice;
    }
    else {
        total -= cmsPrice;
    }
}

function addEdit() {
    if (editOption.checked) {
        total += editPrice;
    }
    else {
        total -= editPrice;
    }
}

function LeftTabActivate () {
    for (let i = 0; i<input.length; ++i){
        input[i].value = '';
    }
    tabRight.classList.remove('active');
    tabLeft.classList.add('active');
    blockBlock.classList.remove('hidden');
    blockPages.classList.add('hidden');
    cmsOption.checked = false;
    editOption.checked = false;
    total=land;
    totalValue.value=total;
}
function RightTabActivate () {
    for (let i = 0; i<input.length; ++i){
        input[i].value = '';
    }
    tabLeft.classList.remove('active');
    tabRight.classList.add('active');
    blockBlock.classList.add('hidden');
    blockPages.classList.remove('hidden');
    cmsOption.checked = false;
    editOption.checked = false;
    total = mulpage;
    totalValue.value = total;
}