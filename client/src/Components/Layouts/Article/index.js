import React, { Component } from "react"

class BlogPost extends Component {
  state = {
    article: null,
    loaded: false,
  }

  render() {
    return (
      <React.Fragment>
        <h1>Title to go here</h1>
        <div>IMAGE TO GO HERE</div>
        <div>
          <p>Name</p>
          <p>Type of support</p>
          <p>Link to view profile</p>
        </div>
        <div>
          <p>Article text to go here</p>
        </div>
        <div>FOOTER TO SHOW BLOG POSTS OR PROFILES</div>
      </React.Fragment>
    )
  }
}
export default BlogPost
