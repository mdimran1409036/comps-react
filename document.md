## Table requirements:

    1. variable number of rows
    2. variable number of columns
    3. Number columns doesn't have to be match of number properties in object
    4. some columns are sortable but not all of them
    5. sortable columns can sort different kind of values
    6. cells can be calculated using multiple properties
    7. cells can display arbitrary data


    ### Solution:

        1. We may introduce a config array of object with each columns label and other properties like sort

        ```
            const config=[

                    {label:"Name", render: fruit=> fruit.score, sort:(a,b)=> /* code to implement */},
                    {label:"Color", render: fruit=> fruit.score, sort:(a,b)=> /* code to implement */},
                    {label:"Score", render: fruit=> fruit.score, sort:(a,b)=> /* code to implement */},
                ]

        ```

## How naviagation works with SPA:

    1. User types our address in adrees bar
        - always send back the index.html file
        - when app loads up look at the address bar & use it to decide whatcontent to show
    2. User clicks a link or press back button
        - stop the browsers default page switcing behaviour i.e. reloading the page
        - figure out where the t=user was trying to go
        - update content on thbe screen to trick the user into thinking they swapped pages
        - update address bar to trick the user into thinking they swapped pages

## Button theory:

    1. Creating a single button component
    2. Don't make html '<button></button>' element across the apps
    3. No custom css only presets
    4. All buttons will be styled based on the purpose/intent(i.e. primary, secondary, warning, danger, outline, rounded etc) of the button

## Designing state:

    1. Application state(context)
        - Data that is used  by many different components
    2. Component state
        - Data that is used by very few components

    Both of these are still the same exact state we've been workign with. These terms are way to figure out how to best design our states

## Key things to rememeber:

    1. Never update local state with local data. User the response from server, then based on the response update the local data. Thus both frontend and db data will be synched.\

    2. Never mutate state. Instead replace them with new values. Thus React will know that it's state has been updated & it will update it's DoM cotentent by re-rendering the component

    3. Context is not a replacement for props

    4. Context is not a replacement for
