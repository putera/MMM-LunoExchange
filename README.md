# MMM-LunoExchange
A MagicMirror² Module for retrieve Luno Exchange Market

## Installation
1. Navigate into your MagicMirror's `modules` folder
2. Execute `git clone https://github.com/putera/MMM-LunoExchange.git`

## Using the module
To use this module, add it to the modules array in the `config/config.js` file:

```javascript
modules: [
    {
        module: 'MMM-LunoExchange',
        position: 'top_left',
        config: {
            // See 'Configuration options' for more information.
            currency: 'MYR',
            refreshTime: 5,     // update interval price in minutes
            language: 'ms-my'
        }
    }
]
```

## Configuration Options
The following properties can be configured:

| **Option** | **Description** |
| --- | --- |
| `currency` | Your currency exchange code |
| `refreshTime` | Refresh interval time to get the price from Xapo |
| `language` | Language you are using |
| `animationSpeed` | Fade animation in miliseconds |
