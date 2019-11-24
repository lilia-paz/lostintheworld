import React, { useState, useEffect } from 'react'

import { Card, CardBody, CardTitle, Row, Col, Table, Button } from 'reactstrap'
import { useAuth0 } from "../react-auth0-spa";
import axios from 'axios'
import SearchResultTable from './SearchResultTable'

const Favorites = props => {
  const { loading, user } = useAuth0();
  const [favoritesData, setFavoritesData] = useState([])

  useEffect(() => {
    const getFavorites = async () => {

      const axiosResponse = await axios({
        url: '/favorites',
        method: 'POST',
        data: {
          email: user.email,
          sub: user.sub
        }
      })
      setFavoritesData(axiosResponse.data)

    }
    if (user && user.email && user.sub) {

      getFavorites()
    }
  }, [user])

  const handleSave = e => {
    const index = e.target.parentNode.parentNode.getAttribute('label')
    const tobeSaved = props.data[index]
    console.log('data to be saved:', tobeSaved)
    console.log(user.email) 
  }

  if (loading || !user) {
    return (
      <div>Loading...</div>
    );
  }
  return (
    <SearchResultTable data={favoritesData} />
  )
}

export default Favorites
