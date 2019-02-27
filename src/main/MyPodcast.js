import React, { Component } from 'react'

class MyPodcast extends Component{
  constructor(props){
    super(props)
    this.state = {}
  }
  render(){
    return (
      <React.Fragment>
        <div className="default-flex">
          <h1>
            My Podcast
          </h1>
          <button className="default-button" onClick={_=>this.setState({current:'data'})}>
            View podcast data
          </button>
          <button className="default-button" onClick={_=>this.setState({current:'modify'})}>
            Modify podcast
          </button>
        </div>
        <div style={{display:this.state.current==="data"?'block':'none'}} className="simple-form white-text">
          <h2>
            Data Download
          </h2>
          <div className="default-flex">
            <button className="default-button">Every download with metadata (CSV)</button>
            <button className="default-button">Every listen with metadata (CSV)</button>
          </div>
          <h3>
            Podcast Statistics
          </h3>
          Number of Episodes: 13 <br/>
          Number of times listened: 99<br/>
          Number of times purchased: 70<br/>
          Number of times shared each chapter: 2<br/>
          Total downloads: 90<br/>
        </div>
        <div style={{display:this.state.current==='modify'?'block':'none'}} className="simple-form">
            <h2 className="adjusted-title">Modify Podcast</h2>
            <label>name:</label>
            <input />
            <br/>
            <label>Category:</label>
            <select>
              <option value="">Category #1</option>
              <option value="">Category #2</option>
              <option value="">Category #3</option>
              <option value="">Category #4</option>
              <option value="">Category #5</option>
              <option value="">Category #6</option>
            </select>
            <label>Description:</label>
            <textarea />
            <br/>
            <label>Image:</label>
            <div className="white-container">
              <div className="upload-zone">
                <div></div>
                <br/>
                Click here to add picture
              </div>
            </div>
            <label>Tags:</label>
            <input placeholder="cars,trucks,bikes,boats"/>
            <br/>
            <label>Other authors:</label>
            <input placeholder="Address1,Address2,Address3,Address4"/>
            <br/>
            <br/>
            <button>Modify Podcast</button>
        </div>
      </React.Fragment>
    )
  }
}

export default MyPodcast