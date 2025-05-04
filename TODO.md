# TODO

## Core Implementation Tasks

- [ ] Implement html sanitization with https://github.com/apostrophecms/sanitize-html
  - [ ] For posts
  - [ ] For bio
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

  - [ ] Create "edit post" component - switches between post and editor using alpine x-html?
    - No modals for editing. One quill instance at a time, only one post being edited - changing will close the previous?
  - [ ] Create dialog for confirming post delete action - use current modal
- [ ] Change "edit bio" modal to use the "editor in place" UI, same as posts.

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
  - [ ] Add serverside validation
- [ ] Implement proper error handling
- [ ] Add tests for posts functionality
