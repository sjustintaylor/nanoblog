# TODO

## Core Implementation Tasks

- [ ] Create a posts migration and model

  - [ ] Define posts table schema with user relationship
  - [ ] Implement Post model with appropriate columns and validation
    - Posts need to store the QuillJS Delta format, as well as the rendered html of that output

- [ ] Implement the PostsController methods

  - [ ] `store`: Create new posts
  - [ ] `update`: Edit existing posts
  - [ ] `destroy`: Delete posts

- [ ] Add routes for posts in start/routes.ts

  - [ ] Configure proper routes for POST CRUD operations

- [ ] Create post view templates

  - [ ] Create modal dialog for adding/editing posts
    - Use Unpoly for the modal, and QuillJS for the rich text editor
  - [ ] Create post display components

- [ ] Implement ProfilesController.update method

  - [ ] Allow users to set their bio/description section

- [ ] Connect real user data to the profile page
  - [ ] Replace placeholder data with actual user posts
  - [ ] Implement proper user fetching in ProfilesController.show

## Additional Enhancements

- [ ] Add word count validation (500 word limit)
- [ ] Implement proper error handling
- [ ] Add tests for posts functionality
