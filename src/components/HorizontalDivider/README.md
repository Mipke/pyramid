A simple component to drop in a horizontal divider with empty space on top and bottom between other components

NONE, VERY SMALL, SMALL, MEDIUM, LARGE, VERY LARGE Spacer Sizes:
```js
import dogNames from "dog-names";
import { Grid } from '../Grid';
import { Size } from '../../common/Size';

<Grid columns={6}>
    <div>
        <div style={{backgroundColor: 'lightgreen'}}>{dogNames.allRandom()}</div>
        <HorizontalDivider spacerSize={'NONE'} />
        <div style={{backgroundColor: 'lightgreen'}}>{dogNames.allRandom()}</div>
    </div>
    <div>
        <div style={{backgroundColor: 'lightgreen'}}>{dogNames.allRandom()}</div>
        <HorizontalDivider spacerSize={Size.VERY_SMALL} />
        <div style={{backgroundColor: 'lightgreen'}}>{dogNames.allRandom()}</div>
    </div>
    <div>
        <div style={{backgroundColor: 'lightgreen'}}>{dogNames.allRandom()}</div>
        <HorizontalDivider spacerSize={Size.SMALL} />
        <div style={{backgroundColor: 'lightgreen'}}>{dogNames.allRandom()}</div>
    </div>
    <div>
        <div style={{backgroundColor: 'lightgreen'}}>{dogNames.allRandom()}</div>
        <HorizontalDivider spacerSize={Size.MEDIUM} />
        <div style={{backgroundColor: 'lightgreen'}}>{dogNames.allRandom()}</div>
    </div>
    <div>
        <div style={{backgroundColor: 'lightgreen'}}>{dogNames.allRandom()}</div>
        <HorizontalDivider spacerSize={Size.LARGE} />
        <div style={{backgroundColor: 'lightgreen'}}>{dogNames.allRandom()}</div>
    </div>
    <div>
        <div style={{backgroundColor: 'lightgreen'}}>{dogNames.allRandom()}</div>
        <HorizontalDivider spacerSize={Size.VERY_LARGE} />
        <div style={{backgroundColor: 'lightgreen'}}>{dogNames.allRandom()}</div>
    </div>
</Grid>
```

Manually specified, Manually specified w/ unit Spacer Sizes:
```js
import dogNames from "dog-names";
import { Grid } from '../Grid';
import { Size } from '../../common/Size';
import { Unit } from '../../common/Unit';

<Grid columns={2}>
    <div>
        <div style={{backgroundColor: 'lightgreen'}}>{dogNames.allRandom()}</div>
        <HorizontalDivider spacerSize={12} />
        <div style={{backgroundColor: 'lightgreen'}}>{dogNames.allRandom()}</div>
    </div>
    <div>
        <div style={{backgroundColor: 'lightgreen'}}>{dogNames.allRandom()}</div>
        <HorizontalDivider spacerSize={2} spacerUnit={Unit.REM} />
        <div style={{backgroundColor: 'lightgreen'}}>{dogNames.allRandom()}</div>
    </div>
</Grid>
```
