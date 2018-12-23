import React, { Component } from "react"
import Select from "react-select"
import makeAnimated from "react-select/lib/animated"

import { FormContainer, Wrapper } from "../../Generic-helpers/layoutpack"
import { Button } from "../../Generic-helpers/BlockBox"
import PrograssBar from "./PrograssBar"
import { Form, Input, Label, Title, TextArea } from "./StyledElm"

export class ArticleForm extends Component {
  state = {
    data: {
      categories: [
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" },
      ],
    },
  }
  render() {
    const { categories } = this.state.data

    return (
      <Wrapper>
        <FormContainer>
          <Title> Create Article </Title>
          <Form onSubmit={this.handleSubmit}>
            <Label>
              Title
              <Input placeholder="Write Article Title" type="text" name="title" padding={true} />
            </Label>
            <Label>
              Categories
              <Select
                value={[categories[0], categories[1]]}
                className="article-form-select"
                closeMenuOnSelect={false}
                components={makeAnimated()}
                isMulti
                options={categories}
                name="categories"
              />
            </Label>
            <Label>
              article
              <TextArea placeholder="Type Article Topic here..." name="article" />
            </Label>
            <Label>
              Image
              <div className="img-upload-wrapper">
                <Input
                  placeholder="Write Article Topic"
                  type="file"
                  multiple={false}
                  accept=".png, .jpg, .jpeg"
                  padding={false}
                  name="image"
                />
                <div className="img-upload-wrapper-background">Upload Image</div>
              </div>
              <PrograssBar fill={"100"} />
            </Label>
            <Button type="submit">Post Article</Button>
          </Form>
        </FormContainer>
      </Wrapper>
    )
  }
}
