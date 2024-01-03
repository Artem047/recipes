import {useRouteError} from 'react-router-dom';

const ErrorPage = () => {

	const error = useRouteError();

  return (
	<div>
		<h1>Ой!</h1>
		<p>Извините, произошла непредвиденная ошибка.</p>
		<p>
			<i>{error.statusText || error.message}</i>
		</p>
	</div>
  )
}

export default ErrorPage