export const githubInfoLoader = async () => {
  try {
    const response = await fetch("https://api.github.com/users/huzaifak08");
    return response.json();
  } catch (err) {
    console.log(err);
  }
};
