class Pickup {

    constructor()
     {

      this.title = createElement('h1');
      this.location = createInput("Enter Your Location");
      this.name = createInput("Name");
      this.email = createInput("Email");
      this.mobile = createInput("Mobile");
      this.address = createInput("Address");

      this.submit = createButton('SUBMIT');
      this.greeting = createElement('h2');
     //this.img=loadImage("images/call.jpg");
     
    }
    hide(){
        this.name.hide();
        this.email.hide();
        this.mobile.hide();
        this.location.hide();
        this.address.hide();
        this.greeting.hide();
        this.submit.hide();
    }
  
    display()
    {
     // image(this.img,1200,600);
     // this.title.html("SELECT SELLER OF YOUR CHOICE AND REQUEST PICKUP ");
     // this.title.position(displayWidth/2 - 50, displayHeight/2 - 50);


      this.location.position(displayWidth/2 - 90 , displayHeight/2 - 200);
      this.name.position(displayWidth/2 - 90 , displayHeight/2 - 170);
      this.email.position(displayWidth/2 - 90 , displayHeight/2 - 140);
      this.mobile.position(displayWidth/2 - 90 , displayHeight/2 - 110);   
      this.address.position(displayWidth/2 - 90 , displayHeight/2 - 70);
      this.submit.position(displayWidth/2 - 50, displayHeight/2-10);


      //this.reset.position(displayWidth-100,20);
  
      this.submit.mousePressed(()=>
      {
        this.name.hide();
        this.email.hide();
        this.mobile.hide();
        this.location.hide();
        this.address.hide();
        this.greeting.hide();
        this.submit.hide();

        uname = this.name.value();
        uemail = this.email.value();
        umobile = this.mobile.value();
        ulocation = this.location.value();
        uaddress = this.address.value();
      

        this.greeting.html("Hello " + uname)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
       

            
      });
  
    }
  }
  