import { createStandaloneToast } from "@chakra-ui/react";
import axios, { AxiosError } from "axios";

const { toast } = createStandaloneToast();

/**
 * Handles displaying an error message to the user when making an axios request.
 * It will handle normal and axios errors appropriately by displaying a toast message
 * and logging the error to the console.
 * @param error the error to handle
 */
const handleAxiosError = (error: Error | AxiosError<any>) => {
  if (axios.isAxiosError(error)) {
    console.error(error.response);
    if (error.response?.data.message) {
      toast({
        title: "Error",
        description: error.response?.data.message,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Error",
        description: "An error occurred. Please try again.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  } else {
    console.error(error);
    toast({
      title: "Error",
      description: "An unknown error occurred. Please ask for help.",
      status: "error",
      duration: 4000,
      isClosable: true,
    });
  }
};

export { handleAxiosError };
