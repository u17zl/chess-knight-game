# chess-knight-game

A Chess Knight game by React.js and Ruby on Rails
[Live Demo (https://u17zl.github.io/chess-knight-game)](https://u17zl.github.io/chess-knight-game)  
this demo is not supported by depolyed backend, you should download it and run by yourself

## How to run

```sh
// frontend part
cd chess-knight-game
cd client
npm install
npm start

// unit test
npm run test
```

then you can access `127.0.0.1:3000` to see frontend page

```sh
// backend part
cd chess-knight-game
cd server
bundle i
rails s -p 4000
```

Default port changed from `3000` to `4000` to aviod port conflict.  
Backend router `127.0.0.1:4000/api/chess/helps`

## Tech Stacks

- React.js
- React.js Hooks
- Scss
- Bootstrap4
- Jest
- Enzyme
- Ruby on Rails
- Breadth First Search(Shortest Path)

## Highlights & Challenges

- First time touching Ruby and Ruby on Rails and I am be able to pick it up quickliy, basically because this Framework has many points in common with another framework like Laravel I used before (MVC pattern)
- I applied Breadth First Search algorithm to find the path to target.
- Because this task do not need too much nested components, so I did not use Redux, if components have shared state and need to pass to very deep components, Redux is the better choice.
- TDD/Unit Testing can ensure a componennt works when other people modify it, which is very helpful in team development and collaboration.
- Still interested in this Ruby on Rails, and want to learn more about this cool framework.
- Tried to depoly it on AWS EC2/ElasticBeanstalk, but faced with some database and version issues. Because this is the first time I was trying to depoly Ruby on Rails with limited time.

## To Do

- [ ] Backend deploymnet
- [ ] Anitmation when piece moving
- [ ] Learn more Knowledge about Ruby on Rails
- [ ] Responsive design
