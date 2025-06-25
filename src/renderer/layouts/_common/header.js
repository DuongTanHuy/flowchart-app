// @mui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Badge, { badgeClasses } from '@mui/material/Badge';
// hooks
import { useResponsive } from '../../hooks/use-responsive';
// theme
import { bgBlur } from '../../theme/css';
// components
import Logo from '../../components/logo';
import Label from '../../components/label';
//
import { useOffSetTop } from '../../hooks/use-off-set-top';
import { HEADER } from '../config-layout';
import LoginButton from './login-button';
import SettingsButton from './settings-button';
import HeaderShadow from './header-shadow';
//

// ----------------------------------------------------------------------

export default function Header() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  const offsetTop = useOffSetTop(HEADER.H_DESKTOP);

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(['height'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(offsetTop && {
            ...bgBlur({
              color: theme.palette.background.default,
            }),
            height: {
              md: HEADER.H_DESKTOP_OFFSET,
            },
          }),
        }}
      >
        <Container
          sx={{
            height: 1,
            display: 'flex',
            alignItems: 'center',
            margin: 0,
            minWidth: '100vw',
          }}
        >
          <Badge
            sx={{
              [`& .${badgeClasses.badge}`]: {
                top: 8,
                right: -16,
              },
            }}
            badgeContent={
              <Link
                target="_blank"
                rel="noopener"
                underline="none"
                sx={{ ml: 1 }}
              >
                <Label
                  color="info"
                  sx={{ textTransform: 'unset', height: 22, px: 0.5 }}
                >
                  v1.0.0
                </Label>
              </Link>
            }
          >
            <Logo />
          </Badge>

          <Box sx={{ flexGrow: 1 }} />

          <Stack
            alignItems="center"
            direction={{ xs: 'row', md: 'row-reverse' }}
          >
            {mdUp && <LoginButton />}

            <SettingsButton
              sx={{
                ml: { xs: 1, md: 0 },
                mr: { md: 2 },
              }}
            />
          </Stack>
        </Container>
      </Toolbar>

      {offsetTop && <HeaderShadow />}
    </AppBar>
  );
}
