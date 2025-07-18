import { Slider, Stack, TextField, Typography } from '@mui/material';
import WithSectionAction from '../components/WithSelectionAction';

const PropTypes = require('prop-types');

const RangeContent = ({
  data,
  selectingItem,
  onDuplicate,
  onDelete,
  updateItemByField = () => {},
  isMissingVariable,
}) => (
  <WithSectionAction
    data={data}
    isActive={data.id === selectingItem?.id}
    onDuplicate={onDuplicate}
    onDelete={onDelete}
    isError={isMissingVariable && onDelete}
  >
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      sx={{
        ...data?.styleDefault,
        width: '100%',
        overflow: 'visible',
        height: `${data?.config?.height}px`,
        transition: 'all 0.3s',
      }}
    >
      {!data?.config?.hideLabel && (
        <Typography
          sx={{
            minWidth: '100px',
            width: `${data?.config?.labelWidth}px`,
            transition: 'all 0.3s',
            flexShrink: 0,
          }}
        >
          {data?.config?.name}
        </Typography>
      )}

      {data?.config?.type === 'slider' ? (
        <Slider
          orientation={data?.config?.vertical ? 'vertical' : 'horizontal'}
          valueLabelDisplay={data?.config?.tooltip ? 'auto' : 'off'}
          value={[
            Number(data?.config?.defaultMax),
            Number(data?.config?.defaultMin),
          ]}
          onChange={(_, value, index) => {
            if (index === 0) updateItemByField(data, 'defaultMin', value[0]);
            else updateItemByField(data, 'defaultMax', value[1]);
          }}
          marks={
            data?.config?.marks && Number(data?.config?.step)
              ? Array.from(
                  {
                    length:
                      Math.floor(
                        (Number(data?.config?.rangeMax) -
                          Number(data?.config?.rangeMin)) /
                          Number(data?.config?.step),
                      ) + 1,
                  },
                  (_, index) => {
                    const value = index * Number(data?.config?.step);
                    return { value, label: value };
                  },
                )
              : false
          }
          step={Number(data?.config?.step)}
          min={Number(data?.config?.rangeMin)}
          max={Number(data?.config?.rangeMax)}
          sx={{
            transition: 'all 0.3s',
            m: 0,
            mx: 1,
            ...(data?.config?.marks && {
              py: 3,
            }),
            ...(data?.config?.reverse && {
              '& .MuiSlider-rail': {
                opacity: 1,
              },
            }),
            ...(data?.config?.vertical && {
              my: 1,
              mx: 0,
              height: `calc(${data?.config?.height}px - 20px)`,
            }),
            '& input[type="range"]': {
              WebkitAppearance: `slider-${
                data?.config?.vertical ? 'vertical' : 'horizontal'
              }`,
            },
            ...(data?.config?.width
              ? {
                  width: `${data?.config?.width}px`,
                }
              : {
                  flex: 1,
                }),
          }}
        />
      ) : (
        <Stack direction="row" spacing={2}>
          <TextField
            fullWidth
            size="small"
            type="number"
            label={data?.config?.minLabel || 'Min'}
            placeholder="Enter value"
            value={data?.config?.defaultMin}
            onChange={(e) => {
              updateItemByField(data, 'defaultMin', e.target.value);
            }}
            // error={validateError}

            inputProps={{
              readOnly: !updateItemByField,
              autoCorrect: 'off',
              spellCheck: 'false',
              autoCapitalize: 'none',
              'aria-autocomplete': 'none',
              'aria-expanded': false,
            }}
          />

          <TextField
            fullWidth
            size="small"
            type="number"
            label={data?.config?.maxLabel || 'Max'}
            placeholder="Enter value"
            value={data?.config?.defaultMax}
            onChange={(e) => {
              updateItemByField(data, 'defaultMax', e.target.value);
            }}
            // error={validateError}

            inputProps={{
              readOnly: !updateItemByField,
              autoCorrect: 'off',
              spellCheck: 'false',
              autoCapitalize: 'none',
              'aria-autocomplete': 'none',
              'aria-expanded': false,
            }}
          />
        </Stack>
      )}
    </Stack>
  </WithSectionAction>
);

RangeContent.propTypes = {
  data: PropTypes.object,
  selectingItem: PropTypes.object,
  onDuplicate: PropTypes.func,
  onDelete: PropTypes.func,
  updateItemByField: PropTypes.func,
  isMissingVariable: PropTypes.bool,
};

export default RangeContent;
