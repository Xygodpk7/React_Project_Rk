// Define a function 'truncateText' that shortens a given string 'str' to a maximum length of 25 characters
export const truncateText = (str: string) => {
  // Check if the length of the string is less than 25 characters
  if (str.length < 25) {
      // If true, return the original string
      return str;
  } else {
      // If false, return a truncated version of the string followed by an ellipsis ('...')
      return str.substring(0, 25) + '...';
  }
};
