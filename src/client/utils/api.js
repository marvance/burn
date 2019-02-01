import axios from 'axios';

module.exports = {
  fetchCatFacts: function(){
    var encodedURI = window.encodeURI('https://cat-fact.herokuapp.com/facts/random?animal=cat&amount=1')
  
    return axios.get(encodedURI)
      .then(function(response){
        return response.data;
      })
  }
}