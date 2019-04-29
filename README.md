# Pre-interview Code Project

Use the [Star Wars API](http://swapi.co) to generate a list of the films that a particular character appears in.

### Requirements
Submit an application that accomplishes the objectives below. Hosting is up to you, we only need a link to a working deployment of your project, and a link to your source code. We reccomend [js bin](http://jsbin.com/), [Plunker](https://plnkr.co), and [StackBlitz](https://stackblitz.com/) for free, all-in-one solutions.

Alternatively, use [github](https://github.com/), [gitlab](https://about.gitlab.com/), or [bitbucket](https://bitbucket.org) for source control, and a real hosting service such as [AWS](https://aws.amazon.com/), [Google Cloud](https://cloud.google.com/), [Digital Ocean](https://www.digitalocean.com/), or [Heroku](https://www.heroku.com/). Bonus points for continuous integration and deployment

### Objectives
- Allow users to choose a character from the provided JSON file
- Upon selection of a character, the UI should update to display information about **each** of the films that that character appears in. Minimally: Title, and formatted ('Thursday, May 19 2005') release date
- Do this with any js framework, and some kind of component-based pattern
- You can only use the API routes found the provided 'characters.json' file, and the data returned from those calls
- Don't load the movie data until the character is clicked
- Don't show any movie information until all of the character's movies have loaded
- Handle HTTP errors (While loading the character as well as the film information)
- Separate concerns where applicable 
- Make it pretty! You're encouraged to use [Bootstrap](https://getbootstrap.com/), [Bulma](https://bulma.io/), [Material Components](https://material.io/develop/web/), or any other css framework

#### Our favorite js frameworks

- [Angular](https://angular.io/)
- [React](https://reactjs.org/)
- [Preact](https://preactjs.com/)
- [Vue](https://vuejs.org/)
  
Feel free to use any function library you'd like.

If you have feedback about the exercise, please include it.

**NOTE:** Obi-wan's URL is intentionally incorrect, please do not modify the JSON.

----

`characters.json`
```
    {
      "characters": [
        {
          "name": "Luke Skywalker",
          "url": "https://swapi.co/api/people/1/"
        },
        {
          "name": "Darth Vader",
          "url": "https://swapi.co/api/people/4/"
        },
        {
          "name": "Obi-wan Kenobi",
          "url": "https://swapi.co/api/people/unknown/"
        }, 
        {
          "name": "R2-D2",
          "url": "https://swapi.co/api/people/3/"
        }
      ]
    }
```
