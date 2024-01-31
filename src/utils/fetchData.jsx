export const exerciseOptions= {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3ea3aa8a7dmshb44306483db54ecp1b7bf2jsna774f2970df1',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions = {
    headers: {
      'X-RapidAPI-Key': '3ea3aa8a7dmshb44306483db54ecp1b7bf2jsna774f2970df1',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData=async (url,options)=>{
    const response=await fetch(url,options)
    const data=await response.json()
    return data
}