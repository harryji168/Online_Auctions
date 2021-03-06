const BASE_URL = 'http://localhost:6001/api/v1';

export const Auction = {
    index() {
      return fetch(`${BASE_URL}/auctions`)
        .then(res => {
          return res.json();
        })
    },
    create(params) {
      return fetch(`${BASE_URL}/auctions`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      }).then(res => res.json())
    },
    show(id) {
        // console.log("inside")
      return fetch(`${BASE_URL}/auctions/${id}`)
        .then(res => res.json())
    },
    publish(id) {
      return fetch(`${BASE_URL}/auctions/${id}`, {
        method: 'PATCH',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({status: 'published'})
      }).then(res => res.json())
    },
    reserve(id){
      return fetch(`${BASE_URL}/auctions/${id}`, {
        method: 'PATCH',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({status: 'reserve_met'})
      }).then(res => res.json())

    }

}
export const Session = {
  create(params) {
    return fetch(`${BASE_URL}/session`, {
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include', // allows cookies to be recieved and sent from this request
      method: 'POST',
      body: JSON.stringify(params)
    }).then((res) => {
      return res.json();
    })
  },
  currentUser(){
    return fetch(`${BASE_URL}/current_user`,{
      credentials: 'include' // We need to include a session in a request so we can fetch that particular user
    })
    .then((res)=> res.json())
  },
  destroy(){
    return fetch(`${BASE_URL}/session`, {
      method: 'Delete',
      credentials: 'include'
    }).then(res => res.json())
  }
}

export const User={
  create(params){
    return fetch(`${BASE_URL}/users`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user:params})
      }
    ).then(res => res.json());
  }
}
export const Bid = {
    create(id,params) {
      return fetch(`${BASE_URL}/auctions/${id}/bids`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      }).then(res => res.json())
    }
}