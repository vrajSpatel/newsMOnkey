import React, { Component } from 'react'

export class Newsitem extends Component {
    
    render() {
        let {title,description,imgurl,url} = this.props;
        return (
            <div className='my-5'>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imgurl} 
                    className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <a href={url} target='_blank' className="btn btn-sm btn-info">ReadMore</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
