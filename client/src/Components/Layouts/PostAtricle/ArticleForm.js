import React from "react"
import Select from "react-select"
import makeAnimated from "react-select/lib/animated"

import { FormContainer, Wrapper } from "../../Generic-helpers/layoutpack"
import { Button } from "../../Generic-helpers/BlockBox"
import PrograssBar from "./PrograssBar"
import { Form, Input, Label, Title, TextArea, Text } from "./StyledElm"

const ArticleForm = props => {
  const { title, image, text, categoriesSelected } = props.data.article
  const { categoryOptions, uploading, errors } = props.data
  return (
    <Wrapper>
      <FormContainer>
        <Title> Create Article </Title>
        <Form onSubmit={props.handleSubmit}>
          <Label>
            Title
            <Input
              placeholder="Write Article Title"
              type="text"
              border={errors && "1px solid red"}
              name="title"
              padding={true}
              value={title}
              onChange={props.handleChange}
            />
          </Label>
          <Label>
            Categories
            <Select
              className="article-form-select"
              closeMenuOnSelect={false}
              components={makeAnimated()}
              isMulti
              options={categoryOptions}
              name="categories"
              value={categoriesSelected}
              onChange={props.handleChange}
            />
          </Label>
          <Label>
            article
            <TextArea
              placeholder="Type Article Topic here..."
              name="text"
              border={errors && "1px solid red"}
              onChange={props.handleChange}
              value={text}
            />
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
                border={errors && "1px solid red"}
                onChange={props.imageUpload}
              />
              <div className="img-upload-wrapper-background">Upload Image</div>
            </div>
            <PrograssBar fill={uploading ? "100" : "0"} />
          </Label>
          <Button type="submit">Post Article</Button>
        </Form>
      </FormContainer>
    </Wrapper>
  )
}

export default ArticleForm
