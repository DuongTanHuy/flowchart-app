import { IconButton, Stack, Tooltip, Typography } from '@mui/material';
import { STYLE_ITEM } from '../constants';
import Iconify from '../../../components/iconify';

const PropTypes = require('prop-types');

const WithSectionAction = ({
  children,
  data,
  isActive,
  onDuplicate,
  onDelete,
  isError,
}) => {
  return (
    <>
      <Stack
        id="wrapper-content"
        sx={{
          ...STYLE_ITEM,
          // eslint-disable-next-line no-nested-ternary
          borderColor: isError
            ? 'error.main'
            : isActive
            ? 'primary.main'
            : 'lightgray',
          mb: isError ? 0 : '10px',
        }}
      >
        {children}
        {isActive && (
          <Stack
            direction="row"
            sx={{
              position: 'absolute',
              bottom: '-5px',
              right: '0',
            }}
          >
            <Tooltip title="Nhân bản" placement="top">
              <IconButton
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (data.id) {
                    onDuplicate(data.id);
                  }
                }}
              >
                <Iconify
                  icon="humbleicons:duplicate"
                  color="#0d936e"
                  sx={{
                    zIndex: -1,
                  }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="Xóa" placement="top">
              <IconButton
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (data.id) {
                    onDelete(data.id);
                  }
                }}
              >
                <Iconify
                  icon="material-symbols-light:delete-outline"
                  color="#0d936e"
                  sx={{
                    zIndex: -1,
                  }}
                />
              </IconButton>
            </Tooltip>
          </Stack>
        )}
      </Stack>
      {isError && (
        <Typography
          color="error.main"
          variant="caption"
          sx={{
            mb: '10px',
            fontWeight: 400,
          }}
        >
          Missing variable
        </Typography>
      )}
    </>
  );
};

WithSectionAction.propTypes = {
  data: PropTypes.object,
  children: PropTypes.node,
  isActive: PropTypes.bool,
  isError: PropTypes.bool,
  onDelete: PropTypes.func,
  onDuplicate: PropTypes.func,
};

export default WithSectionAction;
