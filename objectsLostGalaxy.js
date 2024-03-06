//Create a mouse object that has four properties and three methods

let mouseObject = {}
    mouseObject.brand = "mac"
    mouseObject.color = "silver"
    mouseObject.model = "Magic Trackpad"
    mouseObject.scrollPad = true

mouseObject.leftClick = function(){
    console.log("LEFT CLICK!")
}
mouseObject.rightClick = function(){
    console.log("RIGHTTTT CLICK!")
}
mouseObject.scroll = function(){
    console.log("JUMP JUMP!")
}

let mouseObject = {}
    mouseObject.brand = "logitech"
    mouseObject.color = "black"
    mouseObject.model = "Modelz"
    mouseObject.scrollPad = false

mouseObject.leftClick = function(){
    console.log("LEFT CLICK!")
}
mouseObject.rightClick = function(){
    console.log("RIGHTTTT CLICK!")
}
mouseObject.scroll = function(){
    console.log("JUMP JUMP!")
}

let mouseObject = {}
    mouseObject.brand = "windows"
    mouseObject.color = "blue"
    mouseObject.model = "765294"
    mouseObject.scrollPad = false

mouseObject.leftClick = function(){
    console.log("LEFT CLICK!")
}
mouseObject.rightClick = function(){
    console.log("RIGHTTTT CLICK!")
}
mouseObject.scroll = function(){
    console.log("JUMP JUMP!")
}

//creating a constructor would allow us to emilinate and condense these lines of code into one
//It would allow us to pass in the values of each mouse into one as opposed to copy & pasting each mouse needed

//SOLUTION: 

  function ComputerMouse(mouseBrand, mouseColor, mouseModel, mouseScroll){
    this.brand = mouseBrand
    this.color = mouseColor
    this.model = mouseModel
    this.scroll = mouseScroll
    this.sound = function(){
        alert ('CLICK CLICK CLICK!')
    }
  };

let MacMouse = new ComputerMouse('Mac', 'silver', 'MacOSx', 'Track Pad')
let logitechMouse = new ComputerMouse('Logitech', 'Black', "ModelZ", "Up, Down")

  
