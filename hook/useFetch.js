import { useState, useEffect } from 'react'
import axios from 'axios'
import { RECIPEBOOK_API_KEY } from '@env'

const recipebookApiKey = RECIPEBOOK_API_KEY

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const options = {
    method: 'GET',
    url: `http://localhost:3000/${endpoint}.json`,
    params: { ...query },
    headers: {
      'X-Recipebook-Api': 'true',
      'Authorization': `Bearer ${recipebookApiKey}`,
    },
  }
}
