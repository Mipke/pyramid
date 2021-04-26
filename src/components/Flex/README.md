A component to replace manually styling with css flexbox, which
helps cut down on the amount of manual flexbox styling required to
layout a page. In particular, this component is handy when placing items
next to each other without having to worry about spacing.

Horizontal Flex:
```js
import dogNames from "dog-names";

<Flex>
    <div style={{backgroundColor: 'yellow'}}>{dogNames.allRandom()}</div>
    <div style={{backgroundColor: 'orange'}}>{dogNames.allRandom()}</div>
    <div style={{backgroundColor: 'coral'}}>{dogNames.allRandom()}</div>
</Flex>
```

Vertical Flex:
```js
import { FlexDirection } from "./index";
import dogNames from "dog-names";

<Flex direction={FlexDirection.COLUMN}>
    <div style={{backgroundColor: 'yellow'}}>{dogNames.allRandom()}</div>
    <div style={{backgroundColor: 'orange'}}>{dogNames.allRandom()}</div>
    <div style={{backgroundColor: 'coral'}}>{dogNames.allRandom()}</div>
</Flex>
```

No Spacers:
```js
import dogNames from "dog-names";

<Flex spacerSize={'NONE'}>
    <div style={{backgroundColor: 'yellow'}}>{dogNames.allRandom()}</div>
    <div style={{backgroundColor: 'orange'}}>{dogNames.allRandom()}</div>
    <div style={{backgroundColor: 'coral'}}>{dogNames.allRandom()}</div>
</Flex>
```

Manually specified spacer size:
```js
import dogNames from "dog-names";

<Flex spacerSize={12}>
    <div style={{backgroundColor: 'yellow'}}>{dogNames.allRandom()}</div>
    <div style={{backgroundColor: 'orange'}}>{dogNames.allRandom()}</div>
    <div style={{backgroundColor: 'coral'}}>{dogNames.allRandom()}</div>
</Flex>
```

Manually specified spacer size with specified 'Unit':
```js
import dogNames from "dog-names";
import { Unit } from '../../common/Unit';

<Flex spacerSize={2} spacerUnit={Unit.REM}>
    <div style={{backgroundColor: 'yellow'}}>{dogNames.allRandom()}</div>
    <div style={{backgroundColor: 'orange'}}>{dogNames.allRandom()}</div>
    <div style={{backgroundColor: 'coral'}}>{dogNames.allRandom()}</div>
</Flex>
```

Complex Grouping Made Simple:
```js
import { JustifyContent } from './index';
import dogNames from "dog-names";

<Flex justifyContent={JustifyContent.SPACE_BETWEEN}>
    <Flex>
        <div style={{backgroundColor: 'yellow'}}>{dogNames.allRandom()}</div>
        <div style={{backgroundColor: 'orange'}}>{dogNames.allRandom()}</div>
        <div style={{backgroundColor: 'coral'}}>{dogNames.allRandom()}</div>
    </Flex>
    <Flex>
        <div style={{backgroundColor: 'lightgreen'}}>{dogNames.allRandom()}</div>
        <div style={{backgroundColor: 'lightblue'}}>{dogNames.allRandom()}</div>
        <div style={{backgroundColor: 'red'}}>{dogNames.allRandom()}</div>
    </Flex>
</Flex>
```
