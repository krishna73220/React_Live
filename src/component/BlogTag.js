import React from "react"
import { Link } from "react-router-dom"


export default function BlogTag() {
    return (
        <>
            <ul>
                <li>
                      <Link to='/blog'>Influencer  </Link>
                </li>
                <li>
                      <Link to='/blog'>Marketing  </Link>
                </li>
                <li>
                      <Link to='/blog'>Branding  </Link>
                </li>
                <li>
                      <Link to='/blog'>Promotion  </Link>
                </li>
                <li>
                      <Link to='/blog'>Social Media  </Link>
                </li>
                <li>
                      <Link to='/blog'>Google  </Link>
                </li>
                <li>
                      <Link to='/blog'>Coding  </Link>
                </li>
                <li>
                      <Link to='/blog'>⁠Algorithms  </Link>
                </li>
            </ul>

        </>
    )
}