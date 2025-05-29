# Notes

<>
    This fragment is used to render multiple components.
</>

Always write component name in capital.

In vite we always use .jsx

## REact Open Source Library

<https://github.com/facebook/react/tree/main>

UI Updation control by React

## Hook

Hooks are special functions in React that let you use features like state (a way to remember things) and do things when your component loads or updates, all from within function components.

    `useState()` allows functional components to manage their own state. It returns an array containing the current state value and a function to update it.

    `useEffect()` enables functional components to perform side effects, such as data fetching, subscriptions, or DOM manipulations. It runs after every render and can be configured to run conditionally.

    `useContext()` allows functional components to access values from React Context, enabling them to consume shared data across the component tree.

## Virtual DOM

The virtual DOM is a lightweight copy of the real DOM that allows React to manage changes more efficiently by minimizing the direct manipulation required on the real DOM. This process significantly enhances the performance of web apps.

## React Fiber

React Fiber is an ongoing implementation of React's core algorithms. It is the culmination of over two year of research by the React team.
The goal of React fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

Advantages of Fiber

    - Pause work and come back to it later.
    - Assign priority to different types of work.
    - Reuse previously completed work.
    - Abort work if it's no longer needed.

## What is Reconciliation?

The algorithm React uses to differentiate one tree with another to determine which parts need to be changed.

### update

A change in the data used to render a React app. Usually the result of `setState`. Eventually result in a re-render.

`Reconciliation` is the algorithm behind what is popularly understood as the "Virtual DOM".

Diifing of lists is performed using keys, Keys should be "stable, predicatable, and unique."
