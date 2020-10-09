A simple component to drop in a horizontal divider with empty space on top and bottom between other components

XS, SM, MD, LG Spacer Sizes:
```js
import dogNames from "dog-names";
import Grid from '../Grid';
import { Size } from '../../common/Size';

<Grid columns={5}>
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
        <HorizontalDivider />
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
