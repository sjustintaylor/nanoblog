# TODO

## Core Implementation Tasks

- [x] Create a posts migration and model

  - [x] Define posts table schema with user relationship
  - [x] Implement Post model with appropriate columns and validation
    - Posts need to store the QuillJS Delta format, as well as the rendered html of that output

- [ ] Implement the PostsController methods

  - [ ] `store`: Create new posts
  - [ ] `update`: Edit existing posts
  - [ ] `destroy`: Delete posts

- [ ] Add routes for posts in start/routes.ts

- [ ] Create post view templates

  - [ ] Create modal dialog for adding/editing posts
    - Use AlpineJS for the modal, and QuillJS for the rich text editor
    - https://thelinuxcode.com/learn-alpine-js-in-this-free-interactive-tutorial/
  - [ ] Create dialog for confirming post delete action

- [x] Implement ProfilesController.update method to set user bio
- [x] Create view templates for editing a user's bio

  - [x] Use a modal with a textarea, with a limit of 64 words/360 characters
  - [x] Create a "Modal" component for reuse
  - [x] Break "Modal" component into pieces for efficiency - container, trigger, body, footer

- [x] Connect real user data to the profile page
  - [x] Replace placeholder data with actual user posts
  - [x] Implement proper user fetching in ProfilesController.show

## Additional Enhancements

- [ ] Add word count validation (500 word/3000 character limit)
- [ ] Implement proper error handling
- [ ] Add tests for posts functionality
