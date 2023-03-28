import React, { Component } from 'react';
import Boxes from './Menu/Boxes';

export default class HotelManagement extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/everything?q=animal&from=2023-02-28&sortBy=publishedAt&apiKey=1ed3bcb965ee4c41b111430e84b5b370&language=en&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parasData = await data.json();
    this.setState({
      articles: parasData.articles,
      totalArticles: parasData.totalResults,
    });
  }

  handlePreviousClick = async () => {
    let url = `https://newsapi.org/v2/everything?q=animal&from=2023-02-28&sortBy=publishedAt&apiKey=1ed3bcb965ee4c41b111430e84b5b370&language=en&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parasData = await data.json();
    this.setState({ articles: parasData.articles });
    this.setState({
      page: this.state.page - 1,
    });
  };

  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    } else {
      let url = `https://newsapi.org/v2/everything?q=animal&from=2023-02-28&sortBy=publishedAt&apiKey=1ed3bcb965ee4c41b111430e84b5b370&language=en&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parasData = await data.json();
      this.setState({ articles: parasData.articles });
      this.setState({
        page: this.state.page + 1,
      });
    }
  };

  render() {
    return (
      <div className="container text-center p-3 ">
        <div className="container text-center d-flex justify-content-center ">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark mx-3 btn-sm"
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 20)
            }
            type="button"
            className="btn btn-dark mx-3 btn-sm"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
        <div className="container row  row-cols-auto m-4 ">
          {this.state.articles.map((element) => {
            return (
              <div className="col h-25" key={element.url}>
                <Boxes
                  title={element.title ? element.title.slice(0, 50) : " "}
                  description={
                    element.description ? element.description.slice(0, 95) : " "
                  }
                  imageUrl={element.urlToImage ? element.urlToImage : " "}
                  newsUrl={element.url ? element.url : " "}
                />
              </div>
            );
          })}
        </div>
        <div className="container text-center d-flex justify-content-center ">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark mx-3 btn-sm"
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 20)
            }
            type="button"
            className="btn btn-dark mx-3 btn-sm"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
