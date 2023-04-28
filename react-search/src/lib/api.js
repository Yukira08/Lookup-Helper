const FIREBASE_DOMAIN = "https://react-http-ae93e-default-rtdb.firebaseio.com/";

export async function fetchPapers() {
  const response = await fetch("https://phuongdinh.pythonanywhere.com/api/search/math+theory/?format=json");
  if (!response.ok) {
    throw new Error("Something went wrong!");
  }
  const responseData = await response.json();
  console.log(responseData);
  const loadedPapers = [];
  for (const key in responseData) {
    loadedPapers.push({
      id: key,
      ...responseData[key],
    });
  }
  return loadedPapers;
}

export async function fetchResources() {
  const response = await fetch("https://phuongdinh.pythonanywhere.com/api/source-list/?format=json");
  if (!response.ok) {
    throw new Error("Something went wrong!");
  }
  const responseData = await response.json();
  console.log(responseData);
  const loadedResources = [];
  for (const key in responseData) {
    loadedResources.push({
      id: key,
      ...responseData[key],
    });
  }
  return loadedResources;
}

export async function fetchTools() {
  const response = await fetch("https://phuongdinh.pythonanywhere.com/api/tool-list/?format=json");
  if (!response.ok) {
    throw new Error("Something went wrong!");
  }
  const responseData = await response.json();
  console.log(responseData);
  const loadedTools = [];
  for (const key in responseData) {
    loadedTools.push({
      id: key,
      ...responseData[key],
    });
  }
  return loadedTools;
}

export async function fetchTutorials() {
  const response = await fetch(`${FIREBASE_DOMAIN}/tutorials.json`);
  if (!response.ok) {
    throw new Error("Something went wrong!");
  }
  const responseData = await response.json();
  const loadedTutorials = [];
  for (const key in responseData) {
    loadedTutorials.push({
      id: key,
      ...responseData[key],
    });
  }
  return loadedTutorials;
}


export async function getSingleTutorial(tutorialId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/tutorials/${tutorialId}.json`);
  // const response = await fetch(`https://phuongdinh.pythonanywhere.com/static/media/2.json`,
  // {
  //   method : "GET",
  //   mode: 'no-cors',
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // }
  // );
  console.log(response);
  const data = await response.json();
  console.log(data);
  
  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch tutorial.');
  }

  const loadedTutorial = {
    id : tutorialId,
    ...data,
  };
  console.log(loadedTutorial);
  return loadedTutorial;
}