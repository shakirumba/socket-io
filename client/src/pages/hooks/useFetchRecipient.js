import { useEffect, useState } from "react";
import { baseUrl, getRequest } from "../utils/services";

export const useFetchRecipient = (chat, user) => {
  const [recipientUser, setRecipientUser] = useState(null);
  const [error, setError] = useState(null);

  const recipientId = chat?.members?.find((id) => id !== user?._id);

  useEffect(() => {
    const getUser = async () => {
      if (!recipientId) return; // Exit early if recipientId is not defined

      try {
        const response = await getRequest(
          `${baseUrl}/users/find/${recipientId}`
        );

        if (response.error) {
          setError(response.error); // Set error state if request fails
        } else {
          setRecipientUser(response); // Set recipientUser state with response data
        }
      } catch (error) {
        setError(error.message); // Handle request error
      }
    };

    getUser(); // Call the getUser function to initiate the request
  }, [recipientId]); // Dependency array with recipientId

  return { recipientUser, error };
};
