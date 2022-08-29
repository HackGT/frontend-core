# Overview

HexLab's shared frontend React components built with Chakra UI.

# Getting Started

- Development work happens in the `src/` folder. Use `yarn storybook` to start the storybook development server.
- Use the `.stories.tsx` files to make and edit your changes to update the UI.

# Contributing

Frontend core is shared React components used for all HexLabs frontend projects.

## Release

To release a new version, run `yarn release` and `git push --follow-tags origin master` to push the tags as well. Once the commits are pushed, GitHub Actions will run a workflow to publish a new version to npm.
