import PropTypes from 'prop-types';

// @mui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import { Autocomplete, Button } from '@mui/material';
import { Fragment, useMemo } from 'react';
import eventBus from '../../event-bus';
import Iconify from '../../../components/iconify';
import { useBoolean } from '../../../hooks/use-boolean';
import { useAuthContext } from '../../../auth/hooks';
import Variables from '../../../components/variable';

// ----------------------------------------------------------------------

export default function GetHtmlContentForm({ formData, IdNode }) {
  const dataVariableModal = useBoolean();
  const { variableFlow } = useAuthContext();

  const fetchVariables = useMemo(() => {
    if (variableFlow?.list === null || variableFlow?.list?.length === 0)
      return [];

    return variableFlow?.list.map((i, index) => ({
      ...i,
      lastItem: index + 1 === variableFlow.list.length,
    }));
  }, [variableFlow?.list]);

  return (
    <Stack>
      <Typography
        sx={{
          fontSize: 16,
          fontStyle: 'italic',
        }}
        color="text.secondary"
      >
        {formData?.data?.description}
      </Typography>
      <Stack spacing={2} mt={2}>
        <Autocomplete
          name="variable_name"
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
            <TextField label="Biến nhận giá trị" {...params} />
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
                  width="100px"
                  onClick={() => {
                    dataVariableModal.onTrue();
                  }}
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
                width="100px"
                onClick={() => {
                  dataVariableModal.onTrue();
                }}
                startIcon={<Iconify icon="ion:create-outline" />}
              >
                Tạo biến mới
              </Button>
            </Stack>
          }
        />
      </Stack>
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

GetHtmlContentForm.propTypes = {
  formData: PropTypes.object,
  IdNode: PropTypes.string,
};
