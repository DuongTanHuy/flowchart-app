import PropTypes from 'prop-types';
import { useCallback, useEffect } from 'react';
// routes

//
import { useAuthContext } from '../hooks';
import { isElectron } from '../../utils/commom';
import { useRouter, useSearchParams } from '../../routes/hooks';

// ----------------------------------------------------------------------

export default function GuestGuard({ children }) {
  const router = useRouter();

  const searchParams = useSearchParams();

  let returnTo = '';

  if (isElectron()) {
    returnTo = '/';
  } else {
    returnTo = searchParams.get('returnTo') || '/';
  }

  const { authenticated } = useAuthContext();

  const check = useCallback(() => {
    if (authenticated) {
      router.push(returnTo);
    }
  }, [authenticated, returnTo, router]);

  useEffect(() => {
    check();
  }, [check]);

  return <>{children}</>;
}

GuestGuard.propTypes = {
  children: PropTypes.node,
};
