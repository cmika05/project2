const apiKey = "tF1qBVdxVy6sWe32xF29TcrkmgNXLDbD" ;

window.addEventListener('load', (event) => {
  console.log('page is fully loaded');

 document.getElementById('search').addEventListener('click',() =>{
   console.log('the seach button was clicked');
   let searchTerm = document.getElementById('search-term').value;
    console.log('the search term is', searchTerm);

 fetch(`https://api.giphy.com/v1/gifs/search?api_key=tF1qBVdxVy6sWe32xF29TcrkmgNXLDbD&q=cats`)
    .then((res) => {
      return res.json()
    }).then((json) => {
      console.log('the orginal json is',json);
      console.log('the data key inside the orginal json',json.data);
       console.log('the first item in the results array is', json.data[0]);

       console.log('the images object inside the first item in the results array is', json.data[0].images);

       console.log('original object for the images object inside the first item in the results array is', json.data[0].images.original); 

       console.log('image for the original object for the images object inside the first item in the results array is', json.data[0].images.original.url);

       
      // let myHtml = "";

      for(let resultItem of json.data){
        let imageUrl = resultItem.images.original.url
        // console.log(imageUrl);
        // myHtml = myHtml + `<img src=${imageUrl} />`;
        document.getElementById('results').innerHTML = document.getElementById('results').innerHTML + `<img src=${imageUrl} />`;
      }

      // console.log(myHtml)

      // document.getElementById('results').innerHTML = myHtml;



    })

 })

});
    


// // http://api.giphy.com/v1/gifs/search?api_key=tF1qBVdxVy6sWe32xF29TcrkmgNXLDbD&q=trump