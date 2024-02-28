module.exports = {
  getCourse,
};

async function getCourse(req, res) {
  const name = encodeURIComponent(req.params.name);
  //why does name get logged before the get request even comes in the console
  const url = `https://golf-course-api.p.rapidapi.com/search?name=${name}`; 
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9b817e055amshbef31b029949ea3p1b5b19jsnea577b87271a",
      "X-RapidAPI-Host": "golf-course-api.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.text();
    res.send(result);
  } catch (error) {
    console.error(error);
  }
}

