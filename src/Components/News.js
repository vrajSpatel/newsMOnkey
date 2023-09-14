 import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
// import { useState } from 'react';

export class News extends Component {
  
  constructor() {
    super();
    console.log("hello I am a constructor from news")
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async componentDidMount(){
    let url =`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f8b7958abd9640388f79337f949508c7&page=1&pageSize=${this.props.pagesize}`;
    this.setState({loading : true})
    let data = await fetch(url);
    let ParsedData = await data.json();
    // console.log(ParsedData)
    this.setState({articles: ParsedData.articles,
      loading : false,
      totalArticles : ParsedData.totalResults});
  }

  handlelastclick = async() => {

    let url =`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f8b7958abd9640388f79337f949508c7&page=${this.state.page -1}&pageSize=${this.props.pagesize}`;
    this.setState({loading : true})

    let data = await fetch(url);
    let ParsedData = await data.json();
    // console.log(ParsedData)
    this.setState({
      page : this.state.page - 1,
      articles: ParsedData.articles,
      loading:false
    })
  }

  handlenextclick = async() => {

    if(this.state.page + 1 > Math.ceil(this.state.totalArticles/this.props.pagesize)){

    }
    else{
    let url =`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f8b7958abd9640388f79337f949508c7&page=${this.state.page +1}&pageSize=${this.props.pagesize}`;
    this.setState({loading : true})
    let data = await fetch(url);
    let ParsedData = await data.json();
    // console.log(ParsedData)
    this.setState({
      page : this.state.page + 1,
      articles: ParsedData.articles,
      loading : false
    })
  }
  }
  render() {
    let {pagesize} = this.props;    // props
    return (
      <div className='container my-3'>
        <h1 className="text-center">Top Headlines</h1>
        <div className="row">

        {/* // if loading is true then spinner hit */}
        <h1 className="text-center">{this.state.loading && <Spinner/>} </h1>

          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <Newsitem 
              title={element.title?element.title:""} description={element.description?element.description:""}
                imgurl={element.urlToImage?element.urlToImage:"https://newsreach.s3.ap-south-1.amazonaws.com/newsreach.in/2020/10/Banner-4.jpg"}
                url={element.url}
              />
            </div>
          })}
        </div>

        <div className="container d-flex justify-content-between ">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlelastclick}> &larr; Lastpage</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles/this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.handlenextclick}> Nextpage &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
