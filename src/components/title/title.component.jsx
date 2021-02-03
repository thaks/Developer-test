import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

import './title.styles.scss'

const Title = () => {
    // Getting router id from React router dom
    const {collectionType} = useParams()
    const location = useLocation()
    
    // Changing title data based on the value in the router id;
    if(location.state?.search) {
        return <h1 className="title">{`Search Result! ${location.state.searchTerm ? location.state.searchTerm : ""}`}</h1>
    }else {
        return <h1 className="title">{collectionType ? collectionType : "Collection"}</h1>
    }

}
export default Title