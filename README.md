# furybsd-website

A new web site for FuryBSD.org made via a static site generator. The generator used is called 11ty. The decision to use 11ty was based on a few factors

- I spend 90% of my time with JS
- There are tons of web developers out there making it the lowest barrier to entry for contributors
- Even though it is JS it is not tied to any JS framework like React or Angular

For more information visit 11ty.dev

While 11ty understands pretty much anything (html, markdown, Nunjuk, JSLT etc) the only edits we'll be accepting for contributions are njk for the templates and html/markdown for content entries.

## Installation

- You will need Node and NPM installed on the machine
- Run npm install

## Development Workflow
- put your source files in the 11ty/src directory
- Run the ./make script from the root directory (./11ty/make)
- Go to localhost:8081 to view the site
- Generated files are in the 11ty/dist directory

## Project Status
The site is still currently a WIP. Below is a to do list to help illustrate the state of progress

- Add blog summary on landing page -- STARTED
- Update Hyperlinks on Navigation
- Add CSS to make landing page responsive 
- Add Blog template -- DONE!
- Add Blog content -- STARTED (1/9 posts ported)
- Add any additional content
- Design a better logo image for top right "Home" link
- Create footer with social media links
- Update Screenshots with images from newer releases

## For help with markdown check out the [markdown cheat sheet](https://www.markdownguide.org/cheat-sheet/)
