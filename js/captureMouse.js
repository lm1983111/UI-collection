utils.captrueMouse = function(element){
		    	var mouse = {
		    		x:0,
		    		y:0
		    	};
		    	element.addEventListener("mousemove",function(event){
		    		var x,y;
		    		if(event.pageX || event.pageY){
		    			x = event.pageX;
		    			y = event.pageY;
		    		}else{
		    			x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
		    			y = event.clientY + document.body.scrollLeft + document.documentElement.scrollLeft;
		    		}
		    		x -= element.OffsetLeft;
		    		y -= element.OffsetTop;
		    		
		    		mouse.x = x;
		    		mouse.y = y;
		    	},false);
		    	return mouse;
		    }