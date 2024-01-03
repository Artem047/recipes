import { UserAuth } from '../context/AuthContext'
import { Navigate } from "react-router-dom";

const Protected = ({children}) => {
	const { user } = UserAuth();

	if(!user) {
		return <Navigate to='/auth/login' replace />
	}
  return children;
}

export default Protected