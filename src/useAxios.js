import React, { useState, useEffect } from 'react';
import axios from 'axios';

function useAxios( url, refresh ) {
  const [data, setData] = useState([])

  const newRequest = async () => {
    try {
      const request = await axios.get(url)
      const requestData = request.data
      setData(requestData)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    newRequest()
  }, [refresh])

  return data;
}

export default useAxios;