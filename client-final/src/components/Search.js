import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FormInput from './FormInput'
import SearchResultTable from './SearchResultTable'
import { useAuth0 } from '../react-auth0-spa'

const Search = () => {
  const { loading, user } = useAuth0()
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    const checkUser = async () => {
      const axiosResponse = await axios({
        url: '/user',
        method: 'POST',
        data: {
          email: user.email,
          sub: user.sub
        }
      })
      console.log(axiosResponse.data)
    }

    if (user && user.email && user.sub) {
      checkUser()
    }
  }, [user])

  const handleSubmit = async zipcodeValueFromChild => {
    console.log('submitted', zipcodeValueFromChild)

    const response = await axios({
      url: '/list',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      params: { zipcode: zipcodeValueFromChild }
    })

    const results = response.data.filteredData
    console.log(results)
    setFilteredData(results)
  }
  return (
    <div>
      <FormInput handleSubmit={handleSubmit} />
      <SearchResultTable data={filteredData} />
    </div>
  )
}

export default Search
