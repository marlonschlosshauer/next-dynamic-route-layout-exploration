This is a [Next.js](https://nextjs.org) bla bla, just run `npm run dev`. You know the deal by now.

## Explanation

If you put a layout in a dynamic route it will re-render on navigation. In the latest commit (6b0356f6a8725553e10535581a4130c79500d333 and above), if you navigate between: 

http://localhost:3000/pokemon/one

and 

http://localhost:3000/pokemon/two

You will see the pokemons triggering the "loading..." fallback of the suspense (again). That is despite them being part of a layout! 

## More

- [Link to Next.js issue with explanation by maintainer](https://github.com/vercel/next.js/issues/48082#issuecomment-1540060041).
- In the previous commits (0eb43a3e9aff18b01e2a33bfc1c886ea313d56a6 and below) you can see that the Suspense fallback has **not** been triggered if you navigate, as the layout is not part of a dynamic route
- Because the layout unmounts, state is also lost!
