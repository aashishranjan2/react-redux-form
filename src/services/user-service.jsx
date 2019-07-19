// const url = 'https://node-user-details.herokuapp.com';
const postUserDetailsEndPoint = '/user';
const url = 'http://localhost:5000';

// POST call
export async function postUserDetails(body) {
    const config = {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    };
    return await fetch(url + postUserDetailsEndPoint, config)
     .then(res => res.json())
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
  }
