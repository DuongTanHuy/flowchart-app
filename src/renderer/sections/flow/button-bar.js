import PropTypes from 'prop-types';

import {
  Button,
  ButtonGroup,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
  alpha,
  useTheme,
} from '@mui/material';
import React, { memo, useCallback } from 'react';
import { useSettingsContext } from '../../components/settings';
import Iconify from '../../components/iconify';
import SettingsButton from '../../layouts/_common/settings-button';

const ButtonBar = ({
  idFlowChart,
  wfInfo,
  runStatus,
  stopScript,
  handleRunningModel,
  handlePendingModel,
  handlePublishModel,
  handleUploadModel,
  handleResourceModel,
  handleVariableModel,
  handleRejectModel,
  onShareModel,
  onTableModal,
  undo,
  canUndo,
  redo,
  canRedo,
  anchorMore,
  setAnchorElMore,
  handleOpenOutput,
  openSettingVSCode,
  loading,
  saveFlowChart,
  reactFlowInstance,
}) => {
  const theme = useTheme();
  const settings = useSettingsContext();

  const showIconRunOrStop = useCallback(() => {
    const commonIconButtonStyles = {
      borderRadius: 1,
      px: wfInfo?.is_encrypted ? 3 : '20px',
    };

    switch (runStatus) {
      case 'loading':
        return (
          <Tooltip title="Starting" arrow placement="top">
            <IconButton
              aria-label="starting"
              size="small"
              sx={commonIconButtonStyles}
            >
              <Iconify icon="line-md:loading-loop" color="text.primary" />
            </IconButton>
          </Tooltip>
        );
      case 'running':
        return (
          <Tooltip title="Stop" arrow placement="top">
            <IconButton
              aria-label="stop"
              size="small"
              sx={commonIconButtonStyles}
              onClick={stopScript}
            >
              <Iconify icon="clarity:stop-solid" sx={{ color: 'red' }} />
            </IconButton>
          </Tooltip>
        );
      default:
        return (
          <Tooltip title="Run" arrow placement="top">
            <IconButton
              aria-label="run"
              size="small"
              sx={commonIconButtonStyles}
              onClick={handleRunningModel}
            >
              <Iconify icon="ph:play-fill" color="text.primary" />
            </IconButton>
          </Tooltip>
        );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [runStatus, stopScript, wfInfo?.is_encrypted]);

  const getTooltipTitle = useCallback(() => {
    let title = '';
    if (wfInfo?.source_workflow) {
      title =
        'Not available for download because this workflow is a source workflow';
    } else if (wfInfo?.is_encrypted) {
      title = 'Not available for download because this workflow is encrypted';
    }
    return title;
  }, [wfInfo?.is_encrypted, wfInfo?.source_workflow]);

  return (
    <Stack
      direction="row"
      alignItems="start"
      spacing={1}
      sx={{
        position: 'absolute',
        right: 0,
      }}
    >
      <SettingsButton
        sx={{
          width: '36px',
          aspectRatio: '1 / 1',
        }}
      />
      {wfInfo && (
        <Tooltip title={getTooltipTitle()} arrow placement="top">
          <ButtonGroup
            sx={{
              border: '1px solid',
              borderColor: alpha(theme.palette.grey[500], 0.32),
              paddingX: '8px',
              height: '34px',
              bgcolor: alpha(
                theme.palette.grey[settings.themeMode === 'dark' ? 900 : 300],
                1,
              ),
            }}
          >
            <Tooltip
              title={
                !wfInfo?.source_workflow && !wfInfo?.is_encrypted && 'Share'
              }
              arrow
              placement="top"
            >
              <span
                style={{
                  paddingTop: '2px',
                }}
              >
                <IconButton
                  aria-label="share"
                  size="small"
                  sx={{
                    borderRadius: 1,
                    paddingX: '8px',
                    opacity:
                      wfInfo?.source_workflow ||
                      (!wfInfo?.source_workflow && wfInfo?.is_encrypted)
                        ? 0.5
                        : 1,
                  }}
                  onClick={onShareModel}
                  disabled={
                    wfInfo?.source_workflow !== null ||
                    (!wfInfo?.source_workflow && wfInfo?.is_encrypted)
                  }
                >
                  <Iconify icon="material-symbols:share" color="text.primary" />
                </IconButton>
              </span>
            </Tooltip>
            <Tooltip
              title={
                !wfInfo?.source_workflow &&
                !wfInfo?.is_encrypted &&
                // eslint-disable-next-line no-nested-ternary
                (wfInfo?.is_public
                  ? // eslint-disable-next-line no-nested-ternary
                    wfInfo?.public_workflow?.status === 'pending'
                    ? 'Pending'
                    : wfInfo?.public_workflow?.status === 'rejected'
                    ? 'Rejected'
                    : 'Published'
                  : 'Publish')
              }
              arrow
              placement="top"
            >
              <span
                style={{
                  paddingTop: '2px',
                }}
              >
                <IconButton
                  aria-label="publish"
                  size="small"
                  sx={{
                    borderRadius: 1,
                    paddingX: '8px',
                    opacity:
                      wfInfo?.source_workflow ||
                      (!wfInfo?.source_workflow && wfInfo?.is_encrypted)
                        ? 0.5
                        : 1,
                  }}
                  disabled={
                    wfInfo?.source_workflow !== null ||
                    (!wfInfo?.source_workflow && wfInfo?.is_encrypted)
                  }
                  onClick={() => {
                    if (wfInfo?.public_workflow?.status === 'pending') {
                      handlePendingModel();
                    } else if (wfInfo?.public_workflow?.status === 'rejected') {
                      handleRejectModel();
                    } else {
                      handlePublishModel();
                    }
                  }}
                >
                  <Iconify
                    icon="material-symbols:publish"
                    color={
                      // eslint-disable-next-line no-nested-ternary
                      wfInfo?.is_public
                        ? // eslint-disable-next-line no-nested-ternary
                          wfInfo?.public_workflow?.status === 'pending'
                          ? 'warning.main'
                          : wfInfo?.public_workflow?.status === 'rejected'
                          ? 'error.main'
                          : 'primary.main'
                        : 'text.primary'
                    }
                  />
                </IconButton>
              </span>
            </Tooltip>
            {wfInfo?.is_public &&
              wfInfo?.public_workflow?.status === 'approved' && (
                <Tooltip title="Upload version" arrow placement="top">
                  <IconButton
                    aria-label="update-version"
                    size="small"
                    sx={{
                      borderRadius: 1,
                      paddingX: '8px',
                    }}
                    onClick={handleUploadModel}
                  >
                    <Iconify
                      icon="grommet-icons:cloud-upload"
                      color="text.primary"
                    />
                  </IconButton>
                </Tooltip>
              )}
          </ButtonGroup>
        </Tooltip>
      )}

      <ButtonGroup
        sx={{
          border: '1px solid',
          borderColor: alpha(theme.palette.grey[500], 0.32),
          paddingX: '8px',
          height: '34px',
          bgcolor: alpha(
            theme.palette.grey[settings.themeMode === 'dark' ? 900 : 300],
            1,
          ),
        }}
      >
        <Tooltip title="Undo" arrow placement="top">
          <span>
            <IconButton
              aria-label="undo"
              size="small"
              sx={{
                borderRadius: 1,
                paddingX: '8px',
                height: '34px',
              }}
              onClick={undo}
              disabled={!canUndo}
            >
              <Iconify
                icon="lucide:undo-2"
                color={canUndo ? 'text.primary' : 'text.disable'}
              />
            </IconButton>
          </span>
        </Tooltip>
        <Tooltip title="Redo" arrow placement="top">
          <span>
            <IconButton
              aria-label="redo"
              size="small"
              sx={{
                borderRadius: 1,
                paddingX: '8px',
                height: '34px',
              }}
              onClick={redo}
              disabled={!canRedo}
            >
              <Iconify
                icon="lucide:redo-2"
                color={canRedo ? 'text.primary' : 'text.disable'}
              />
            </IconButton>
          </span>
        </Tooltip>
      </ButtonGroup>

      <ButtonGroup
        sx={{
          border: '1px solid',
          borderColor: alpha(theme.palette.grey[500], 0.32),
          paddingX: '8px',
          height: '34px',
          bgcolor: alpha(
            theme.palette.grey[settings.themeMode === 'dark' ? 900 : 300],
            1,
          ),
        }}
      >
        <Tooltip title="Resource" arrow placement="top">
          <IconButton
            aria-label="resource"
            size="small"
            sx={{
              borderRadius: 1,
              paddingX: '8px',
            }}
            onClick={handleResourceModel}
          >
            <Iconify icon="ic:outline-source" color="text.primary" />
          </IconButton>
        </Tooltip>
        {((!idFlowChart && !wfInfo?.id) ||
          (wfInfo?.id && !wfInfo?.is_encrypted)) && (
          <Tooltip title="Variable" arrow placement="top">
            <IconButton
              aria-label="variables"
              size="small"
              sx={{
                borderRadius: 1,
                paddingX: '8px',
              }}
              onClick={handleVariableModel}
            >
              <Iconify
                icon="fluent:braces-variable-20-filled"
                color="text.primary"
              />
            </IconButton>
          </Tooltip>
        )}
        <Tooltip title="Table" arrow placement="top">
          <IconButton
            aria-label="table"
            size="small"
            sx={{
              borderRadius: 1,
              paddingX: '8px',
            }}
            onClick={onTableModal}
          >
            <Iconify icon="ri:table-3" color="text.primary" />
          </IconButton>
        </Tooltip>
      </ButtonGroup>
      <ButtonGroup
        sx={{
          border: '1px solid',
          borderColor: alpha(theme.palette.grey[500], 0.32),
          bgcolor: alpha(
            theme.palette.grey[settings.themeMode === 'dark' ? 900 : 300],
            1,
          ),
          paddingX: wfInfo?.is_encrypted ? 0 : 0,
          height: '34px',
        }}
      >
        {showIconRunOrStop()}
      </ButtonGroup>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={anchorMore ? 'long-menu' : undefined}
        aria-expanded={anchorMore ? 'true' : undefined}
        aria-haspopup="true"
        onClick={(event) => setAnchorElMore(event.currentTarget)}
        sx={{
          border: '1px solid',
          borderColor: alpha(theme.palette.grey[500], 0.32),
          bgcolor: alpha(
            theme.palette.grey[settings.themeMode === 'dark' ? 900 : 300],
            1,
          ),
          p: 0.9,
          borderRadius: 1,
        }}
      >
        <Iconify icon="ri:more-2-fill" width={18} />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorMore}
        open={Boolean(anchorMore)}
        onClose={() => setAnchorElMore(null)}
        sx={{ width: '300px' }}
      >
        <MenuItem onClick={handleOpenOutput}>
          <Stack direction="row" spacing={1}>
            <Iconify icon="pajamas:log" />
            Display output
          </Stack>
        </MenuItem>
        <MenuItem onClick={openSettingVSCode}>
          <Stack direction="row" spacing={1}>
            <Iconify icon="uil:setting" />
            Setting
          </Stack>
        </MenuItem>
      </Menu>
      <Button
        variant="contained"
        size="small"
        startIcon={
          <Iconify
            icon={loading ? 'line-md:loading-loop' : 'ri:save-line'}
            width={20}
          />
        }
        disabled={loading}
        onClick={saveFlowChart}
        sx={{
          height: '33px',
        }}
      >
        {wfInfo?.id ? 'Save change' : 'Create'}
      </Button>
    </Stack>
  );
};

const areEqual = (prevProps, nextProps) =>
  prevProps.wfInfo === nextProps.wfInfo &&
  prevProps.anchorMore === nextProps.anchorMore &&
  prevProps.saveFlowChart === nextProps.saveFlowChart &&
  prevProps.loading === nextProps.loading &&
  prevProps.canRedo === nextProps.canRedo &&
  prevProps.canUndo === nextProps.canUndo &&
  prevProps.idFlowChart === nextProps.idFlowChart &&
  prevProps.reactFlowInstance === nextProps.reactFlowInstance &&
  prevProps.runStatus === nextProps.runStatus;

export default memo(ButtonBar, areEqual);

ButtonBar.propTypes = {
  idFlowChart: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  wfInfo: PropTypes.object,
  runStatus: PropTypes.string,
  stopScript: PropTypes.func,
  handleRunningModel: PropTypes.func,
  handlePendingModel: PropTypes.func,
  handlePublishModel: PropTypes.func,
  handleUploadModel: PropTypes.func,
  handleResourceModel: PropTypes.func,
  handleVariableModel: PropTypes.func,
  handleRejectModel: PropTypes.func,
  onShareModel: PropTypes.func,
  onTableModal: PropTypes.func,
  undo: PropTypes.func,
  canUndo: PropTypes.bool,
  redo: PropTypes.func,
  canRedo: PropTypes.bool,
  anchorMore: PropTypes.any,
  setAnchorElMore: PropTypes.func,
  handleOpenOutput: PropTypes.func,
  openSettingVSCode: PropTypes.func,
  loading: PropTypes.bool,
  saveFlowChart: PropTypes.func,
  reactFlowInstance: PropTypes.any,
};
