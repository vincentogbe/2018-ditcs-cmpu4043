fetch('https://jsonplaceholder.typicode.com/posts')
.then(Promise => Promise.json())
.then((data) => {

    

    data.map((posts) => {


        function WordCount(str) {
            return str
              .split(' ')
              .filter(function(n) { return n != ''})
              .length;
         }
         
         console.log(WordCount("hello   world")); // returns 2


    });

});