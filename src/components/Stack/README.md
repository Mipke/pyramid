A simple wrapper around a vanilla div tag that takes care of spacing and alignment so that css doesn't have to be written to layout a 'stack' of components

Standard Stack:
```js
import dogNames from "dog-names";

<Stack>
    <div style={{backgroundColor: 'yellow'}}>{dogNames.allRandom()}</div>
    <div style={{backgroundColor: 'orange'}}>{dogNames.allRandom()}</div>
    <div style={{backgroundColor: 'lightgreen'}}>{dogNames.allRandom()}</div>
</Stack>
```

Centered Children:
```js
import dogNames from "dog-names";

<Stack centerItems={true}>
    <div style={{backgroundColor: 'yellow', width: 'fit-content'}}>{dogNames.allRandom()}</div>
    <div style={{backgroundColor: 'orange', width: 'fit-content'}}>{dogNames.allRandom()}</div>
    <div style={{backgroundColor: 'lightgreen', width: 'fit-content'}}>{dogNames.allRandom()}</div>
</Stack>
```

No Spacers:
```js
import dogNames from "dog-names";

<Stack spacerSize={'NONE'}>
    <div style={{backgroundColor: 'yellow'}}>{dogNames.allRandom()}</div>
    <div style={{backgroundColor: 'orange'}}>{dogNames.allRandom()}</div>
    <div style={{backgroundColor: 'lightgreen'}}>{dogNames.allRandom()}</div>
</Stack>
```

Manually specified, Manually specified w/ unit spacer sizes:
```js
import dogNames from "dog-names";
import { Grid } from '../Grid';
import { Unit } from '../../common/Unit';

<Grid columns={2}>
    <Stack spacerSize={12}>
        <div style={{backgroundColor: 'yellow'}}>{dogNames.allRandom()}</div>
        <div style={{backgroundColor: 'orange'}}>{dogNames.allRandom()}</div>
        <div style={{backgroundColor: 'lightgreen'}}>{dogNames.allRandom()}</div>
    </Stack>
    <Stack spacerSize={2} spacerUnit={Unit.REM}>
        <div style={{backgroundColor: 'yellow'}}>{dogNames.allRandom()}</div>
        <div style={{backgroundColor: 'orange'}}>{dogNames.allRandom()}</div>
        <div style={{backgroundColor: 'lightgreen'}}>{dogNames.allRandom()}</div>
    </Stack>
</Grid>
```
