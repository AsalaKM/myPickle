import axios from "axios"
import swal from "sweetalert"

const updateProfileUtil = (history, answerState, sectionType) => {
  axios
    .post(`${process.env.HOST || ""}/update-profile/${sectionType}`, answerState)
    .then(result => {
      swal("Done!", "Thanks for updating your profile!", "success").then(() =>
        history.push("/edit-profile")
      )
    })
    .catch(err =>
      swal({
        icon: "error",
        title: "An error occurred, sorry",
      })
    )
}

export default updateProfileUtil
