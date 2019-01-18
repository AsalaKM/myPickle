import React, { Component } from "react"
import axios from "axios"

// load styled components
import {
  Article,
  Header,
  Title,
  Content,
  Image,
  ProfilePhoto,
  ProfileWrapper,
  ProfileLink,
} from "./Article.style"

class BlogPost extends Component {
  state = {
    article: null,
    author: null,
    profileImage: null,
    loaded: false,
  }

  componentDidMount() {
    const pathName = window.location.pathname
    const articleId = pathName.split("/")[2]

    axios
      .get(`${process.env.HOST || ""}/get-blog-post/${articleId}`)
      .then(articleDetails =>
        this.setState({
          article: articleDetails.data.article,
          author: articleDetails.data.author,
          profileImage: articleDetails.data.profileImage,
          loaded: true,
        })
      )
      .catch(err => console.log(err))
  }

  checkProfilePicture = () =>
    this.state.profileImage ? (
      <ProfilePhoto src={`/static/${this.state.profileImage}`} alt="profile" />
    ) : (
      <ProfilePhoto src={require("../../../assets/images/logo_bw.jpg")} alt="profile" />
    )

  checkArticlePicture = () =>
    this.state.article.image ? (
      <Image src={`/static/${this.state.article.image}`} alt="profile" />
    ) : (
      <Image src={require("../../../assets/images/logo_bw.jpg")} alt="profile" />
    )

  render() {
    // const { title } = this.props
    const { article, author, loaded } = this.state

    if (!loaded) {
      return <div>loading...</div>
    }

    return (
      <React.Fragment>
        <Article>
          <Header>
            <Title>{article.title}</Title>
            {this.checkArticlePicture()}
          </Header>

          <ProfileWrapper>
            <ProfileLink to={`/profile/${article.profile}`}>
              <div className="profile">
                {this.checkProfilePicture()}
                <p>{author}</p>
              </div>
              <p className="view-profile">View profile</p>
              <img src={require("../../../assets/images/arrow.svg")} alt="arrow" />
            </ProfileLink>
          </ProfileWrapper>
          <Content>
            {article.content.split("\n").map((i, key) => {
              return <p key={key}>{i}</p>
            })}
          </Content>
        </Article>
      </React.Fragment>
    )
  }
}
export default BlogPost
