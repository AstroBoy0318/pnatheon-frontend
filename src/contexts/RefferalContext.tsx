import React, { useEffect, useState } from 'react'
import queryString from 'querystring'

const RefferalContext = React.createContext({ refferalAddress: "" })

const RefferalContextProvider = ({ children }) => {
  const [refferalAddress, setRefferalAddress] = useState("")

  useEffect(()=>{
    const query = queryString.parse(document.location.search);
    if(query['?ref'])
    {
      const ref = query['?ref'].toString()
      setRefferalAddress(atob(ref))
    }
  },[setRefferalAddress])

  return (
    <RefferalContext.Provider value={{ refferalAddress }}>
      {children}
    </RefferalContext.Provider>
  )
}

export { RefferalContext, RefferalContextProvider }
