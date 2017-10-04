const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const post = ({ title, description }) =>
  sleep(1000).then(() => {
    return {
      title,
      description
    }
  });

export default {
  post
};
