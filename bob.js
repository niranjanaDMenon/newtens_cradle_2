class bob
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:0,
			density:0.4
			
			}
		this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperp=this.body.position;
			ellipseMode(RADIUS)
			
			fill("purple")
			
			ellipse(paperp.x,paperp.y,this.r/2);
		
			
	}

}

