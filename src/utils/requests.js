const BASE_URL = "http://localhost:8000/";

export const fetchJSON = async (resource, options) => {
  try {
    const response = await fetch(BASE_URL + resource, options);
    const jsonData = await response.json();
    return jsonData;
  } catch (err) {
    console.log(err);
  }
};

export const getPhotos = async (user) =>
  await fetchJSON("photo-list", {
    headers: {
      authorization: await user.getIdToken(),
    },
  });

export const uploadPhotos = async (user, images) => {
  const formData = new FormData();
  images.forEach((image, index) => formData.append(index, image));
  await fetchJSON("photo-create", {
    headers: {
      authorization: await user.getIdToken(),
    },
    method: "POST",
    body: formData,
  });
};

export const uploadPhotosConcurrent = async (user, images) => {
  const groupArr = (data, n) => {
    var group = [];
    for (let i = 0, j = 0; i < data.length; i++) {
      if (i >= n && i % n === 0) j++;
      group[j] = group[j] || [];
      group[j].push(data[i]);
    }
    return group;
  };

  const formDataList = groupArr(images, Math.floor(images.length / 6)).map(
    (batch) => {
      const formData = new FormData();
      batch.forEach((photo, index) => {
        formData.append(`photo_${index}`, photo);
      });
      return formData;
    }
  );

  const uploadPromises = formDataList.map(async (formData) =>
    fetchJSON("photo-create", {
      headers: {
        authorization: await user.getIdToken(),
      },
      method: "POST",
      body: formData,
    })
  );
  await Promise.all(uploadPromises);
};

export const generatePost = async (user, prompt) =>
  await fetchJSON("post-generate", {
    headers: {
      authorization: await user.getIdToken(),
    },
    method: "POST",
    body: JSON.stringify({ prompt }),
  });
