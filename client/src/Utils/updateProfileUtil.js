import axios from "axios"
import swal from "sweetalert"

const updateProfileUtil = (history, answerState, sectionType, profileID) => {
  axios
    .post(`/update-profile/${sectionType}/${profileID}`, answerState)
    .then(result => {
      console.log("RESULT", result)
      swal("Done!", "Thanks for updating your profile!", "success").then(() => history.push("/"))
    })
    .catch(err =>
      swal({
        icon: "error",
        title: "An error occurred, sorry",
      })
    )
}

export default updateProfileUtil
