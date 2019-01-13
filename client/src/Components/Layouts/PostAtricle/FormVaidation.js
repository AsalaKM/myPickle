import validator from "validator"

class FormValidation {
  constructor(validations) {
    this.validations = validations
  }
  validate(state) {
    let validationObj = this.valid()
    this.validations.forEach(rule => {
      if (!validationObj[rule.field].isInvalid) {
        const field_value = state[rule.field]
        const args = rule.args || []
        const validation_method =
          typeof rule.method === "string" ? validator[rule.method] : rule.method
        if (validation_method(field_value, ...args, state) !== rule.validWhen) {
          validationObj[rule.field] = { isInvalid: true, message: rule.message }
          validationObj.isValid = false
        }
      }
    })
    return validationObj
  }
  valid() {
    const validation = {}
    this.validations.map(rule => (validation[rule.field] = { isInvalid: false, message: "" }))
    return { isValid: true, ...validation }
  }
}

export default FormValidation
