//React
import React, { Suspense, lazy } from 'react';

//React Router
import { Switch, Route, Redirect } from 'react-router-dom';

//redux
import { connect } from 'react-redux';

//Loading
import ReactLoading from 'react-loading';

//Componentes
const PageIndex = lazy(() => import('./index/PageIndex'));
const PageNews = lazy(() => import('./news/PageNews'));
const PagePanel = lazy(() => import('./panel/PagePanel'));
const PageAccount = lazy(() => import('./account/PageAccount'));

function Routers({ auth }) {
	return (
		/* Switch sirve para escojer la ruta la que mas se acerque a la
    ruta actual, es decir, que de todas esas rutas, la app escogerรก
    la que mรกs se asemeje, excepto si se coloca el atributo "exact" */
		<Suspense fallback={<Loader />}>
			<Switch>
				<PublicRoute exact auth={auth} path="/">
					<PageIndex />
				</PublicRoute>
				
				<PublicRoute exact auth={auth} path="/login">
					<Redirect to='/' />
				</PublicRoute>
				
				<PublicRoute exact auth={auth} path="/news">
					<PageNews />
				</PublicRoute>
				
				<ProtectRoute auth={auth} path="/panel">
					<PagePanel />
				</ProtectRoute>
				
				<ProtectRoute auth={auth} path="/account">
					<PageAccount />
				</ProtectRoute>
				
				<PublicRoute auth={auth}>
					<NoFound />
				</PublicRoute>
			</Switch>
		</Suspense>
	);
}

export function PublicRoute({ children, auth, onlyUsers = null, ...rest }) {
	//AccessKey
	const keyL = JSON.parse(localStorage.getItem('key'));
	const keyS = JSON.parse(sessionStorage.getItem('key'));
	
	//Redireccionar al Login si existe una Access key almacenada
	return (
		<Route
			{...rest}
			render={({ location }) => {
				if (auth) {
					return	(children);
				}else {
					//Verificar si existen AccesKeys por validar y si el path actual
					//es diferente a "/"
					if ((keyL || keyS) && location.pathname !== "/") {
						return (
							<Redirect to={{
								pathname: "/",
								state: { from: location, protect: false }
							}} />
						);
					}else {
						return (children);
					}
				}
			}}
		/>
	);
}

export function ProtectRoute({ children, auth, onlyUsers = null, ...rest }) {
	return (
		<Route
			{...rest}
			render={({ location }) => {
				if (auth) {
					return	children
				}else {
					return (
						<Redirect to={{
              pathname: "/",
              state: { from: location, protect: true }
            }} />
					);
				}
			}}
		/>
	);
}

export function Loader(){
	return (
		<main className="BoxPage">
			<div className="loading" style={{display: "flex", justifyContent: "center", alignItems: "center", height: "80vh"}}>
				<ReactLoading type="bars" color="#6B8DD6" width={150} height={100} />
			</div>
		</main>
	)
}

export function NoFound() {
	return (
		<main className="Container" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
			<h1 style={{fontSize: 50, marginBottom: 0, marginTop: 0}}>
				4<span style={{color: '#6B8DD6'}}>0</span>4
			</h1>
			<ReactLoading type="cylon" color="#6B8DD6" />
			<p style={{marginTop: 0, textAlign: "center"}}>
				La página solicitada no se ha podido encontrar, por favor intente
				con una diferente.
			</p>
		</main>
	);
}

//REDUX
const mapStateToProps = state => ({
	auth: state.loginStatus.auth
});

export default connect(mapStateToProps, null)(Routers);
