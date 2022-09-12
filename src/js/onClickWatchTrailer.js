const movieTrailer = require('movie-trailer');
import * as basicLightbox from 'basiclightbox'

import NewApiServise from './api-servise';

const newsApiServise = new NewApiServise();

const KEY = 'api_key=6fe1e9d5fbaeb01db6cc1b91ad7172fe';

export default class watchTrailer {
  constructor(trailerId, trailerTitle) {
    this.trailerId = trailerId;
    this.trailerTitle = trailerTitle;
  }

  async fetchTrailer() {
    const queryId = await movieTrailer(this.trailerTitle, {
      id: true,
      api_key: KEY,
      trailerId: this.trailerId,
    });
    
    if (queryId !== null) {
      return queryId;
    }
  }

  player(queryId) {
    if (queryId !== undefined) {
      return `<iframe class="modal__trailer-video" type="text/html" width="640" height="360" src="https://www.youtube.com/embed/${queryId}?autoplay=1" frameborder="0" allow="autoplay; fullscreen"></iframe>`;
    } else {
      // notifications.showNotFound();
      const trailerBtn = document.querySelector('.js-trailer-btn');
      console.log(trailerBtn);
      trailerBtn.textContent = 'Sorry, trailer is not found';
    }
  }
    

  lightboxForTrailer(markup) {
    return basicLightbox.create(markup).show();
  }

  showTrailer() {
    this.fetchTrailer().then(this.player).then(this.lightboxForTrailer);
  }

}