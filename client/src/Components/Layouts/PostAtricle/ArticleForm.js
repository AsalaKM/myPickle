import React from "react"
import Select from "react-select"
import makeAnimated from "react-select/lib/animated"

import { FormContainer, Wrapper } from "../../Generic-helpers/layoutpack"
import PrograssBar from "./PrograssBar"
import { Form, Input, Label, Title, TextArea, Button, AlertMsg } from "./StyledElm"

const ArticleForm = props => {
  const { title, text, categoriesSelected, image } = props.data.article
  const { categoryOptions, uploading } = props.data
  const { validation } = props

  return (
    <Wrapper>
      <FormContainer>
        <Title> Create Article </Title>

        <Form onSubmit={props.handleSubmit}>
          <div className="form-control">
            <Label>
              Title
              <Input
                placeholder="Write Article Title"
                type="text"
                border={validation.title.isInvalid && "1px solid red"}
                name="title"
                padding={true}
                value={title}
                onChange={props.handleChange}
              />
            </Label>
            <AlertMsg active={validation.title.isInvalid}>{validation.title.message}</AlertMsg>
          </div>
          <div className="form-control">
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
            <AlertMsg active={validation.categoriesSelected.isInvalid}>
              {validation.categoriesSelected.message}
            </AlertMsg>
          </div>
          <div className="form-control">
            <Label>
              article
              <TextArea
                placeholder="Type Article Topic here..."
                name="text"
                border={validation.text.isInvalid && "red"}
                onChange={props.handleChange}
                value={text}
              />
            </Label>
            <AlertMsg active={validation.text.isInvalid}>{validation.text.message}</AlertMsg>
          </div>
          <div className="form-control">
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
                  border={validation.image.isInvalid && "1px solid red"}
                  onChange={props.imageUpload}
                />
                <div className="img-upload-wrapper-background">Upload Image</div>
              </div>
              <PrograssBar fill={uploading ? "100" : "0"} inActive={!image} />
            </Label>
            <AlertMsg active={validation.image.isInvalid}>{validation.image.message}</AlertMsg>
          </div>
          <Button type="submit">Post Article</Button>
        </Form>
      </FormContainer>
    </Wrapper>
  )
}

export default ArticleForm
