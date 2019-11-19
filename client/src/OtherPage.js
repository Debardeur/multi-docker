import React from 'react'
import {Link} from 'react-router-dom'

export default () => {
    return (
        <div>
            I'm just another page
            <Link to={'/'}/>
        </div>
    )
}