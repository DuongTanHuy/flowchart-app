import PropTypes from 'prop-types';
import { useEffect, useReducer, useCallback, useMemo } from 'react';
// utils

import { AuthContext } from './auth-context';
import { getStorage, setStorage } from '../../../hooks/use-local-storage';
import {
  STORAGE_KEY,
  TERMINAL_SETTING,
  USER_INFORMATION,
} from '../../../utils/constance';

// ----------------------------------------------------------------------

const initialState = {
  user: null,
  loading: true,
  workspace_id: '',
  workspace_permission: {},
  app_version: '',
  isHost: false,
  workflowEditable: null,
  statusEditingWF: false,
  flowAutomation: {
    status: 'list', // editting
    // typeForm: '',
    typeForm: null,
    nodeId: null,
    allCurrentFlowchart: [],
    updateNodeForm: 0,
  },
  variableFlow: {
    list: [],
    dataFlow: null,
    status: 'creating', // creating || editing
  },
  resources: {
    list: [],
  },
  allCurrentFlowchart: [],
  updateWorkspaceInfo: 0,
};

const reducer = (state, action) => {
  if (action.type === 'INITIAL') {
    return {
      ...action.payload,
      loading: false,
    };
  }
  if (action.type === 'LOGIN') {
    return {
      ...state,
      user: action.payload.user,
    };
  }
  if (action.type === 'UPDATE_INIT') {
    return {
      ...state,
      loading: false,
      user: action.payload.user,
    };
  }
  if (action.type === 'LOGOUT') {
    return {
      ...action.payload,
      loading: false,
    };
  }
  if (action.type === 'UPDATE_WORKSPACE_ID') {
    return {
      ...state,
      workspace_id: action.payload.workspaceId,
      isHost: action.payload.isHost,
    };
  }
  if (action.type === 'UPDATE_WORKSPACE_PERMISSION') {
    return {
      ...state,
      workspace_permission: action.payload,
    };
  }
  if (action.type === 'UPDATE_WORKSPACE_INFO') {
    return {
      ...state,
      updateWorkspaceInfo: state.updateWorkspaceInfo + 1,
    };
  }
  if (action.type === 'UPDATE_APP_VERSION') {
    return {
      ...state,
      app_version: action.payload.app_version,
    };
  }
  if (action.type === 'UPDATE_WORKFLOW_EDITABLE') {
    return {
      ...state,
      workflowEditable: action.payload,
    };
  }
  if (action.type === 'UPDATE_STATUS_EDITING_WF') {
    return {
      ...state,
      statusEditingWF: action.payload,
    };
  }

  if (action.type === 'UPDATE_FLOW_AUTOMATION') {
    return {
      ...state,
      flowAutomation: { ...state.flowAutomation, ...action.payload },
    };
  }

  if (action.type === 'UPDATE_VARIABLE_FLOW') {
    return {
      ...state,
      variableFlow: { ...state.variableFlow, ...action.payload },
    };
  }

  if (action.type === 'UPDATE_RESOURCES') {
    return {
      ...state,
      resources: { ...state.resources, ...action.payload },
    };
  }

  return state;
};

// ----------------------------------------------------------------------

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const initialize = useCallback(async () => {
    try {
      if (process.env.NODE_ENV === 'production') {
        await window?.electron?.ipcRenderer?.once('get-file-path', (arg) => {
          if (arg) {
            setStorage('resourcePath', arg);
          }
        });
        await window?.electron?.ipcRenderer?.sendMessage('get-file-path');
      }

      const accessToken = getStorage(STORAGE_KEY);
      if (accessToken) {
        const user = getStorage(USER_INFORMATION);
        const userParse = JSON.parse(user);
        dispatch({
          type: 'UPDATE_INIT',
          payload: {
            user: userParse,
          },
        });
      } else {
        dispatch({
          type: 'INITIAL',
          payload: { ...initialState },
        });
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: 'INITIAL',
        payload: { ...initialState },
      });
    }
  }, []);

  useEffect(() => {
    initialize();
  }, [initialize]);

  // LOGIN
  const login = useCallback(async (username, password, device_id, hostname) => {
    const data = {
      username,
      password,
      device_id,
      hostname,
    };

    console.log(data);
  }, []);

  // LOGIN OTP
  const loginOtp = useCallback(async (code, ticket) => {
    const dataPayload = {
      code,
      ticket,
    };

    console.log(dataPayload);

    localStorage.setItem('terminal', TERMINAL_SETTING);
  }, []);

  // LOGIN WITH GOOGLE
  const loginWithGoogle = useCallback(
    async ({ access_token, ref_code, device_id, hostname }) => {
      const payload = {
        access_token,
        ref_code,
        device_id,
        hostname,
      };

      console.log(payload);

      localStorage.setItem('terminal', TERMINAL_SETTING);
    },
    [],
  );

  // LOGIN WITH GOOGLE CODE
  const loginWithGoogleCode = useCallback(
    async ({ code, ref_code, device_id, hostname }) => {
      const payload = {
        code,
        ref_code,
        device_id,
        hostname,
      };
      console.log(payload);
      localStorage.setItem('terminal', TERMINAL_SETTING);
    },
    [],
  );

  // REGISTER
  const register = useCallback(
    async (username, email, password, g_recaptcha_response, ref_code) => {
      const data = {
        username,
        email,
        password,
        g_recaptcha_response,
        ref_code,
      };
      console.log(data);
    },
    [],
  );

  // LOGOUT
  const logout = useCallback(async () => {
    try {
      const settings = window.localStorage.getItem('settings');
      const language = window.localStorage.getItem('i18nextLng');
      window.localStorage.clear();
      if (settings !== null) {
        window.localStorage.setItem('settings', settings);
      }
      if (language !== null) {
        window.localStorage.setItem('i18nextLng', language);
      }
      dispatch({
        type: 'LOGOUT',
        payload: { ...initialState },
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  // UPDATE WORKSPACE ID
  const updateWorkspaceId = useCallback(
    async (workspaceId, creatorId) => {
      dispatch({
        type: 'UPDATE_WORKSPACE_ID',
        payload: { workspaceId, isHost: state.user?.id === creatorId },
      });
    },
    [state.user?.id],
  );

  // UPDATE WORKSPACE PERMISSION
  const updateWorkspacePermission = useCallback(async (permissions) => {
    dispatch({
      type: 'UPDATE_WORKSPACE_PERMISSION',
      payload: permissions,
    });
  }, []);

  // UPDATE APP VERSION
  const updateAppVersion = useCallback((data) => {
    dispatch({
      type: 'UPDATE_APP_VERSION',
      payload: data,
    });
  }, []);

  // UPDATE_WORKFLOW_EDITABLE
  const updateWorkflowEdit = useCallback((data) => {
    dispatch({
      type: 'UPDATE_WORKFLOW_EDITABLE',
      payload: data,
    });
  }, []);

  // UPDATE STATUS EDITTING WORKFLOW
  const updataStatusEditingWF = useCallback((data) => {
    dispatch({
      type: 'UPDATE_STATUS_EDITING_WF',
      payload: data,
    });
  }, []);

  // UPDATE FLOW AUTOMATION
  const updateFlowAutomation = useCallback((data) => {
    dispatch({
      type: 'UPDATE_FLOW_AUTOMATION',
      payload: data,
    });
  }, []);

  // UPDATE_VARIABLE_FLOW
  const updateVariableFlow = useCallback((data) => {
    dispatch({
      type: 'UPDATE_VARIABLE_FLOW',
      payload: data,
    });
  }, []);

  // UPDATE_RESOURCES
  const updateResources = useCallback((data) => {
    dispatch({
      type: 'UPDATE_RESOURCES',
      payload: data,
    });
  }, []);

  // UPDATE_WORKSPACE
  const handleUpdateWorkspaceInfo = useCallback(() => {
    dispatch({
      type: 'UPDATE_WORKSPACE_INFO',
    });
  }, []);

  // ----------------------------------------------------------------------

  const checkAuthenticated = state.user ? 'authenticated' : 'unauthenticated';

  const status = state.loading ? 'loading' : checkAuthenticated;

  const memoizedValue = useMemo(
    () => ({
      user: state.user,
      method: 'jwt',
      loading: status === 'loading',
      authenticated: status === 'authenticated',
      unauthenticated: status === 'unauthenticated',
      workspace_id: state.workspace_id,
      app_version: state.app_version,
      isHost: state.isHost,
      workflowEditable: state.workflowEditable,
      statusEditingWF: state.statusEditingWF,
      flowAutomation: state.flowAutomation,
      variableFlow: state.variableFlow,
      resources: state.resources,
      canChangeWs: state.canChangeWs,
      updateWorkspaceInfo: state.updateWorkspaceInfo,
      workspace_permission: state.workspace_permission,
      //
      initialize,
      login,
      loginWithGoogle,
      loginOtp,
      register,
      logout,
      updateWorkspaceId,
      updateWorkflowEdit,
      updataStatusEditingWF,
      updateFlowAutomation,
      updateVariableFlow,
      updateResources,
      updateAppVersion,
      loginWithGoogleCode,
      handleUpdateWorkspaceInfo,
      updateWorkspacePermission,
    }),
    [
      state.user,
      state.workspace_id,
      state.app_version,
      state.isHost,
      state.workflowEditable,
      state.statusEditingWF,
      state.flowAutomation,
      state.variableFlow,
      state.resources,
      state.canChangeWs,
      state.updateWorkspaceInfo,
      state.workspace_permission,
      status,
      initialize,
      login,
      loginWithGoogle,
      loginOtp,
      register,
      logout,
      updateWorkspaceId,
      updateWorkflowEdit,
      updataStatusEditingWF,
      updateFlowAutomation,
      updateVariableFlow,
      updateResources,
      updateAppVersion,
      loginWithGoogleCode,
      handleUpdateWorkspaceInfo,
      updateWorkspacePermission,
    ],
  );

  return (
    <AuthContext.Provider value={memoizedValue}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node,
};
