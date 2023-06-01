## Redux:

    click button -> dispatch action -> logging(for debugging)-> reducer -> change state(immer)

    why this pattern is so popular:
        1. dispatch fynction - central point of initiating any change of state
        2. logging 

## useReducer hook

    1. Alternative to useState
    2. Produces state
    3. Changing this state makes component rerender
    4. Useful when you have several different closely-related pieces of state
    5. Useful when future state values depend on the current state

    Rules of reducer function:

        i. Whatever is returned from reducer function will be the new state
        ii. if the return value is nothing, state will be undefined
        iii. No async/await, no requests, no promises, no outside variables are allowdd
        iv. Never mutate state inside reducer functions


    DESIGN CONSIDERATIONS:

        1. Usually makes more sense to stuff logic into the reducer and keep dispatched simple
        2. Less duplicated code if you need to dispatch the same action in multiple places
        3. Part of the goal of reducers is to have a very specific set of ways that state can be changed

## custom hooks: why

    1. Functions that contains some resuable logic
    2. Custom hooks usually reuse built-in-hooks(like useState, useEffect)
    3. Usually easiest to extract logic into a hook rather than making a hook first

## Code in table component with --optional --sorting added

    1. State to track sorting stuff
    2. Function to handle click on a header
        - only hanlde click if sorting enabled
    3. Rendering headers
    4. If sorting enabled
        -Sorting logic
    5. Rendering rows
    6. Asseble and return the table

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
