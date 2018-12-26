import React, { Component } from "react"

import { SupportContainer, ProfilePhoto } from "./FindSupport.style"

export default class Profiles extends Component {
  render() {
    return (
      <div>
        <h2>Support Providers</h2>
        <SupportContainer>
          <h3>Johanna Doeski</h3>
          <h3>Hypnotherapist with youth and family</h3>
          <h3>Emotional</h3>
          <ProfilePhoto />
        </SupportContainer>
      </div>
    )
  }
}
