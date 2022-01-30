// No need to change the following code
// The area object defines the div in which the balls will be created
const area = {
    element: document.getElementById('area'),
    width: 600,
    height: 400,
  };
  //key-value, so element/width/height are the keys. 
  
  // No need to change the following code
  // The initialize function creates the area div on the Html page
  function initialize() {
    area.element.style.width = area.width + 'px';
    area.element.style.height = area.height + 'px';
    document.body.appendChild(area.element);
  }
  
  // No need to change the following code
  // The moveTo function moves a given ball to a set x and y coordinates on the page
  function moveTo(ball, x, y) {
    ball.element.style.left = x + 'px';
    ball.element.style.top = y + 'px';
  }
  
  // No need to change the following code
  // The changeDirectionIfNecessary function reverses the ball direction when it hits the area borders
  function changeDirectionIfNecessary(ball, x, y) {
    if (x < 0 || x > area.width - ball.width) {
      ball.dx = -ball.dx;
    }
    if (y < 0 || y > area.height - ball.height) {
      ball.dy = -ball.dy;
    }
  }
  
  // TODO: implement the create function
  function create(color, dx, dy) {
    let newBall = Object.create(this);
    //this is a way to create a new object using 'this'. Could also use "const newBall = {};"
    //think about new ball as an empty object.
    newBall.dx = dx;
    //after this line runs it will look like: 
    // newball = {
    //    dx: dx;
    //}
    newBall.dy = dy;
    //after this line runs, the object will look like: 
    // newBall = {
    //    dy : dy;
    //   dx : dx;
    //}
    newBall.width = 50;
    newBall.height = 50;
  


    //todo: set the newBall.element property and initialize it to an HTML element div.
    //then we set the backgroundColor, width and height style propoerties for newBall.

    newBall.element = document.createElement("div");
        newBall.element.style.backgroundColor = color;
        newBall.element.style.width = newBall.width + 'px';
        newBall.element.style.height = newBall.height + 'px';
    // This below line set the CSS class for newBall.element.
    newBall.element.className += ' ball';

    //parseInt() -> converts a string to an integer. Since above, we will see that the newBall.element.style.width/height will come back as a string.
   newBall.width = parseInt(newBall.element.style.width);
   newBall.height = parseInt(newBall.element.style.height);

   // use appendChild() function to add newBall.element to area. (parent first, and child second).
   area.element.appendChild(newBall.element);

   //return newBall
return newBall;
    
  }
  
  // TODO: implement the update function
  function update(ball, x, y) {
        moveTo(ball, (x + ball.dx), (y + ball.dy));
        setTimeout(function() {
            //since setTimeout needs to take in more than one function, we should create an empty function. 
      changeDirectionIfNecessary(ball, (x + ball.dx), (y + ball.dy));
      update(ball, (x + ball.dx), (y + ball.dy));
    }, 1000/60);
  }
  
  // Uncomment these lines for step 1 of the activity
  // This is expected to create 3 balls within the area div
  initialize();
  const ball1 = create('blue', 4, 3);
  const ball2 = create('red', 1, 5);
  const ball3 = create('green', 2, 2);
  moveTo(ball1, 1, 1);
  moveTo(ball2, 10, 10);
  moveTo(ball3, 20, 20);
  
  // Uncomment these lines for step 2 of the activity
  // This is expected to make the 3 balls move around the area div
  update(ball1, 70, 0);
  update(ball2, 20, 200);
  update(ball3, 300, 330);
  
  // Do not change code past this point
 