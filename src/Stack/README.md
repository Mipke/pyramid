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

<Stack spacers={false}>
    <div style={{backgroundColor: 'yellow'}}>{dogNames.allRandom()}</div>
    <div style={{backgroundColor: 'orange'}}>{dogNames.allRandom()}</div>
    <div style={{backgroundColor: 'lightgreen'}}>{dogNames.allRandom()}</div>
</Stack>
```
