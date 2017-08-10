//---------task1-------------------
let outMouseCoordinates = document.querySelector ('.output_Task1');
let blockCoordinates = document.querySelector ('.block_Task1');
blockCoordinates.addEventListener('mousemove', mouseCoordinates);
blockCoordinates.addEventListener('mouseleave', mouseLeave);

function mouseCoordinates(event) {
	
	outMouseCoordinates.textContent = "x = " + event.offsetX + " px; " + "y = " + event.offsetY + " px; ";
}

function mouseLeave (event) {

	outMouseCoordinates.textContent = "наведите курсор мыши на блок";
}

//---------task2-------------------
let blockDoubleClick = document.querySelector ('.block_Task2');
blockDoubleClick.addEventListener ('dblclick', mouseDoubleClick);
function mouseDoubleClick (event){
	this.style.backgroundImage = 'url(images/folderOpen.png)' ;
	setTimeout(function(event) { blockDoubleClick.style.backgroundImage = 'url(images/folder.png)' ; }, 3000);
}
//---------task3-------------------

let buttonTask3 = document.querySelector('.enter_Task3');
buttonTask3.addEventListener('click' , init);
let blockRoundingCorners = document.querySelector ('.blockRoundingCorners');
blockRoundingCorners.addEventListener ('mousemove', roundingCorners);

let out = '';
function init (){
	for (let i = 1; i < 300; i++){
		out+= ' <div class = "newBlock"> </div> ';
	}
	document.querySelector ('.out').innerHTML = out;

}

function roundingCorners (e){
	console.log (e);
	e.target.style.borderRadius =  event.offsetX + event.offsetY + 'px';
	e.target.style.transition= 'all ease 1s';
	
}
//---------task4-------------------

let blockBackground = document.querySelector ('.block_Task4');

let Img = document.querySelector('.images'); 
Img.addEventListener ('click', setBackground);

function setBackground (e){
	e = e || window.e; // для кроссбраузерности
	console.log (e);
// blockBackground.style.backgroundImage = 'url('+e.srcElement.currentSrc+')'; // в фаерфоксе не срабатывает!!!

	if (e.target) {
		blockBackground.style.backgroundImage = 'url(images/folderOpen.png)' ;
	}
	if (e.target.alt=="1"){
		blockBackground.style.backgroundImage = 'url(images/1.jpg) ';
	} else if (e.target.alt=="2"){
		blockBackground.style.backgroundImage = 'url(images/2.jpg) ';
	}else if (e.target.alt=="3"){
		blockBackground.style.backgroundImage = 'url(images/3.jpg) ';
	}else if (e.target.alt=="4"){
		blockBackground.style.backgroundImage = 'url(images/4.jpg) ';
	}
}

//---------task5-------------------
let margin = 100 ;
let blockMovingDown = document.querySelector ('.block_Task5');
blockMovingDown.addEventListener ('click', moveDown);
function moveDown (){

// blockMovingDown.style.marginLeft = counter + '10px';
blockMovingDown.style.marginTop = margin + 'px';
margin+=100;


let outBlockCoordinates = document.querySelector ('.output_Task5');
let tmp = blockMovingDown.getBoundingClientRect();
// outBlockCoordinates.textContent = tmp.bottom ;
console.log (tmp);
}

//-------------очистка результатов вывода на экран----------

let buttonCleanUp = document.querySelector('.enter_CleanUp');
buttonCleanUp.addEventListener('click' , cleanUp);

let buttonCleanUp3 = document.querySelector('.enter_CleanUp3');
buttonCleanUp3.addEventListener('click' , cleanUp);

function cleanUp (){

	location.reload();
}
//---------task6-------------------

let marker = 1 ;
let blockTrigger = document.querySelector ('.block_Task6');
blockTrigger.addEventListener ('click', trigger);
function trigger (){

	if (marker == 1){
		blockTrigger.style.marginLeft = '95px';
		marker = 2;
		console.log (1);
	}
	else if (marker == 2){
		blockTrigger.style.marginLeft = '185px';
		marker = 3;
		console.log (2);
	}
	else if (marker == 3){
		blockTrigger.style.marginLeft = '5px';
		marker = 1;
		console.log(0);
	}
}


//------------------------------------------
