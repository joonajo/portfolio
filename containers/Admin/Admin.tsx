import * as React from 'react';
import { useQuery } from 'react-query';

import css from './Admin.module.css';
import Editor from '../../components/Admin/PortfolioManagement/Editor';
import Loading from '../../components/UI/Loading/Loading';
import Auth from '../../containers/Auth/Auth';
import { useAuthContext } from '../../context/authContext';
import { TPortfolioActionTypes, usePorftolioContext } from '../../context/portfolioContext';

const Admin = () => {
  const { state: authState, dispatch: authDispatch } = useAuthContext();

  const [sending, setSending] = React.useState(true);
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
      {authState.signedIn && <AdminContent />}
      <Loading show={sending} transparent fadeout />
    </div>
  );
};

const portfolioUrl = 'https://joonajo-portfolio.firebaseio.com/items.json';

const AdminContent = () => {
  const { state: portfolioState, dispatch: portfolioDispatch } = usePorftolioContext();

  const { isFetching: loading } = useQuery(
    portfolioUrl,
    () => fetch(portfolioUrl, { method: 'get' }).then(response => response.json()),
    {
      refetchOnWindowFocus: false,
      onSuccess: data => {
        if (data) {
          const items = Object.keys(data).map(item => {
            return data[item];
          });
          portfolioDispatch({
            type: TPortfolioActionTypes.SET_ITEMS,
            payload: items,
          });
        }
      },
    },
  );

  return (
    <>
      <div className={css.AdminContentWrapper}>{!loading && <Editor items={portfolioState.items} />}</div>
      <Loading show={loading} transparent fadeout />
    </>
  );
};

export default Admin;
