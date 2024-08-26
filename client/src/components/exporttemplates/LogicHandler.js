import axios from "axios";
import toast from "react-hot-toast";

export async function LogicHandler() {
  try {
    const LOGINDETAILS = JSON.parse(localStorage.getItem("LOGINDETAILS"));

    if (["BASIC", "TRIAL", "STANDARD", "PREMIUM"].includes(LOGINDETAILS.plan)) {
      return true;
    } else {
      const isPaid = await axios.get(
        "http://localhost:8000/api/oneTimePayment/oneTimePayment",
        {
          params: {
            user: LOGINDETAILS._id,
          },
        }
      );
      if (isPaid?.data?.oneTimePayment?.isPaid) {
        await axios.delete(
          "http://localhost:8000/api/oneTimePayment/oneTimePayment",
          {
            params: {
              user: LOGINDETAILS._id,
            },
          }
        );
        return true;
      }
    }
  } catch (error) {
    return false;
  }
}

// if (
//     !["BASIC", "TRIAL", "STANDARD", "PREMIUM"].includes(LOGINDETAILS.plan)
//   ) {

//   } else {
//     return false;
//   }
