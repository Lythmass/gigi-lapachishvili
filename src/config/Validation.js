export const Validation = {
  name: {
    required: 'Please enter your name.',
  },
  email: {
    required: 'Please enter your email.',
    pattern: {
      value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
      message: 'Please enter correct email format.',
    },
  },
  title: {
    required: 'Please enter a subject',
  },
  message: {
    required: "Please don't leave this empty.",
  },
};

export default Validation;
