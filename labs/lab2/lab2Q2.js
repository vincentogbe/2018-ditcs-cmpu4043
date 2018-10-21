fetch('https://jsonplaceholder.typicode.com/users')
  .then(Promise => Promise.json())
  .then((data) => {
  
    heli=data.map((user) => {
      
      //question one 
      return [user.name, user.address.city,user.address.zipcode];

      });

      console.log(heli);

      //question two 

      heli1=data.filter((user) => {

       return user.address.zipcode[0] == 2 || user.address.zipcode[0] == 5;
       
        });
  
     console.log(heli1);





});

  