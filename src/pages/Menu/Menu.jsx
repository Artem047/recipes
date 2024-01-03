import { UserAuth } from '../../context/AuthContext'

const Menu = () => {
  const {user} = UserAuth();
  return (
	<div>Hello {user.displayName === null ? user.email : user.displayName}</div>
  )
}

export default Menu