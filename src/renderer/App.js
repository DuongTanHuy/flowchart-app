import { SettingsDrawer, SettingsProvider } from './components/settings';
import ThemeProvider from './theme';
import { MotionLazy } from './components/animate/motion-lazy';
import './style.css';
import TabManagement from './components/tab-management';
import FlowView from './components/flowchart';
import { AuthProvider } from './auth/context/jwt';
import '@xyflow/react/dist/style.css';
import 'split-pane-react/esm/themes/default.css';
import 'simplebar-react/dist/simplebar.min.css';
import { SnackbarProvider } from './components/snackbar';
import Main from './layouts/main';

const App = () => {
  return (
    <AuthProvider>
      <SettingsProvider
        defaultSettings={{
          themeMode: 'dark', // 'light' | 'dark'
          themeDirection: 'ltr', //  'rtl' | 'ltr'
          themeContrast: 'default', // 'default' | 'bold'
          themeLayout: 'vertical', // 'vertical' | 'horizontal' | 'mini'
          themeColorPresets: 'default', // 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
          themeStretch: true,
        }}
      >
        <ThemeProvider>
          <MotionLazy>
            <SnackbarProvider>
              <SettingsDrawer />

              {/* <Header /> */}

              <Main
                sx={{
                  height: '100%',
                }}
              >
                <TabManagement FlowCreate={FlowView} />
              </Main>
            </SnackbarProvider>
          </MotionLazy>
        </ThemeProvider>
      </SettingsProvider>
    </AuthProvider>
  );
};

export default App;
