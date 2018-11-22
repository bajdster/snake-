window.onload = function()
{
	/*var hole = document.querySelector("#hole");
	
	window.addEventListener('keydown', moveIt);
	
	var ctx = hole.getContext("2d");
	
	ctx.fillStyle = "green";
	ctx.fillRect(800,300,50,50);	
	
	
	
	var x = 800;
	var y = 300;
	
	//funkcja ktora porusza Snake strzalkami
	function moveIt(e)
	{
		
		if(e.keyCode== 38)
		{
			//bez clearRect kwadrat "ciagnie sie"
			ctx.clearRect(0,0,hole.width, hole.height);
			y = y - 10;
			ctx.fillRect(x, y, 50, 50);
		}
		
		if(e.keyCode== 37)
		{
			ctx.clearRect(0,0,hole.width, hole.height);
			x = x - 10;
			ctx.fillRect(x, y, 50, 50);
		}
		if(e.keyCode== 40)
		{
			ctx.clearRect(0,0,hole.width, hole.height);
			y = y + 10;
			ctx.fillRect(x, y, 50, 50);
		}
		if(e.keyCode== 39)
		{
			ctx.clearRect(0,0,hole.width, hole.height);
			x = x + 10;
			ctx.fillRect(x, y, 50, 50);
		}
	}*/
	
	//waz i jego ruch
	var snake = document.querySelector("#snake");
	
	var info = document.querySelector("#info");
	
	var top = 200;
	var left= 500;
	var direction = "left";
	snake.style.top= top;
	snake.style.left = left;
	//Dopiero utworzenie globalnych zmiennych pomoglo !!!
	var interTop;
	var interDown;
	var interLeft;
	var interRight;
	var counter = 0;
	
	var dotTop = 200;
	var dotLeft = 500;
	
	var speed = 500;
	
	var pole = document.querySelector("#pole");

	function go(e)
	{
		//up
		if(e.keyCode == 38)
		{
			
			//clearInterval dla kazdego konkretnego intera CHUJA daje
			clearInterval(interTop);
			clearInterval(interDown);
			clearInterval(interLeft);
			clearInterval(interRight);
			
			interTop= setInterval(function()
			{
				eat();
				top -= 10;
				snake.style.top = top + "px";
				// if sprawdzajacy czy waz nie udezył w sciane gorna
				if(top<=0)
				{
					clearInterval(interTop);
					info.innerHTML = "Koniec gry";
				}
			}, speed)
			
		}
			
		else if(e.keyCode == 37)
		{
			clearInterval(interTop);
			clearInterval(interDown);
			clearInterval(interLeft);
			clearInterval(interRight);
			//left
			interLeft = setInterval(function()
			{
				eat();
				left -= 10;
				snake.style.left = left + "px";
					if(left<=0)
				{
					clearInterval(interLeft);
					info.innerHTML = "Koniec gry";
				}
			}, speed)
		}
		
		else if(e.keyCode == 39)
		{
			clearInterval(interTop);
			clearInterval(interDown);
			clearInterval(interLeft);
			clearInterval(interRight);
			//right
			interRight = setInterval(function()
			{
				eat();
				left += 10;
				snake.style.left = left + "px";
					if(left>=950)
				{
					clearInterval(interRight);
					info.innerHTML = "Koniec gry";
				}
			}, speed)
		}
		
		else if(e.keyCode == 40)
		{
			clearInterval(interTop);
			clearInterval(interDown);
			clearInterval(interLeft);
			clearInterval(interRight);
			//down
			interDown = setInterval(function()
			{
				eat();
				top += 10;
				snake.style.top = top + "px";
					if(top>=550)
				{
					clearInterval(interDown);
					info.innerHTML = "Koniec gry";
				}
			}, speed)
		}
	}
	
	
	
	window.addEventListener('keyup', go);
	
	
	//pokarm i jego zbieranie
	var dot = document.querySelector('.dot');
	
	function eat()
	{
		//nie wiadomo kiego chuja nie dzialało
		if((snake.offsetLeft == dot.offsetLeft) && (snake.offsetTop == dot.offsetTop))
		{
			counter++;
			if(counter >= 1 && counter < 8) 
			{
				speed -= 50;
				//poprawic doliczanie predkosci uplywu czasu w interwale zeby nie przekraczal 0
			}
			info.innerHTML = "Wynik: " + counter;
			dotLeft = Math.round(Math.random()*95)*10;
			// za pierwszym razem smiga ale pozniej wybiera liczbe ktora nie moze byc rowna offsetowi weza bo jego sie zwieksza tylko co 10, wiec to musi byc wielokrotność 10 - wystarczyło pomnozyc przez 10;
			dotTop = Math.round(Math.random()*55)*10;
			dot.style.left = dotLeft + "px";
			dot.style.top = dotTop + "px";
		}
		
		
	}
	
	
}	

// nie wiem czemu nie mam dostepu w funkcji go do takich properties jak pole.width mimo ze pole jest zmienna globalna 

