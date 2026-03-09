class TranslationService {
  constructor(api) {
    this.api = api;
  }

  free(text) {
    return this.api.fetch(text);
  }
}

const api = {
  data: {
    hello: "xin chào",
  },

  fetch(text) {
    return new Promise((resolve, reject) => {
      if (this.data[text]) {
        resolve(this.data[text]);
      } else {
        reject(new Error("Not yet translated"));
      }
    });
  },
};

const service = new TranslationService(api);

console.log(service.free("hello"));
