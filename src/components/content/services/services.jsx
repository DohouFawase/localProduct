
import { NavLink } from 'react-router-dom'

export default function Services({title, des, url="", utlTitl}) {
  return (
    <div>
      <div className="">
        <div className="">
            <h1>{title}</h1>
            <p>{des}</p>
            <NavLink to={url=""}>
               {utlTitl}
            </NavLink>
        </div>
      </div>
    </div>
  )
}
