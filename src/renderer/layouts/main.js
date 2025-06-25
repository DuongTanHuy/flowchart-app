import PropTypes from 'prop-types'; // @mui
import Box from '@mui/material/Box';
// hooks
// components
//
import { HEADER } from './config-layout';
import { useSettingsContext } from '../components/settings';
import { useResponsive } from '../hooks/use-responsive';

// ----------------------------------------------------------------------

export default function Main({ children, sx, ...other }) {
  const settings = useSettingsContext();

  const lgUp = useResponsive('up', 'lg');

  const isNavHorizontal = settings.themeLayout === 'horizontal';

  if (isNavHorizontal) {
    return (
      <Box
        component="main"
        sx={{
          minHeight: 1,
          display: 'flex',
          flexDirection: 'column',
          pt: `${HEADER.H_MOBILE}px`,
          ...(lgUp && {
            pt: `${HEADER.H_MOBILE * 2}px`,
          }),
          pb: 0,
          ...sx,
        }}
      >
        {children}
      </Box>
    );
  }

  return (
    <Box
      component="main"
      className="no-select"
      sx={{
        flexGrow: 1,
        minHeight: 1,
        display: 'flex',
        flexDirection: 'column',
        p: 1,
        pt: 1,
        pb: 0,
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
}

Main.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
};
