import React from 'react'

const moviesearch = () => {



    useEffect(()=> {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODgxOWVmODg0MjcwNWExMTc2ZWQ4YjgyMjhiOWMxMCIsInN1YiI6IjY1MTZkNTQzOTNiZDY5MDEzOGZjZjI5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-LN2BUWfNVPDINDYvpAgCAPaqO04X701wcRzfBsMIgc'
          }
        };
        const url = `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`
        fetch(url, options)
          .then(response => response.json())
          .then(response => console.log(response))
          .catch(err => console.error(err));  
      })
    
  return (
    <div>moviesearch</div>
  )
}

export default moviesearch