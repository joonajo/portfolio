import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

import css from './Auth.module.css';
import { icons } from '../../icons/icons';
import { googleKey } from '../../keys';

type IError = {
  error: boolean;
  errorInfo?: {
    code: string;
    message: string;
  };
};

type IAuthComponent = {
  setSending: (newSending: boolean) => void;
  signIn: (email: string, password: string, idToken: string) => void;
};

const Auth: React.FunctionComponent<IAuthComponent> = ({ setSending, signIn }): JSX.Element => {
  const [error, setError] = React.useState<IError>({ error: false });

  const signInHandler = (email: string, password: string) => {
    setSending(true);
    const baseURL: string = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword';
    const apiKey: string = `?key=${googleKey}`;
    const payload = JSON.stringify({
      email,
      password,
      returnSecureToken: true,
    });

    fetch(baseURL + apiKey, { method: 'post', body: payload })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          setError({
            error: true,
            errorInfo: {
              code: data.error.code,
              message: data.error.message,
            },
          });
          setSending(false);
        } else {
          // console.log(data)
          const idToken: string = data?.idToken;
          const refreshToken: string = data?.refreshToken;
          const email: string = data?.email;
          const password: string = data?.password;
          const expireTime: string = String(new Date().getTime() + data?.expiresIn * 1000);
          localStorage.setItem('idToken', idToken);
          localStorage.setItem('refreshToken', refreshToken);
          localStorage.setItem('password', password);
          localStorage.setItem('email', email);
          localStorage.setItem('expireTime', expireTime);
          setSending(false);
          setError({ error: false });
          signIn(email, password, idToken);
        }
      });
  };

  return (
    <div className={css.Container}>
      <AuthForm submit={signInHandler} error={error} />
    </div>
  );
};

type IFormElement = {
  id: string;
  inputType: string;
  value: string;
  placeholder?: string;
  require?: boolean;
  className?: string;
  icon?: { focus?: any; unfocus?: any };
};

type IFormState = {
  [email: string]: IFormElement;
  password: IFormElement;
};

const initialAuthFormState: IFormState = {
  email: {
    id: 'email',
    inputType: 'email',
    placeholder: 'email',
    require: true,
    value: '',
    className: css.EmailInput,
    icon: { focus: icons.faEnvelopeOpen, unfocus: icons.faEnvelope },
  },
  password: {
    id: 'password',
    inputType: 'password',
    placeholder: 'password',
    require: true,
    value: '',
    className: css.PasswordInput,
    icon: { focus: icons.faUnlock, unfocus: icons.faLock },
  },
};

type IAuthForm = {
  submit: (email: string, password: string) => void;
  error?: IError;
};

const AuthForm: React.FunctionComponent<IAuthForm> = ({ submit, error }): JSX.Element => {
  const [formState, setFormState] = React.useState<IFormState>(initialAuthFormState);

  React.useEffect(() => {
    const keyHandler = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        signInHandler();
      }
    };

    window.addEventListener('keydown', keyHandler, true);

    return () => window.removeEventListener('keydown', keyHandler, true);
  }, [formState]);

  const changeHandler = (elemKey: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedFormState: IFormState = {
      ...formState,
      [elemKey]: {
        ...formState[elemKey],
        value: event.target.value,
      },
    };
    setFormState(updatedFormState);
  };

  const signInHandler = () => {
    submit(formState.email.value, formState.password.value);
  };

  return (
    <div className={css.AuthFormContainer}>
      {/* <h2 className={css.FormTitle}>Admin Auth</h2> */}
      <form className={css.AuthForm}>
        {Object.keys(formState).map((elementKey: string) => {
          return <InputComponent key={elementKey} {...formState[elementKey]} changed={changeHandler} />;
        })}
      </form>
      {error?.error && <p className={css.ErrorText}>{error.errorInfo?.message}</p>}
      <div className={css.SubmitButton} onClick={signInHandler}>
        <p>Sign In</p>
        <FontAwesomeIcon icon={icons.faSignInAlt as IconProp} />
      </div>
    </div>
  );
};

type IInputComponent = {
  changed: (elemKey: string, event: React.ChangeEvent<HTMLInputElement>) => void;
} & IFormElement;

const InputComponent: React.FunctionComponent<IInputComponent> = (props): JSX.Element => {
  const [isFocused, setIsFocused] = React.useState<boolean>(false);

  const containerClasses = [css.InputContainer, isFocused && css.focus].join(' ');

  const iconClasses = [css.InputIcon, isFocused && css.focus].join(' ');

  const spanClasses = [css.Span, isFocused && css.focus].join(' ');

  return (
    <div className={containerClasses}>
      {props.icon && (
        <div className={css.IconContainer}>
          <FontAwesomeIcon className={iconClasses} icon={props.icon?.unfocus} />
        </div>
      )}
      <input
        className={props.className}
        placeholder={!isFocused ? props.placeholder : ''}
        value={props.value}
        type={props.inputType}
        onChange={e => props.changed(props.id, e)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <span className={spanClasses}></span>
    </div>
  );
};

export default Auth;
