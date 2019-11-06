### React App / GraphQL / Apollo Client

Apollo client caches requests when they are sent.

The Apollo Client cache does not automatically update.

We can do this is a few ways:
 - Poll the server (using poll interval as props to the query)
 - Specify that a query should be redone when a mutation takes places ( using the refetchQueries props)