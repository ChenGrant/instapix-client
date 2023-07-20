const BASE_URL =
  process.env.REACT_APP_ENV === "dev"
    ? "http://localhost:8000"
    : "http://5.78.74.51:8000";

export const fetchPhotos = async (user) => {
  const response = await fetch(`${BASE_URL}/photo-list`, {
    headers: {
      authorization: await user.getIdToken(),
    },
  });
  const data = await response.json();
  return data;
};

export const uploadPhotos = async (user, images) => {
  const formData = new FormData();
  images.forEach((image, index) => formData.append(index, image));
  const response = await fetch(`${BASE_URL}/photo-create`, {
    headers: {
      authorization: await user.getIdToken(),
    },
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  return data;
};

export const generatePost = async (user, prompt) => {
  const response = await fetch(`${BASE_URL}/post-generate`, {
    headers: {
      authorization: await user.getIdToken(),
    },
    method: "POST",
    body: JSON.stringify({ prompt }),
  });
  const data = response.json();
  return data;
};
