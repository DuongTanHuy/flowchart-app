// ----------------------------------------------------------------------

const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/',
};

// ----------------------------------------------------------------------

export const paths = {
  // AUTH
  auth: {
    jwt: {
      login: `/login`,
      otp: `/otp`,
      register: `/register`,
      forgot_password: `/forgot-password`,
    },
  },
  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
    profile: '/profile',
    automation: '/automation',
    marketplace: '/automation/marketplace',
    task: '/automation/task',
    schedule: '/automation/schedules',
    automation_createOrEdit: (id) => `/flow/createOrEdit/${id || ''}`,
    synchronizer: '/synchronizer',
    extension: '/extension',
    api_doc: '/api-docs',
    member: '/member',
    recharge: '/pricing',
    workspace_setting: '/workspace-setting',
  },
  profile: {
    create: '/profile/create',
    edit: (id) => `/profile/edit/${id}`,
  },
  task: {
    root: '/automation/task',
    edit: (id) => `/automation/task/edit/${id}`,
    log: (id) => `/automation/task/log/${id}`,
  },
};
