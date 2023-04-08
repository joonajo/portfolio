import * as React from 'react';

import css from './Admin.module.css';
import PortfolioItems from '../../components/Admin/PortfolioManagement/Portfolio';
import Loading from '../../components/UI/Loading/Loading';
import Auth from '../../containers/Auth/Auth';
import { IAuthContext, AuthContext, TAuthState } from '../../context/authContext';
import { TPortfolioActionTypes, usePorftolioContext } from '../../context/portfolioContext';
import { IPortfolioItem } from '../../interfaces/interfaces';

const Admin: React.FunctionComponent = (): JSX.Element => {
  const authContext: IAuthContext = React.useContext(AuthContext);
  const authState: TAuthState = authContext.state;
  const authDispatch = authContext.dispatch;

  const [sending, setSending] = React.useState<boolean>(true);
  const [screensize, setScreensize] = React.useState<{ width: number; height: number }>();

  React.useEffect(() => {
    document.title = 'Portfolio // Admin';

    setScreensize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    if (localStorage.length !== 0) {
      // check for auth info in local storage
      // compare current time in milliseconds to expire time in storage
      // if current time is LESS, use the auth info from storage to refresh
      // else, clear local storage
      const expireTime = localStorage.getItem('expireTime');
      if (expireTime) {
        // if auth token has not expired yet
        if (new Date().getTime() < +expireTime) {
          const authInfo = {
            email: localStorage.getItem('email')!,
            password: localStorage.getItem('password')!,
            idToken: localStorage.getItem('idToken')!,
          };
          authDispatch?.({ type: 'signin', payload: authInfo });
          setSending(false);
          // if auth has expired
        } else {
          localStorage.clear();
          setSending(false);
        }
      }
    } else {
      setSending(false);
    }
  }, []);

  const signInHandler = (email: string, password: string, idToken: string) => {
    const authInfo = {
      email,
      password,
      idToken,
    };
    authDispatch?.({ type: 'signin', payload: authInfo });
  };

  return (
    <div className={css.Main} style={{ minHeight: `${screensize?.height}px`, minWidth: `${screensize?.width}px` }}>
      {!authState.signedIn && <Auth setSending={setSending} signIn={signInHandler} />}
      {authState.signedIn && <AdminContent token={authState.idToken!} />}
      <Loading show={sending} transparent fadeout />
    </div>
  );
};

type IAdminContent = {
  token: string;
};

const AdminContent: React.FunctionComponent<IAdminContent> = (): JSX.Element => {
  const { state: portfolioState, dispatch: portfolioDispatch } = usePorftolioContext();

  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    if (portfolioState.items.length === 0) {
      const baseURL: string = 'https://joonajo-portfolio.firebaseio.com/items.json';

      const newItems: IPortfolioItem[] = [];

      fetch(baseURL, { method: 'get' })
        .then(response => response.json())
        .then(data => {
          if (data) {
            Object.keys(data).forEach(item => {
              newItems.push(data[item]);
            });
            portfolioDispatch({ type: TPortfolioActionTypes.SET_ITEMS, payload: newItems });
          }
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [portfolioState]);

  return (
    <>
      <div className={css.AdminContentWrapper}>{!loading && <PortfolioItems items={portfolioState.items} />}</div>
      <Loading show={loading} transparent fadeout />
    </>
  );
};

export default Admin;
