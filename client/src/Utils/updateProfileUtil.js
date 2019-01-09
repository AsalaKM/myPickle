import axios from "axios"
import swal from "sweetalert"

const updateProfileUtil = (history, answerState, sectionType) => {
  axios
    .post(`/update-profile/${sectionType}`, answerState)
    .then(result => {
      console.log("RESULT", result)
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
