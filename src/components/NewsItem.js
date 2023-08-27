import React from 'react'
import loading from "./news.png"

export const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source,mode} = props;
    return (
      <>
        <div className="card" >
          <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={source.length<12?{left:"94%",zIndex:"1"}:{left:"90%",zIndex:"1"}}>{!source?"":source}
          <span className="visually-hidden">unread messages</span></span>
            {!imageUrl ? <img style={{ height: "19em" }} src={loading} className="card-img-top" alt="..." /> : <img style={{ height: "15em" }} src={imageUrl} className="card-img-top" alt="..." />}
            <div className="card-body" style={{color: props.mode==="dark"?'white':'black',backgroundColor: props.mode==="dark"?'#21202e':'white'}}>
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text" style={{textDecoration:'underline'}}><small >By {!author ? "Unknown" : author} on {date}</small></p>
              <a href={newsUrl} target='_blank' className="btn btn-success">Read more..</a>
            </div>
        </div>
      </>
    )
}


export default NewsItem