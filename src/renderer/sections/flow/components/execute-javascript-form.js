import PropTypes from 'prop-types';

// @mui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Fragment, useEffect, useMemo, useCallback, useState } from 'react';

import {
  Autocomplete,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  TextField,
} from '@mui/material';
import eventBus from '../../event-bus';
import Iconify from '../../../components/iconify';
import { useBoolean } from '../../../hooks/use-boolean';
import { useAuthContext } from '../../../auth/hooks';
import Variables from '../../../components/variable';
import { useSettingsContext } from '../../../components/settings';
import { LoadingScreen } from '../../../components/loading-screen';

// ----------------------------------------------------------------------

export default function ExecuteJavascriptForm({ formData, IdNode }) {
  const { themeMode } = useSettingsContext();
  const dataVariableModal = useBoolean();
  const { variableFlow } = useAuthContext();
  const open = useBoolean();
  const [script] = useState(formData?.dataFields?.script ?? '');

  const fetchVariables = useMemo(() => {
    if (!variableFlow?.list?.length) return [];
    return variableFlow.list.map((i, index) => ({
      ...i,
      lastItem: index + 1 === variableFlow.list.length,
    }));
  }, [variableFlow?.list]);

  const renderEditor = useCallback(
    () => <LoadingScreen />,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [themeMode, open.value],
  );

  useEffect(
    () => () => {
      eventBus.emit('updateNode', { data: { script }, idNode: IdNode });
    },
    [IdNode, script],
  );

  return (
    <Stack sx={{ height: '470px' }} spacing={1}>
      <Stack>
        <Typography
          sx={{ fontSize: 16, fontStyle: 'italic' }}
          color="text.secondary"
        >
          {formData?.data?.description}
        </Typography>
        <Typography
          sx={{ fontSize: 14, fontStyle: 'italic', mt: 1 }}
          color="text.secondary"
        >
          * Sử dụng constant VARIABLE để truy cập vào các biến, ví dụ
          VARIABLE.name để truy cập biến &quot;name&quot;.
        </Typography>
      </Stack>

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

      <Autocomplete
        name="variable_name"
        disablePortal
        id="combo-box-demo"
        onChange={(_, newValue) => {
          eventBus.emit('updateNode', {
            data: { variable_name: newValue?.key },
            idNode: IdNode,
          });
        }}
        value={formData?.dataFields?.variable_name || null}
        getOptionLabel={(option) => option.key || option || ''}
        options={fetchVariables || []}
        isOptionEqualToValue={(option, value) => option.key === value}
        renderInput={(params) => (
          <TextField label="Biến nhận dữ liệu" {...params} />
        )}
        renderOption={(props, option) => (
          <Fragment key={option.id}>
            <Stack
              component="li"
              {...props}
              direction="row"
              justifyContent="flex-start"
            >
              {option.key}
            </Stack>
            <Stack className="add-new-element-variable" p={1}>
              <Button
                variant="outlined"
                size="small"
                onClick={dataVariableModal.onTrue}
                startIcon={<Iconify icon="ion:create-outline" />}
              >
                Tạo biến mới
              </Button>
            </Stack>
          </Fragment>
        )}
        noOptionsText={
          <Stack spacing={1}>
            <Typography variant="body2">No options</Typography>
            <Button
              variant="outlined"
              size="small"
              onClick={dataVariableModal.onTrue}
              startIcon={<Iconify icon="ion:create-outline" />}
            >
              Tạo biến mới
            </Button>
          </Stack>
        }
      />

      <Dialog open={open.value} onClose={open.onFalse} fullScreen>
        <DialogTitle sx={{ pb: 2 }}>
          <Stack spacing={1}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h5">Javascript code</Typography>
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
            <Typography
              sx={{ fontSize: 14, fontStyle: 'italic', my: 1 }}
              color="text.secondary"
            >
              * Sử dụng constant VARIABLE để truy cập vào các biến, ví dụ
              VARIABLE.name để truy cập biến &quot;name&quot;.
            </Typography>
            {open.value && renderEditor()}
          </Stack>
        </DialogContent>
      </Dialog>

      <Variables
        addOne
        open={dataVariableModal.value}
        onClose={dataVariableModal.onFalse}
        updateVariableAction={(key) => {
          eventBus.emit('updateNode', {
            data: { variable_name: key },
            idNode: IdNode,
          });
        }}
      />
    </Stack>
  );
}

ExecuteJavascriptForm.propTypes = {
  formData: PropTypes.object,
  IdNode: PropTypes.string,
};
