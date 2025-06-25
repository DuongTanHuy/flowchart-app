import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// hooks
// assets
import { ForbiddenIllustration } from '../../../../public/assets/illustrations/illustration_dashboard.png';
import { MotionContainer, varBounce } from '../../components/animate';
// components

// ----------------------------------------------------------------------

export default function RoleBasedGuard({ hasContent, roles, children, sx }) {
  // Logic here to get current user role

  if (typeof roles !== 'undefined' && !roles.includes('admin')) {
    return hasContent ? (
      <Container
        component={MotionContainer}
        sx={{ textAlign: 'center', ...sx }}
      >
        <m.div variants={varBounce().in}>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Permission Denied
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <Typography sx={{ color: 'text.secondary' }}>
            You do not have permission to access this page
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <ForbiddenIllustration
            sx={{
              height: 260,
              my: { xs: 5, sm: 10 },
            }}
          />
        </m.div>
      </Container>
    ) : null;
  }

  return <> {children} </>;
}

RoleBasedGuard.propTypes = {
  children: PropTypes.node,
  hasContent: PropTypes.bool,
  roles: PropTypes.arrayOf(PropTypes.string),
  sx: PropTypes.object,
};
