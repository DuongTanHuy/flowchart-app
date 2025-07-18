import PropTypes from 'prop-types';

// @mui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { useEffect, useCallback, useState } from 'react';

import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
} from '@mui/material';

import { useBoolean } from '../../../hooks/use-boolean';
import eventBus from '../../event-bus';
import Iconify from '../../../components/iconify';
import { useSettingsContext } from '../../../components/settings';
import { LoadingScreen } from '../../../components/loading-screen';

// ----------------------------------------------------------------------

export default function CodeJavascriptForm({ formData, IdNode }) {
  const { themeMode } = useSettingsContext();
  const open = useBoolean();
  const [script] = useState(formData?.dataFields?.js_code ?? '');

  const renderEditor = useCallback(
    () => <LoadingScreen />,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [themeMode, open.value],
  );

  useEffect(
    () => () => {
      eventBus.emit('updateNode', {
        data: { js_code: script },
        idNode: IdNode,
      });
    },
    [IdNode, script],
  );

  return (
    <Stack sx={{ height: '470px' }} spacing={1}>
      <Typography
        sx={{
          fontSize: 16,
          fontStyle: 'italic',
        }}
        color="text.secondary"
      >
        {formData?.data?.description}
      </Typography>

      <Stack
        height={1}
        mb={2}
        sx={{
          position: 'relative',
          borderRadius: 1,
          overflow: 'hidden',
          boxShadow: (theme) => theme.customShadows.z8,
        }}
      >
        <IconButton
          sx={{
            position: 'absolute',
            bottom: 8,
            right: 20,
            zIndex: 1,
            borderRadius: 1,
            padding: 0.5,
          }}
          onClick={open.onTrue}
        >
          <Iconify icon="mdi-light:fullscreen" width={24} />
        </IconButton>
        {!open.value && renderEditor()}
      </Stack>

      <Dialog open={open.value} onClose={open.onFalse} fullScreen>
        <DialogTitle>
          <Stack spacing={1}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h5">Mã Javascript</Typography>
              <IconButton onClick={open.onFalse}>
                <Iconify icon="ic:round-close" />
              </IconButton>
            </Stack>
            <Divider />
          </Stack>
        </DialogTitle>
        <DialogContent sx={{ pb: 3 }}>
          <Stack
            sx={{
              height: 1,
              borderRadius: 1,
              overflow: 'hidden',
              boxShadow: (theme) => theme.customShadows.z8,
            }}
          >
            {open.value && renderEditor()}
          </Stack>
        </DialogContent>
      </Dialog>
    </Stack>
  );
}

CodeJavascriptForm.propTypes = {
  formData: PropTypes.object,
  IdNode: PropTypes.string,
};
