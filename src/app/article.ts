interface ArticleJSON {
  title: string,
  url: string,
  urlToImage: string,
  votes: number,
  publishedAt: string,
  description: string,
  author: string
}

export class Article {
  public publishedAt: Date;
  public url: string;

  static fromJSON(json: ArticleJSON): Article {
    let article = Object.create(Article.prototype);

    return Object.assign(article, json, {
      imageUrl: json.urlToImage ? json.urlToImage: 'https://placehold.it/400x300',
      votes: json.votes ? json.votes: 0,
      publishedAt: json.publishedAt ? new Date(json.publishedAt) : new Date()
    });
  }

  constructor(public title: string,
              public description: string,
              public imageUrl: string,
              public votes?: number) {
    this.votes = votes || 0;
    this.publishedAt = new Date();
  }

  voteUp(): void {
    this.votes = this.votes + 1;
  }

  voteDown(): void {
    this.votes = this.votes - 1;
  }
}
