# 📁 Folder Structure
To keep things organised, we have a folder for each service:

`chatbot` for chatbot related things

`next` for any website work

Go to the [structure](#🏗️Structure) section of Next JS to find out how our `next` app is structured.
# 🌿 Branching

For our branching strategy, we have two principle branches:

`dev`: our development branch for devs to branch off from and to later merge their work into

`main`: our production branch, where is where we merge `dev` into `main` manually.

![Branching strategy](https://drive.google.com/uc?export=view&id=1z8QHw81buKkz_HiUqn8htccozNzEFng-)

## 🍃 Starting a task
When you want to start a task, create a new branch from `dev`
(make sure to run `git fetch` so you are up-to-date with any recent changes).

We use the branching naming convention of [type of work] / [branch-name]. You can see some examples below:

A branch for developing a **new feature** or **functionality**: `feature/menu-page`

A branch to **fix** a component: `fix/navbar-size`

A branch to **refactor** anything: `refactor/folder-structure`

## 🌳 Merging

When you are done and want to merge your work, create a pull request (PR) for merging with `dev` so others can review your work.

Try to keep the scope of changes in your PRs small so they're easier to review for other devs.

You can go ahead and merge once your PR has been reviewed!

# 📝 Committing

Please commit your code regularly (so you don't lose your work) with sensible commit messages.

Please follow the convention of using `feat:`, `fix:`, or `BREAKING CHANGE:` in your commmit messages to communicate what is being committed. They are explain here: [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

Try to keep commits relevant e.g. a commit with the messsage:

`feat: created a component for menu item`

should not contain code for things that aren't related to the menu item, e.g. the menu page.