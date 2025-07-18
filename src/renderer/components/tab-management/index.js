import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  IconButton,
  InputAdornment,
  MenuItem,
  Stack,
  TextField,
  Typography,
  alpha,
} from '@mui/material';
import { ReactSortable } from 'react-sortablejs';

import Iconify from '../iconify';
import { usePopover } from '../custom-popover';
import CustomPopover from '../custom-popover/custom-popover';
import { ConfirmDialog } from '../custom-dialog';
import SvgColor from '../svg-color';
import { useSettingsContext } from '../settings';
import Label from '../label';
import { initialGroup } from '../../sections/variables-template/mock';
import eventBus from '../../sections/event-bus';
import { useParams, useRouter, useSearchParams } from '../../routes/hooks';
import { useBoolean } from '../../hooks/use-boolean';
import LogoIcon from '../../assets/icons/logo-icon';

export default function TabManagement({ FlowCreate }) {
  const getId = () => `${Date.now()}${Math.floor(Math.random() * 10000)}`;
  const route = useRouter();
  const popover = usePopover();
  const recentPopover = usePopover();
  const { themeMode } = useSettingsContext();
  const [listWorkFlow] = useState([]);
  const leave = useBoolean();
  const [closeTabId, setCloseTabId] = useState(null);
  const param = useParams();
  const idFlowChart = param?.id;
  const searchParams = useSearchParams();
  const isEncrypted = searchParams.get('is_encrypted');
  const [search] = useState('');

  const [tabs, setTabs] = useState([]);

  const activeTab = tabs.find((tab) => tab.isActive);

  const handleTabClick = (id) => {
    eventBus.emit('change-tab');

    setTabs((prev) => prev.map((tab) => ({ ...tab, isActive: tab.id === id })));
  };

  const handleCloseTab = () => {
    leave.onFalse();
    const updatedTabs = tabs.filter((tab) => tab.id !== closeTabId);
    if (updatedTabs.length === 0) {
      route.back();
      return;
    }
    if (updatedTabs.length > 0 && !updatedTabs.some((tab) => tab.isActive)) {
      updatedTabs[0].isActive = true;
    }
    setTabs(updatedTabs);
  };

  const handleAddTab = () => {
    eventBus.emit('change-tab');
    const newTab = {
      id: getId(),
      title: `workflow ${tabs.length + 1}`,
      data: {
        nodes: [
          {
            id: 'start_node',
            type: 'start',
            data: {
              name: 'Start',
              icon: 'solar:play-bold',
              alias: 'start_node',
            },
            position: { x: 100, y: document.body.clientHeight / 2 - 80 },
          },
        ],
        edges: [],
        variables: [],
        table: [],
        designData: initialGroup,
        outputLogs: [],
        hasData: true,
      },
      isActive: true,
    };

    setTabs((prev) =>
      prev.map((tab) => ({ ...tab, isActive: false })).concat(newTab),
    );
  };

  const handleOpenRecent = (workflowInfo) => {
    eventBus.emit('change-tab');
    const newTab = {
      id: getId(),
      title: workflowInfo?.name,
      data: {
        workflowName: workflowInfo?.name,
        idFlowChart: workflowInfo?.id,
      },
      isActive: true,
    };

    setTabs((prev) =>
      prev.map((tab) => ({ ...tab, isActive: false })).concat(newTab),
    );
  };

  useEffect(() => {
    const handleSaveTabData = (tabData) => {
      const { id, data } = tabData;
      setTabs(
        tabs.map((tab) =>
          tab.id === id ? { ...tab, data: { ...tab.data, ...data } } : tab,
        ),
      );
    };

    eventBus.on('saveTabData', handleSaveTabData);
    return () => {
      eventBus.removeListener('saveTabData', handleSaveTabData);
    };
  }, [tabs]);

  useEffect(() => {
    setTabs([
      {
        id: getId(),
        title: 'workflow 1',
        data: {
          nodes: [
            {
              id: 'start_node',
              type: 'start',
              data: {
                name: 'Start',
                icon: 'solar:play-bold',
                alias: 'start_node',
              },
              position: { x: 100, y: document.body.clientHeight / 2 - 80 },
            },
          ],
          edges: [],
          variables: [],
          table: [],
          designData: initialGroup,
          outputLogs: [],
          hasData: true,
          ...(idFlowChart && {
            isEncrypted,
            idFlowChart,
            hasData: false,
          }),
        },
        isActive: true,
      },
    ]);
  }, [idFlowChart, isEncrypted]);

  return (
    <>
      <Stack
        sx={{
          height: 'calc(100% - 8px)',
          position: 'relative',
        }}
      >
        <Stack direction="row" spacing={1} alignItems="start">
          {/* <Button
            variant="outlined"
            startIcon={<Iconify icon="gg:log-out" />}
            sx={{
              mt: '2px',
              height: '33px',
              width: '120px',
              minWidth: '110px',
              bgcolor: (theme) =>
                alpha(theme.palette.grey[themeMode === 'dark' ? 900 : 300], 1),
            }}
            className="no-select"
          >
            Back
          </Button> */}
          <Stack
            direction="row"
            spacing={1}
            sx={{
              pb: 1,
              px: 1,
              width: 'calc(100% - 500px)',
              height: 44.95,
              userSelect: 'none',
              whiteSpace: 'nowrap',
              overflowX: 'auto',
              overflowY: 'hidden',
              scrollbarColor: 'auto',
              '&::-webkit-scrollbar': {
                height: '2px',
              },
            }}
          >
            <ReactSortable
              style={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                flexShrink: 0,
              }}
              list={tabs ?? []}
              setList={(newChildren) => {
                setTabs(newChildren);
              }}
              group={{
                name: 'nested',
                pull: true, // Cho phép kéo từ ruleset
                put: true, // Cho phép thả vào ruleset
              }}
              animation={150}
              fallbackOnBody
              dragHandleClass="drag-handle"
              swapThreshold={6.5}
            >
              {tabs.map((tab) => (
                <Stack
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{
                    width: 'fit-content',
                    maxWidth: 200,
                    cursor: 'pointer',
                    height: 32.95,
                    px: 1,
                    position: 'relative',
                    backgroundColor: (theme) =>
                      alpha(
                        theme.palette.grey[themeMode === 'dark' ? 400 : 600],
                        0.08,
                      ),
                    borderRadius: '4px',
                    color: 'text.secondary',
                    boxShadow: `inset 0 1px 1px 0 rgba(199, 211, 234, 0.12), 0 3px 6px 0 rgba(6, 6, 14, ${
                      themeMode === 'dark' ? 0.7 : 0.2
                    })`,

                    '&:hover': {
                      borderRadius: '100px',
                      color: 'text.primary',
                      boxShadow: `inset 0 1px 1px 0 rgba(199, 211, 234, 0.12), inset 0 3px 6px 0 rgb(199, 211, 234, 0.05), 0 3px 6px 0 rgba(6, 6, 14, ${
                        themeMode === 'dark' ? 0.7 : 0.2
                      })`,
                    },

                    ...(tab.isActive && {
                      backgroundColor: (theme) =>
                        alpha(
                          theme.palette.grey[themeMode === 'dark' ? 400 : 600],
                          0.08,
                        ),
                      borderRadius: '100px',
                      color: 'text.primary',
                      boxShadow: `inset 0 1px 1px 0 rgba(199, 211, 234, 0.12), inset 0 3px 6px 0 rgb(199, 211, 234, 0.05), 0 3px 6px 0 rgba(6, 6, 14, ${
                        themeMode === 'dark' ? 0.7 : 0.2
                      })`,
                    }),
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    justifyContent="flex-start"
                    zIndex={1}
                    sx={{
                      width: 'calc(100% - 32px)',
                    }}
                  >
                    <LogoIcon />
                    <Typography
                      variant="button"
                      sx={{
                        width: 1,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whileSpace: 'nowrap',
                      }}
                      title={tab?.data?.workflowName ?? tab.title}
                    >
                      {tab?.data?.workflowName ?? tab.title}
                    </Typography>
                  </Stack>

                  <IconButton
                    sx={{
                      p: 0.5,
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setCloseTabId(tab.id);
                      leave.onTrue();
                    }}
                  >
                    <SvgColor
                      src="/assets/icons/components/ic_close.svg"
                      sx={{ width: 16, height: 16 }}
                    />
                  </IconButton>
                </Stack>
              ))}
            </ReactSortable>

            <IconButton
              onClick={popover.onOpen}
              sx={{
                mt: '2px',
                p: 0.5,
                width: 32.95,
                height: 32.95,
                borderRadius: 0.5,
                backgroundColor: (theme) =>
                  alpha(
                    theme.palette.grey[themeMode === 'dark' ? 400 : 600],
                    0.08,
                  ),
                boxShadow: `inset 0 1px 1px 0 rgba(199, 211, 234, 0.12), inset 0 6px 12px 0 rgb(199, 211, 234, 0.05), 0 6px 12px 0 rgba(6, 6, 14, ${
                  themeMode === 'dark' ? 0.7 : 0.2
                })`,
              }}
            >
              <Iconify icon="majesticons:plus" />
            </IconButton>
          </Stack>
        </Stack>
        <FlowCreate tabData={activeTab?.data} tabId={activeTab?.id} />
      </Stack>

      <CustomPopover
        open={popover.open}
        onClose={(event) => {
          event.stopPropagation();
          popover.onClose();
        }}
        sx={{
          width: 'fit-content',
        }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem
          onClick={() => {
            handleAddTab();
            popover.onClose();
          }}
        >
          <Iconify
            icon="basil:add-outline"
            sx={{
              mr: '4px!important',
            }}
          />
          Add new
        </MenuItem>
        <MenuItem
          onClick={(e) => {
            recentPopover.onOpen(e);
          }}
        >
          <Iconify
            icon="fluent:open-12-regular"
            sx={{
              mr: '4px!important',
            }}
          />
          Open workflow
          <Iconify
            icon="mingcute:right-line"
            sx={{
              mr: '0px!important',
              ml: '4px!important',
            }}
          />
        </MenuItem>
      </CustomPopover>
      <CustomPopover
        open={recentPopover.open}
        onClose={(event) => {
          event.stopPropagation();
          recentPopover.onClose();
        }}
        sx={{
          width: 360,
          overflowY: 'auto',
        }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <TextField
          autoFocus
          size="small"
          fullWidth
          value={search}
          placeholder="Search..."
          sx={{
            p: 0.5,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Iconify
                  icon="eva:search-fill"
                  sx={{ color: 'text.disabled' }}
                />
              </InputAdornment>
            ),
            endAdornment: (
              <>
                {search ? (
                  <Iconify
                    icon="carbon:close-outline"
                    sx={{
                      color: 'text.disabled',
                      '&:hover': { cursor: 'pointer', color: 'white' },
                    }}
                  />
                ) : null}
              </>
            ),
          }}
        />

        <Stack
          sx={{
            maxHeight: '60vh',
            overflowX: 'hidden',
            overflowY: 'auto',
          }}
        >
          {listWorkFlow.filter((item) => item.display).length === 0 ? (
            <Typography
              textAlign="center"
              color="text.secondary"
              variant="body2"
              sx={{
                my: 2,
              }}
            >
              No data
            </Typography>
          ) : (
            listWorkFlow
              .filter((item) => item.display)
              .map((item) => (
                <MenuItem
                  key={item.id}
                  disabled={item.is_encrypted}
                  onClick={() => {
                    if (
                      tabs.some(
                        (tab) =>
                          String(tab.data.idFlowChart) === String(item.id),
                      )
                    ) {
                      handleTabClick(
                        tabs.find(
                          (tab) =>
                            String(tab.data.idFlowChart) === String(item.id),
                        ).id,
                      );
                    } else {
                      handleOpenRecent(item);
                    }
                    popover.onClose();
                    recentPopover.onClose();
                  }}
                >
                  <Label
                    color={item.is_downloaded ? 'info' : 'primary'}
                    sx={{
                      flexShrink: 0,
                      mr: 1,
                    }}
                  >
                    <Typography variant="caption" fontWeight="bold">{`${
                      item.is_downloaded ? 'Downloaded' : 'Mine'
                    }`}</Typography>
                  </Label>
                  {item.is_encrypted && (
                    <Iconify
                      icon="ic:outline-lock"
                      width={16}
                      sx={{ mr: '4px!important' }}
                    />
                  )}
                  <Typography
                    title={item?.name}
                    variant="body2"
                    sx={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {item?.name}
                  </Typography>
                </MenuItem>
              ))
          )}
        </Stack>
      </CustomPopover>

      <ConfirmDialog
        maxWidth="xs"
        open={leave.value}
        onClose={leave.onFalse}
        closeButtonName="No"
        title={
          <Typography variant="h5">
            Do you want to close this workflow?
          </Typography>
        }
        sx={{
          '& .MuiDialogActions-root': {
            pt: 0,
          },
        }}
        action={
          <Button variant="contained" color="primary" onClick={handleCloseTab}>
            Yes
          </Button>
        }
      />
    </>
  );
}

TabManagement.propTypes = {
  FlowCreate: PropTypes.any,
};
