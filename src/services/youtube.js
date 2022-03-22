export default class Youtube {
  constructor(keys) {
    this.key = keys;
    this.BASE_URL = "https://youtube.googleapis.com/youtube/v3";
  }

  async getPopularList() {
    const request = await fetch(
      `${this.BASE_URL}/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&key=${process.env.REACT_APP_API_KEY}`
    );
    const result = await request.json();
    return result;
  }

  async getSearchList(searchTitle) {
    const request = await fetch(
      `${this.BASE_URL}/search?part=snippet&maxResults=25&q=${searchTitle}e&type=videos&key=${process.env.REACT_APP_API_KEY}`
    );
    const result = await request.json();
    return result;
  }
}
